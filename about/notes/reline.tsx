// @ts-nocheck
import Reline from 'reline';



/**
 * thinks* to consider
 * * wanted to write things, wrote thinks
 *
 * https://en.wikipedia.org/wiki/Actor_model_theory
 * https://en.wikipedia.org/wiki/Denotational_semantics
 * https://en.wikipedia.org/wiki/Petri_net
 * https://en.wikipedia.org/wiki/Transition_system
 * https://en.wikipedia.org/wiki/Abstract_rewriting_system
 * https://en.wikipedia.org/wiki/Action_language
 * https://en.wikipedia.org/wiki/Kripke_structure_(model_checking)
 * https://en.wikipedia.org/wiki/Modal_%CE%BC-calculus
 *
 * https://en.wikipedia.org/wiki/Event_calculus - the notion of Fluent
 * In the event calculus, fluents are reified.
 *
 * which fluents hold at a given time point
 *
 * `HoldsAt(on(box, table), t)`
 * means that the box is on the table at time t;
 * in this formula, `HoldsAt` is a predicate while `on` is a function.
 */



const stateTransformer = ({
    state,
}) => {

}

const Div = () => {
    Reline.Message(() => {

    })('App')

    return (
        <div>
            A div
        </div>
    );
}

const App = ({
    properties,
    transformers,
}) => {
    return (
        <div>
            App

            <Div />
        </div>
    );
}

Reline.Actor(<App />)
Reline.Semantic()
Reline.Diagram()
Reline.Domain()
Reline.Fluent()

Reline.Render(
    <App />,
    'root',
);



/**
 * Actor Model Theory
 *
 * each component is an actor
 * each actor:
 *     + sends/receives messages
 *     + generates new actors
 *     + affects local state
 */


class RelineActor {
    /**
     * Listens for messages.
     */
    listen() {

    }

    /**
     * Send message to another Actor
     */
    message(
        target: RelineActor,
        data: any,
    ) {

    }

    /**
     * Modify local state.
     */
    affect() {

    }

    /**
     * Generate new Actor
     */
    generate() {

    }

    /**
     * Answer to the next message.
     */
    reply() {

    }
}


//
// RelineTheater, RelineActor, RelineCostume
//  |                 |              |
//  |                 |             styling
//  |               events holder
//  a group of acotrs
//


/**
 * To also have the idea of the Theatre altering the behaviour of the actors
 *
 * <TheatreOne>
 *      <ActorOne>
 * </TheatreOne>
 *
 * <TheatreTwo>
 *      <ActorOne>
 * </TheatreTwo>
 *
 * The first TheatreOne will render the actor one way
 * The second TheatreTwo will render the actor another way
 *
 *
 */





const theatre = new Reline.Theatre();

const prompter = new Reline.Prompter();


const HeaderCostume = new Reline.Costume(
    'div',
    `
        margin: 10px;
        background: ${(properties: RelineCostumeProperties) => {
            if (properties.theme === 'dark') {
                return 'black';
            }

            return 'white';
        }};
    `,
);

const headerBehaviour = {
    state: () => {
        return {
            theme: 'dark',
        };
    },
    show: (
        state: any,
        message: any,
        self: any,
    ) => {
        const {
            theme,
        } = state;

        const {
            title,
        } = self.properties;

        return (
            <HeaderCostume
                theme={theme}
            >
                {title}
            </HeaderCostume>
        )
    }
};

const Header = new Reline.Actor(
    prompter,
    headerBehaviour,
);

const applicationBehaviour = {
    state: () => {
        return {};
    },
    show: (
        state: any,
        message: any,
        self: any,
    ) => {
        return (
            <div>
                <Header
                    title="Appliation Header"
                />
            </div>
        )
    }
};

const Application = new Reline.Actor(
    prompter,
    applicationBehaviour,
);

theatre.show(
    Application,
    'root',
);
