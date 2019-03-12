import axios from 'axios';
import { ADD_ITEM, DELETE_ITEM, GET_ITEMS, LOAD_ITEMS_ERROR, LOADING_ITEMS, } from './types';

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    item
  };
};

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    id
  };
};

export const getItems = () => (dispatch) => {
  dispatch(loadItems());
  axios
    .get('/api/items')
    .then(results => 
      dispatch({
        type: GET_ITEMS, 
        items: results.data
      })
    )
};

export const loadItems = () => {
  return {
    type: LOADING_ITEMS
  };
};

export const loadItemsError = () => {
  return {
    type: LOAD_ITEMS_ERROR
  }
}