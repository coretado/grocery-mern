import { ADD_ITEM, DELETE_ITEM, GET_ITEMS, LOAD_ITEMS_ERROR, LOADING_ITEMS, } from '../actions/types';

const INITIAL_STATE = {
  items: [],
  loading: false
};

export default function(state = INITIAL_STATE, action) {
  switch(action.type) {
    case ADD_ITEM:
      console.log(`I'm about to add your item: ${action.item.name}!`);
      return {
        ...state,
        items: state.items.concat(action.item)
      };
    case DELETE_ITEM:
      console.log(`I'm about to delete an item!`);
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.id)
      };
    case GET_ITEMS:
      console.log('Hello from the reducer. You need to connect to me to actually change your state.');
      return {
        ...state, 
        items: action.items, 
        loading: false
      };
    case LOADING_ITEMS:
      console.log('Setting a loading state!');
      return {
        ...state,
        loading: true
      }
    case LOAD_ITEMS_ERROR:
      alert('Something went wrong! Please refresh the page and try again.');
      return {
        ...state,
        loading: false
      }
    default:
      return state;
  };
};