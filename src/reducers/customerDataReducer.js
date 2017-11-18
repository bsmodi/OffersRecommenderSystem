import objectAssign from 'object-assign';
import initialState from './initialState';

export default function offersReducer(state = initialState.customerData, action) {

  switch (action.type) {
    case 'getOffers':
        return objectAssign({}, state, {dateModified: action.dateModified});

    default:
      return state;
  }
}
