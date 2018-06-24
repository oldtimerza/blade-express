import Link from "next/link";
import { Component } from "react";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

import FlameLinkStore from "../../static/js/flamelink-store";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menus: null
    };
  }

  componentDidMount() {
    FlameLinkStore.getInstance()
      .getNavigation("mainNavigation")
      .then(response => {
        this.setState({ menus: response });
      });
  }

  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">BladeExpress</NavbarBrand>
        <Nav className="mr-auto">
          {this.state.menus &&
          this.state.menus.items &&
          this.state.menus.items.length
            ? this.state.menus.items.map(item => (
                <NavItem key={item.id}>
                  <NavLink href={item.url}>{item.title}</NavLink>
                </NavItem>
              ))
            : null}
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
