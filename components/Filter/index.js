import React from "react";
import PropTypes from "prop-types";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  InputGroup,
  Input
} from "reactstrap";

import { FilterContext } from "../../contexts/filter-context";
import { SearchContext } from "../../contexts/search-context";

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
      <div>
        <FilterContext.Consumer>
          {({ onCategoryChange }) => (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret>
                {filter.selectedCategory.name}
              </DropdownToggle>
              <DropdownMenu>
                {categories && categories.length
                  ? categories.map(category => (
                      <DropdownItem onClick={() => onCategoryChange(category)}>
                        {category.name}
                      </DropdownItem>
                    ))
                  : null}
              </DropdownMenu>
            </Dropdown>
          )}
        </FilterContext.Consumer>
        <SearchContext.Consumer>
          {({ onChange }) => (
            <InputGroup>
              <Input
                placeholder="Search"
                onChange={e => onChange(e.target.value)}
              />
            </InputGroup>
          )}
        </SearchContext.Consumer>
      </div>
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
