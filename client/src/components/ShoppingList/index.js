import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../../store/actions/itemActions';
import PropTypes from 'prop-types';

import ShoppingDay from './ShoppingDay';

const ShoppingList = ({ item, getItems }) => {
  const [items, setItems] = useState();

  const deleteItem = (id) => {
    setItems(items.filter(item => item.id !== id));
  }

  // Empty array to instantiate only on "componentDidMount()"
  useEffect(() => {
    // Connecting with the store
    getItems();
    // Setting store items    
    setItems(item.items);
    // Probably do this eventually...
    // setItems(getItems());
  }, [])

  if (!items) {
    return <div>Loading</div>;
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

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired
};

const mapStateToProps = (state) => {
  const { item } = state;
  return {
    item
  }
};

const mapDispatchToProps = {
  getItems
}

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ShoppingList);