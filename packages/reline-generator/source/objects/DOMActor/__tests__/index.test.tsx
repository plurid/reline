import {
    EventEmitter,
} from 'events';

import DOMActor from '..';



describe('DOMActor', () => {
    it('sends a message', () => {
        const emitter = new EventEmitter();

        const actorOne = new DOMActor(
            emitter,
            {
                initialize: () => {
                    return {
                        clicked: false,
                    };
                },
                click: (
                    state: any,
                ) => {
                    const {
                        clicked,
                    } = state;

                    return {
                        clicked: !clicked,
                    };
                },
                render: (
                    state: any,
                    message: any,
                    self: any,
                ) => {
                    // return (
                    //     // <div onClick={self.send(['click'])}>
                    //     //     div from actor one
                    //     // </div>
                    // );
                },
            },
        );
        const actorOneAddress = actorOne.getAddress();

        const actorTwo = new DOMActor(
            emitter,
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
    });
});
