import React from "react";
import { connect } from "react-redux";
import { loadUser } from "../../store/actions/authActions";
import { Redirect, withRouter } from "react-router-dom";
import * as ROUTES from "../../routes";

const withAuth = Component => {
  class WithAuth extends React.Component {
    componentDidMount() {
      this.props.loadUser();

      if (!this.props.isAuthenticated) {
        this.props.history.push(ROUTES.SIGNIN);
      }
    }

    render() {
      const { isAuthenticated } = this.props;

      return (
        <>
          {isAuthenticated ? (
            <Component {...this.props} />
          ) : (
            <Redirect to={ROUTES.SIGNIN} />
          )}
        </>
      );
    }
  }

  const mapStateToProps = ({ auth }) => ({
    isAuthenticated: auth.isAuthenticated
  });

  const mapDispatchToProps = {
    loadUser
  };

  return withRouter(
    connect(
      mapStateToProps,
      mapDispatchToProps
    )(WithAuth)
  );
};

export default withAuth;
