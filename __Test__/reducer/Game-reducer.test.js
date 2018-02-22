import GameReducer from './../../src/reducers/Game-reducer';

describe('GameReducer', () => {

  let action;
  let square = {0: null, 1: null, 2: null, 3: null, 4: null, 5: null, 6: null, 7: null, 8: null}
;

  test('Should return default state if no action type is recognized', () => {
    expect(GameReducer({}, { type: null })).toEqual({});
  });

  test('Should return new state after making the box', () => {
    action = {
      type: 'CLICK_BOX',
      square: square
    };
    expect(GameReducer({}, action)).toEqual(square);
  });



});
