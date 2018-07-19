import React, { Component } from "react";
import { Navbar, NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

import css from "./styling.scss";

class Header extends Component {
  render() {
    return (
      <Navbar className={css.navbar} expand="md">
        <NavbarBrand href="/">
          <img src="../../static/images/store_logo.png" />
        </NavbarBrand>
        <Nav className="mr-auto">
          {this.props.menus &&
          this.props.menus.items &&
          this.props.menus.items.length
            ? this.props.menus.items.map(item => (
                <NavItem key={item.id}>
                  <NavLink href={item.url} className={css.navbar_link}>
                    {item.title}
                  </NavLink>
                </NavItem>
              ))
            : null}
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
