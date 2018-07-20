import React, { Component } from "react";
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarToggler,
  Collapse
} from "reactstrap";

import css from "./styling.scss";

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      toggle: false
    };
  }

  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <Navbar className={`${css.navbar} py-0`} expand="md">
        <NavbarBrand href="/">
          <img src="../../static/images/store_logo.png" />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} className={css.navbar_toggler}>
          <div
            className={`hamburger hamburger--slider ${
              this.state.isOpen ? "is-active" : ""
            }`}
          >
            <div className="hamburger-box">
              <div className="hamburger-inner" />
            </div>
          </div>
        </NavbarToggler>
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            {this.props.menus &&
            this.props.menus.items &&
            this.props.menus.items.length
              ? this.props.menus.items.map(item => (
                  <NavItem key={item.id} className={css.navbar_link}>
                    <NavLink href={item.url} className={css.navbar_link}>
                      {item.title}
                    </NavLink>
                  </NavItem>
                ))
              : null}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Header;
