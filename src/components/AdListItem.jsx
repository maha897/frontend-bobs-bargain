import PropTypes from "prop-types"

function AdListItem({ ad }) {
    return (
      <div className="ad-container">
        <li className="ad-li">
            {ad.title}
            {ad.description}
            {ad.price}
        </li>
      </div>
    );
}

AdListItem.propTypes = {
    ad: PropTypes.object
}

export default AdListItem