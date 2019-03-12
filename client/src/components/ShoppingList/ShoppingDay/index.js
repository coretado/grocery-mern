import React from 'react';

const ShoppingDay = ({ name, deleteItem, id }) => (
  <>
    <div className='divider' />
    <div className='section'>
      <p>{name}</p>
      <button onClick={() => deleteItem(id)} className='btn-small red-text text-darken-1 waves-light red lighten-5'>
        Delete
      </button>
    </div>
  </>              
);

export default ShoppingDay;