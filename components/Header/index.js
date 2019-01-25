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
import PropTypes from "prop-types";

import css from "./styling.scss";
import { CartContext } from "../../contexts/cart-context";
import Cart from "../Cart";
import Icon from "../Cart/Icon";

class Header extends Component {
  static propTypes = {
    menus: PropTypes.arrayOf(
      PropTypes.shape({
        items: PropTypes.arrayOf(
          PropTypes.shape({
            id: PropTypes.string,
            url: PropTypes.string,
            title: PropTypes.string
          })
        )
      })
    )
  };

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
      <CartContext.Consumer>
        {ctx => (
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
            <Nav>
              <Icon />
              <Cart cart={ctx.cart} />
            </Nav>
          </Navbar>
        )}
      </CartContext.Consumer>
    );
  }
}

export default Header;
