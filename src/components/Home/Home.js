import React from 'react';
import logo from '../../images/bewellLogo.jpg';
import './Home.scss';

class Home extends React.Component {

  render() {
    return (
      <div className="home-page">
        <div className="welcome-message">
          <h1>Welcome to the BeWell Room!</h1>
        </div>
        <div className="logo">
          <img src={logo}></img>
        </div>
      </div>
    )
  }
}

export default Home;
