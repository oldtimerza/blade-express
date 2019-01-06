import React from "react";
import PropTypes from "prop-types";

import Catalog from "../components/Catalog";
import Loading from "../components/Loading";
import Filter from "../components/Filter";
import Section from "../components/Section";
import { FilterContext } from "../contexts/filter-context";
import { SearchContext } from "../contexts/search-context";

class Visas extends React.Component {
  static propTypes = {
    categories: PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string
      })
    ),
    results: PropTypes.arrayOf(PropTypes.object),
    query: PropTypes.object
  };

  constructor(props) {
    super(props);
    const { results, filter } = props;
    this.state = {
      loading: false,
      filter: filter,
      results: results,
      filteredResults: results
    };
  }

  changeSearch = search => {
    const { results } = this.state;
    if (search == "") {
      this.setState({ filteredResults: results });
      return;
    }
    const regex = new RegExp(search.toLowerCase());
    const filteredResults = results.filter(result =>
      regex.test(result.title.toLowerCase())
    );
    this.setState({ filteredResults });
  };

  changeCategory = category => {
    const filter = { selectedCategory: category };
    this.setState({ loading: true, filter }, async () => {
      const products = await this.props.moltinService.getProducts({
        filter: { category: filter.selectedCategory }
      });
      const results = products.data.map(product => ({
        imageUrl: product.imageurl,
        title: product.name,
        cost: product.price[0].amount,
        id: product.id
      }));
      this.setState({ results, filteredResults: results }, () =>
        this.setState({ loading: false })
      );
    });
  };

  render() {
    const { categories } = this.props;
    const { filteredResults, filter, loading } = this.state;
    return (
      <SearchContext.Provider value={{ onChange: this.changeSearch }}>
        <FilterContext.Provider
          value={{ onCategoryChange: this.changeCategory }}
        >
          <Section>
            {categories && categories.length ? (
              <Filter categories={categories} filter={filter} />
            ) : null}
            {loading ? <Loading /> : null}
            {!loading && filteredResults && filteredResults.length ? (
              <Catalog products={filteredResults} />
            ) : null}
          </Section>
        </FilterContext.Provider>
      </SearchContext.Provider>
    );
  }
}

Visas.getInitialProps = async function({ req, query, moltinService }) {
  const categories = await moltinService.getCategories();
  const filter = { selectedCategory: categories.data[0] };
  const products = await moltinService.getProducts({
    filter: { category: filter.selectedCategory }
  });
  const results = products.data.map(product => ({
    imageUrl: product.imageurl,
    title: product.name,
    cost: product.price[0].amount,
    id: product.id
  }));
  const props = {
    categories: categories.data,
    results,
    filter
  };
  return props;
};

export default Visas;
