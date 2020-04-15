import {
    EventEmitter,
} from 'events';

import BaseActor from '../';



describe('RelineActor', () => {
    it.only('sends a message', () => {
        const mailbox = new EventEmitter();

        const actorOne = new BaseActor(
            mailbox,
            {
                initialize: () => {
                    return { count: 0 };
                },
                incrementBy(state: any, message: any) {
                    const {
                        data,
                    } = message;
                    const {
                        number,
                    } = data;

                    let count = state.count + number;

                    return { count };
                },
                logTotal(state: any) {
                    console.log(state.count);
                },
            },
        );
        const actorOneAddress = actorOne.getAddress();

        const actorTwo = new BaseActor(
            mailbox,
            {
                initialize: () => {
                    return {
                        boo: 'boo',
                    };
                },
                getState: (state: any) => {
                    console.log(state);
                }
            },
        );

        actorTwo.send(actorOneAddress, ["logTotal"] as any);

        // Increment the counter by 2
        actorTwo.send(actorOneAddress, ["incrementBy", { number: 2 }]);

        // Log the current state
        actorTwo.send(actorOneAddress, ["logTotal"] as any); // => { count: 2 }

        const actorTwoAddress = actorTwo.getAddress();
        actorTwo.send(actorTwoAddress, ["getState"] as any); // => { count: 2 }
    });
});
