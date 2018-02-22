import historyReducer from './historyReducer';
import stepReducer from './stepReducer';
import xReducer from './xReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  history: historyReducer,
  stepNumber: stepReducer,
  xIsNext: xReducer
});

export default rootReducer;
