import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { getItems } from '../../store/actions/itemActions';
import PropTypes from 'prop-types';

import ShoppingDay from './ShoppingDay';

const ShoppingList = ({ item, getItems, deleteItem }) => {
  const [items, setItems] = useState();

  // Empty array to instantiate only on "componentDidMount()"
  useEffect(() => {
    // Connecting with the store
    getItems();
    // Setting store items
    setItems(item.items);
    // Watching item.items for state change
  }, [item.items]);

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
              id={id}
            />          
        ))}

        <div className='divider' />              
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
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ShoppingList);