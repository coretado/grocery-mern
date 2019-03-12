import React from 'react';
import { connect } from 'react-redux';
import { getItems } from '../../store/actions/itemActions';
import PropTypes from 'prop-types';

import Loading from '../Loading';
import ShoppingDay from './ShoppingDay';

class ShoppingList extends React.Component {
  componentDidMount() {
    console.log(this.props.item);
    this.props.getItems();      
  }

  render() {
    const { loading, item } = this.props; 
    const { items } = item;

    if (loading) {
      return <Loading />;
    }

    return (
      items.length > 0
        ? (
          <>      
            <div className='col s12 m5'>              
                {items.map(({ _id, name }) => (
                  <ShoppingDay
                    key={_id} 
                    name={name}               
                    id={_id}
                  />
                ))}                         
              <div className='divider' />              
            </div>
          </>
        ) : (
          <>
            <div className='divider green accent-4' />
              <p>You have no items currently. Go ahead and add some when you're ready!</p>
            <div className='divider green accent-4' />
          </>
        )
    );
  }
}

ShoppingList.propTypes = {
  getItems: PropTypes.func.isRequired,
  item: PropTypes.object.isRequired, 
};

const mapStateToProps = ({ item, loading }) => ({
  item,
  loading,
});

const mapDispatchToProps = {
  getItems,  
};

export default connect(
  mapStateToProps, 
  mapDispatchToProps
)(ShoppingList);