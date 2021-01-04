import React from 'react';
import './Home.scss';
import logo from '../../images/bewellLogo.jpg'

class Home extends React.Component {

  render() {
    return (
      <div classname="home-page">
        <div classname="welcome-message">
          <h1>Welcome to the BeWell Room!</h1>;
    </div>
        <div classname="logo">
          <img src={logo}></img>
        </div>
      </div>
    )
  }
}

export default Home;
