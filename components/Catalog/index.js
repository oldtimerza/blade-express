import PropTypes from "prop-types";

import Cards from "../Cards";
import Section from "../Section";
import Loading from "../Loading";

const Catalog = props => {
  const { products } = props;
  if (products && products.length) {
    const cards = products.map(product => ({
      imageUrl: product.imageUrl,
      title: product.title,
      description: product.cost
    }));
    return (
      <Section>
        <Cards cards={cards} maxNumberOfColumns={5} />
      </Section>
    );
  }
  return <Loading />;
};

Catalog.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string
    })
  )
};

export default Catalog;
