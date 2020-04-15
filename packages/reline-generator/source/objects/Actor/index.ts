import {
    EventEmitter,
} from 'events';



interface RelineMessage<D> {
    from: symbol;
    to: symbol;
    timestamp: number;
    data: D;
}

type MethodMessage<B, D> = [keyof B, D];


class RelineBaseActor<S, B extends Record<string, Function>> {
    private mailbox: EventEmitter;
    private address: symbol;
    private state: S;
    private behaviour: B;

    constructor(
        mailbox: EventEmitter,
        behaviour: any,
    ) {
        this.mailbox = mailbox;
        this.address = Symbol();

        this.state = typeof behaviour.initialize === "function"
            ? behaviour.initialize()
            : {};
        this.behaviour = behaviour;

        mailbox.on(
            this.address,
            ([method, message]: MethodMessage<B, any>) => {
                if (typeof this.behaviour[method] === 'function') {
                    this.state = this.behaviour[method](
                        this.state,
                        message,
                    ) || this.state;
                }
            },
        );
    }

    getAddress() {
        return this.address;
    }

    public send<D>(
        target: any,
        message: MethodMessage<B, D>,
    ) {
        const [method, data] = message;
        const container: RelineMessage<D> = {
            from: this.address,
            to: this.address,
            timestamp: Date.now(),
            data,
        };

        this.mailbox.emit(
            target,
            [method, container],
        );
    }
}


export default RelineBaseActor;
