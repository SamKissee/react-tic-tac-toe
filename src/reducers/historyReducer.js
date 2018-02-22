import defaultState from './../defaultState';

export default (state = defaultState, action) => {

  switch(action.type){
  case 'HISTORY':
    const history = state.history.slice(0, state.stepNumber + 1);
    const current = history[history.length - 1];
    const squares = current.squares.slice();
    // const { i } = action;
    let newState = Object.assign({}, state, {
      history: history.concat([
        {
          squares: squares
        }
      ]),
    });
    console.log({history: newState.history});
    return {history: newState.history};
  default:
    return state.history;
  }
};
