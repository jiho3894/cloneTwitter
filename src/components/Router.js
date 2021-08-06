import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import Auth from 'routes/Auth';
import Home from 'routes/Home';
import Navigation from "components/Navigation";
import Profile from 'routes/Profile';

const RouterHandle = ({refreshUser,isLoggedIn, userObj}) => {
  return (
    <Router>
      {isLoggedIn && <Navigation userObj={userObj}/>}
      <Switch>
        {isLoggedIn ? (
        <>
        <Route exact path="/">
          <Home userObj={userObj}/>
        </Route>
        <Route exact path="/profile">
          <Profile refreshUser={refreshUser} userObj={userObj}/>
        </Route>
        </>
        ) : (
        <Route exact path="/">
          <Auth/>
        </Route>
        )}
      </Switch>
    </Router>
  );
}

export default RouterHandle;