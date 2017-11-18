import { combineReducers } from 'redux';
import customerData from './customerDataReducer';
import { routerReducer } from 'react-router-redux';

const rootReducer = combineReducers({
    customerData,
  routing: routerReducer
});

export default rootReducer;
