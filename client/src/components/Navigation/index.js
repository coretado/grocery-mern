import React from "react";
import { Link } from "react-router-dom";
import SignOut from "../Auth/SignOut";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const Navigation = ({ auth }) => {
  const { isAuthenticated, user } = auth;

  const authLinks = <SignOut />;

  const nonAuthLinks = (
    <li>
      <a href="https://github.com">Github</a>
    </li>
  );

  return (
    <>
      <nav>
        <div className="nav-wrapper green accent-4">
          <div className="container">
            <Link to="/" className="brand-logo">
              Grocerme
            </Link>
            <ul className="right">
              <li>{user && `Welcome ${user.name}`}</li>
              {isAuthenticated ? authLinks : nonAuthLinks}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

Navigation.propTypes = {
  auth: PropTypes.object.isRequired
};

const mapStateToProps = ({ auth }) => ({
  auth
});

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Navigation);
