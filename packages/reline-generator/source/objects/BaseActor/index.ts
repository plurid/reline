import {
    EventEmitter,
} from 'events';

import {
    RelineMessage,
    RelineMethodMessage,
} from '../../data/interfaces';



class RelineBaseActor<S, B extends Record<string, Function>> {
    private emitter: EventEmitter;
    private address: symbol;
    private state: S;
    private behaviour: B;

    constructor(
        emitter: EventEmitter,
        behaviour: B,
    ) {
        this.emitter = emitter;
        this.address = Symbol();

        this.state = typeof behaviour.initialize === 'function'
            ? behaviour.initialize()
            : {};
        this.behaviour = behaviour;

        emitter.on(
            this.address,
            ([method, message]: RelineMethodMessage<B, RelineMessage<B, any>>) => {
                if (typeof this.behaviour[method] === 'function') {
                    this.state = this.behaviour[method](
                        this.state,
                        message,
                    ) || this.state;
                }
            },
        );
    }

    public getAddress() {
        return this.address;
    }

    public send<D>(
        target: symbol,
        message: RelineMethodMessage<B, D>,
    ) {
        const [method, data] = message;
        const container: RelineMessage<B, D> = {
            from: this.address,
            to: this.address,
            timestamp: Date.now(),
            method,
            data,
        };

        this.emitter.emit(
            target,
            [method, container],
        );
    }
}


export default RelineBaseActor;
