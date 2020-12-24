import React from 'react';
import {
  BrowserRouter, Route, Redirect, Switch,
} from 'react-router-dom';
import TheNavbar from '../components/TheNavbar/TheNavbar';
import Home from '../components/Home/Home';
import './App.scss';

const PublicRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = props => (authed === false
    ? (<Component {...props} />)
    : (<Redirect to={{ pathname: '/home', state: { from: props.location } }} />));
  return <Route {...rest} render={props => routeChecker(props)} />;
};

function App() {
  return (
    <div className="App">
            <TheNavbar></TheNavbar>
            <Home></Home>
    </div>
  );
}
export default App;