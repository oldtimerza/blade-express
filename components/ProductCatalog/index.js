import PropTypes from "prop-types";

import InfoCards from "../InfoCards";
import InfoSection from "../InfoSection";
import Loading from "../Loading";

const ProductCatalog = props => {
  const { products } = props;
  if (products && products.length) {
    const cards = products.map(product => ({
      imageUrl: product.imageUrl,
      title: product.title,
      description: product.cost
    }));
    return (
      <InfoSection>
        <InfoCards cards={cards} maxNumberOfColumns={5} />
      </InfoSection>
    );
  }
  return <Loading />;
};

ProductCatalog.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      imageUrl: PropTypes.string,
      title: PropTypes.string,
      description: PropTypes.string
    })
  )
};

export default ProductCatalog;
