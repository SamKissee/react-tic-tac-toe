import historyReducer from './../../src/reducers/historyReducer';
import defaultState from './../../src/defaultState';

describe('historyReducer', () => {
  let action;
  let sampleData = defaultState;

  test('Should return default state if no action type is recognized', () => {
    expect(historyReducer(defaultState, { type: null })).toEqual({
      history: defaultState.history
    });
  });

  test('Should return newState after Handle click function', () => {
    action = {
      type: 'HISTORY'

    };
    expect(historyReducer(defaultState, action)).toEqual({
      history: defaultState.history.concat({squares: Array(9).fill(null)})

    });
  });

});
