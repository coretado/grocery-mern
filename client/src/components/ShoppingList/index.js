import React, { useState } from 'react';
import { v4 } from 'uuid';

import ShoppingDay from './ShoppingDay';

const ITEMS = [
  { id: v4(), name: 'Eggs' },
  { id: v4(), name: 'Milk' },
  { id: v4(), name: 'Steak' },
  { id: v4(), name: 'Perrier' },
];

const ShoppingList = () => {
  const [items, setItems] = useState(ITEMS);

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  }

  return (
    <>      
      <div className='col s12 m5'>        
        {items.map(({ id, name }) => (
            <ShoppingDay
              key={id} 
              name={name} 
              deleteItem={deleteItem} 
              id={id}
            />          
        ))}

        <div className='divider' />      
        <button 
          style={{
            marginBottom: '2rem', 
            marginTop: '2rem'
          }} 
          className='btn-small green accent-4'
        >
          Add item
        </button>
      </div>
    </>
  );
}

export default ShoppingList;