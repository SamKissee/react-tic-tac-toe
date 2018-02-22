import rootReducer from './../../src/reducers/rootReducer';
import historyReducer from './../../src/reducers/historyReducer';
import stepReducer from './../../src/reducers/stepReducer';
import xReducer from './../../src/reducers/xReducer';
import { createStore } from 'redux';
import defaultState from './../../src/defaultState';


let store = createStore(rootReducer);

describe("rootReducer", () => {

  test('Should return default state if no action type is recognized', () => {
    expect(rootReducer({}, { type: null })).toEqual({
      history: defaultState.history,
      stepNumber: defaultState.stepNumber,
      xIsNext: defaultState.xIsNext
    });
  });

  test('Should contain historyReducer logic', () => {
    expect(store.getState().history).toEqual(historyReducer(undefined, { type: null }));
  });

  test('Should contain xReducer logic', () => {
    expect(store.getState().xIsNext).toEqual(xReducer(undefined, { type: null }));
  });

  test('Should contain stepReducer logic', () => {
    expect(store.getState().stepNumber).toEqual(stepReducer(undefined, { type: null }));
  });

});
