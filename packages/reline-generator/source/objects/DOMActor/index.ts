import {
    EventEmitter,
} from 'events';

import RelineBaseActor from '../BaseActor';
import RelineGenerator from '../Generator';

import {
    RelineMessage,
    RelineMethodMessage,
} from '../../data/interfaces';



class RelineDOMActor<S, B extends Record<string, Function>> extends RelineBaseActor<S, B> {
    constructor(
        emitter: EventEmitter,
        behaviour: B,
    ) {
        super(emitter, behaviour);

        const address = this.getAddress();

        emitter.on(
            address,
            ([method, message]: RelineMethodMessage<B, RelineMessage<B, any>>) => {
                if (method === 'render') {
                    // work on rendering
                }
            },
        );
    }

    public send<D>(
        target: symbol,
        message: RelineMethodMessage<B, D>,
    ) {

    }
}


export default RelineDOMActor;
