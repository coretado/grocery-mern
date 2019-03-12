import { ADD_ITEM, DELETE_ITEM, GET_ITEMS } from './types';

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    item
  }
}

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    id
  }
}

export const getItems = () => {
  return {
    type: GET_ITEMS,
  }
}