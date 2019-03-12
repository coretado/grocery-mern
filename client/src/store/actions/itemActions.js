import axios from 'axios';
import { ADD_ITEM, DELETE_ITEM, GET_ITEMS, LOAD_ITEMS_ERROR, LOADING_ITEMS, } from './types';

export const addItem = (item) => (dispatch) => {
  axios
  .post('/api/items', item)
  .then(res =>
    dispatch({
      type: ADD_ITEM, 
      item: res.data
    })
  );
};

export const deleteItem = (id) => dispatch => {
  axios
  .delete(`/api/items/${id}`)
  .then(res =>
    dispatch({
      type: DELETE_ITEM, 
      id
    })
  );
};

export const getItems = () => (dispatch) => {
  dispatch(loadItems());
  axios
  .get('/api/items')
  .then(res => 
    dispatch({
      type: GET_ITEMS, 
      items: res.data
    })
  );
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