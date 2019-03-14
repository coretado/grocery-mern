import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { connect } from "react-redux";

import Input from "../Input";
import Navigation from "../Navigation";
import ShoppingList from "../ShoppingList";
import SignIn from "../Auth/SignIn";
import SignUp from "../Auth/SignUp";
import { loadUser } from "../../store/actions/authActions";
import * as ROUTES from "../../routes";

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
            <Switch>
              <Route exact path={ROUTES.HOME} component={ShoppingList} />
              <Route path={ROUTES.SIGNUP} component={SignUp} />
              <Route path={ROUTES.SIGNIN} component={SignIn} />
            </Switch>
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
