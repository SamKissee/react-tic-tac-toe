export default (state = {}, action) => {
  let newState;
  switch (action.type) {
  case 'CLICK_BOX':
    newState = Object.assign({}, state, (Array(9).fill(null)));
    return newState;
  default:
    return state;
  }
};
