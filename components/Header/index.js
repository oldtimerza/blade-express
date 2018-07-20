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
      <Navbar expand="md">
        <NavbarBrand href="/">
          <img src="../../static/images/store_logo.png" />
        </NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
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
        </Collapse>
      </Navbar>
    );
  }
}

export default Header;
