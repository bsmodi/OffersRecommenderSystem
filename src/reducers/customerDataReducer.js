import objectAssign from 'object-assign';
import initialState from './initialState';

export default function offersReducer(state = initialState.customerData, action) {

  switch (action.type) {
    case 'loadSuccess':
        return objectAssign({}, state, {offers: action.data});

    case 'handleChange':
        return objectAssign({}, state, {userId: action.userId});

    default:
      return state;
  }
}
