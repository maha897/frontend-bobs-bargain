import PropTypes from "prop-types"

function ProductListItem({ product }) {
    return (
      <div className="product-container">
        <li className="product-li">
            {product.name}
        </li>
      </div>
    );
}

ProductListItem.propTypes = {
    product: PropTypes.shape({
        id: PropTypes,
        name: PropTypes.string,
        category: PropTypes.string,
        price: PropTypes.number,
        comment: PropTypes.string,
    })
}

export default ProductListItem