import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { v4 } from 'uuid';
import '../../App.css';

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
      <button style={{marginBottom: '2rem', marginTop: '2rem'}} className='btn-small green accent-4'>
        Add item
      </button>

      <div className='col s12 m5'>    
        <TransitionGroup className="grocery-list">
          {items.map(({ id, name }) => (
            <CSSTransition 
              key={id}                              
              timeout={500} 
              classNames="fade" 
              unmountOnExit                             
            >
              <>
                <div className='divider' />
                <div className='section'>
                  <p>{name}</p>
                  <button onClick={() => deleteItem(id)} className='btn-small red-text text-darken-1 waves-light red lighten-5'>
                    Delete
                  </button>
                </div>
              </>              
            </CSSTransition>
          ))}        
        <div className='divider' />
        </TransitionGroup>
      </div>      
    </>
  );
}

export default ShoppingList;