import * as React from 'react';
import { useReducer } from 'react';
import { reducer, State, Message } from '../logic/reducer';
import { Card } from './Card';

const initialState = new State();

function Application() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = createActions(dispatch);

  const cards = state.participants
    .map((p, i) => <Card key={`card-${i}`} participant={p} />);

  return (
    <>
      <button onClick={actions.addRow}>Add Row</button>
      <hr />
      {cards}
    </>
  );
}

const createActions = (dispatch: React.Dispatch<Message>) => ({
  addRow: () => dispatch({ type: 'add-row' })
});

export default Application;
