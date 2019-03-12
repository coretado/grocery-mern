import React, { Component } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import Input from '../Input';
import Navigation from '../Navigation';
import ShoppingList from '../ShoppingList';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Navigation />
          <div className='container'>
            <Input />
            
            <ShoppingList />            
          </div>        
        </>
      </Router>
    );
  }
}

export default App;
