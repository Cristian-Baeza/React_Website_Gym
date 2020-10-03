import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen
    });
  }

  render() {
    return (
      <React.Fragment>
        <Navbar className="navbar" dark sticky="top" expand="md">
          <div className="container">
            <NavbarBrand className="mr-auto" href="/">
              <img src="assets/images/10p-logo.png" className="rounded-circle" alt="10p logo" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggleNav} className='navbar-toggler' />
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar className="ml-auto">
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <i className="fa fa-home fa-sm" /> Home
                  </NavLink>
                </NavItem>


                <NavItem>
                  <NavLink className="nav-link" to="/about">
                    <i className="fa fa-info fa-sm" /> About
                  </NavLink>
                </NavItem>


                <NavItem>
                  <NavLink className="nav-link" to="/location">
                    <i className="fa fa-compass fa-sm" />Location
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="nav-link" to="/schedule">
                    <i className="fa fa-clock-o fa-sm" />Schedule
                  </NavLink>
                </NavItem>

                <NavItem>
                  <NavLink className="nav-link" to="/store">
                    <i className="fa fa-shopping-cart fa-sm" />Store
                  </NavLink>
                </NavItem>

              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </React.Fragment>
    );
  }
}

export default Header;