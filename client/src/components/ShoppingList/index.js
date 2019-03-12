import React, { useState } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../../store/actions/itemActions';

import ShoppingDay from './ShoppingDay';

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

const mapStateToProps = () => {

}

const mapDispatchToProps = () => {

}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingList);