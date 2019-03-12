import { v4 } from 'uuid';
import { ADD_ITEM, DELETE_ITEM, GET_ITEMS } from '../actions/types';

const INITIAL_STATE = {
  items: [
    { id: v4(), name: 'Eggs' },
    { id: v4(), name: 'Milk' },
    { id: v4(), name: 'Steak' },
    { id: v4(), name: 'Perrier' },
  ]
}

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_ITEM:
      return {...state}
    case DELETE_ITEM:
      return {...state}
    case GET_ITEMS:
      return {...state}
    default:
      return state;
  };
};