import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { connect } from "react-redux";

import Input from "../Input";
import Navigation from "../Navigation";
import ShoppingList from "../ShoppingList";
import { loadUser } from "../../store/actions/authActions";

class App extends Component {
  componentDidMount() {
    this.props.loadUser();
  }

  render() {
    return (
      <Router>
        <>
          <Navigation />
          <div className="container">
            <Input />

            <ShoppingList />
          </div>
        </>
      </Router>
    );
  }
}

const mapDispatchToProps = {
  loadUser
};

export default connect(
  null,
  mapDispatchToProps
)(App);
