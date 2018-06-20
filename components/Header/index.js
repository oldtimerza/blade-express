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

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">BladeExpress</NavbarBrand>
        <Nav className="mr-auto">
          <NavItem>
            <NavLink href="/">Visas</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Courier</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Airport transfer</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/about">About us</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/">Contact us</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default Header;
