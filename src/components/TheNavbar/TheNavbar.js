import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './TheNavbar.scss';

class TheNavbar extends React.Component {

  render() {
    const { isAuthed, logoutClickEvent } = this.props;
    return (
      <div className="the-navbar">
      <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">BeWell Room</NavbarBrand>
      </Navbar>
      </div>
    );
  }
}

export default TheNavbar;
