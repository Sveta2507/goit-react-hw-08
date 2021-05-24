import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import route from "./route";
import authOperations from "./redux/auth/operations";
import Spinner from "./components/Spinner/Spinner";

const home = lazy(() => import("./pages/HomePage"));
const login = lazy(() => import("./pages/LoginPage"));
const register = lazy(() => import("./pages/RegisterPage"));
const list = lazy(() => import("./pages/ContactsList"));

class App extends Component {
  componentDidMount() {
    if (this.props.isAuthenticated) {
      this.props.onGetCurrentUser();
      return;
    }
  }

  render() {
    return (
      <>
        <BrowserRouter>
          <Suspense
            fallback={
              <>
                <Spinner />
                <h1>Almost done</h1>
              </>
            }
          >
            <Switch>
              <Route exact path={route.Home} component={home} />
              <Route exact path={route.Login} component={login} />
              <Route exact path={route.Contacts} component={list} />
              <Route path={route.Register} component={register} />
              <Redirect to="/goit-react-hw-08" />
            </Switch>
          </Suspense>
        </BrowserRouter>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.token,
});

export default connect(mapStateToProps, {
  onGetCurrentUser: authOperations.getCurrentUser,
})(App);
