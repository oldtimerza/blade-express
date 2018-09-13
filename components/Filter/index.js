import React from "react";
import PropTypes from "prop-types";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "reactstrap";

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    const { categories, filter } = this.props;
    return (
      <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
        <DropdownToggle caret>{filter.selectedCategory.name}</DropdownToggle>
        <DropdownMenu>
          {categories && categories.length
            ? categories.map(category => (
                <DropdownItem tag="a" href={"/visas?category=" + category.name}>
                  {category.name}
                </DropdownItem>
              ))
            : null}
        </DropdownMenu>
      </Dropdown>
    );
  }
}

Filter.defaultProps = {
  filter: { selectedCategory: "Africa" }
};

Filter.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string
    })
  ).isRequired,
  filter: PropTypes.shape({
    selectedCategory: PropTypes.shape({ name: PropTypes.string })
  }).isRequired
};

export default Filter;
