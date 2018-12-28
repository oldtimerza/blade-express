import PropTypes from "prop-types";

import Cards from "../Cards";
import Loading from "../Loading";

const Catalog = props => {
  const { products } = props;
  if (products && products.length) {
    const cards = products.map(product => ({
      imageUrl: product.imageUrl,
      title: product.title,
      description: product.cost
    }));
    return <Cards cards={cards} maxNumberOfColumns={5} />;
  }
  return <Loading />;
};

Catalog.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string,
      title: PropTypes.string,
      cost: PropTypes.string
    })
  )
};

export default Catalog;
