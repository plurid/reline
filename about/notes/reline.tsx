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

Reline.render(
    <App />,
    'root',
);
