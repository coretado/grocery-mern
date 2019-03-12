import React, { Component } from 'react';

import Navigation from '../Navigation';
import ShoppingList from '../ShoppingList';

class App extends Component {
  render() {
    return (
      <>
        <Navigation />
        <div className='container'>
          <ShoppingList />
        </div>        
      </>
    );
  }
}

export default App;
