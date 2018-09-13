import React from "react";
import PropTypes from "prop-types";

import Catalog from "../components/Catalog";
import Loading from "../components/Loading";
import Filter from "../components/Filter";
import Section from "../components/Section";

const Visas = props => {
  const { results, categories, filter } = props;
  return (
    <Section>
      {categories && categories.length ? (
        <Filter categories={categories} filter={filter} />
      ) : null}
      {results && results.length ? <Catalog products={results} /> : <Loading />}
    </Section>
  );
};

Visas.defaultProps = {
  filter: { selectedCategory: { name: "Africa" } }
};

Visas.propTypes = {
  categories: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string
    })
  ),
  results: PropTypes.arrayOf(PropTypes.object),
  query: PropTypes.object
};

Visas.getInitialProps = async function({ req, query }) {
  const FlameLinkStore = await require("../static/js/flamelink-store").default;
  const categories = await FlameLinkStore.getStore().getContent("visaCategory");
  const matchingCategory = categories.find(
    category => category.name == query.category
  );
  const filter = matchingCategory
    ? { selectedCategory: matchingCategory }
    : { selectedCategory: categories[0] };
  const results = await FlameLinkStore.getStore().getContent("visaSummary", {
    orderByChild: "category",
    equalTo: filter.selectedCategory.name
  });
  return {
    categories,
    results,
    filter
  };
};

export default Visas;
