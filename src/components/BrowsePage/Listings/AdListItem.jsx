import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import placeholder from "../../../assets/stock-img.jpg";

function AdListItem({ ad, index }) {
  // Fade in delay on ads:
  const animationDelay = `${index * 0.3}s`;

  return (
    <div className="ad-container" style={{ animationDelay }}>
      <li className="ad-li">
        <img src={placeholder} style={{ width: "160px", height: "auto" }} />
        <p>{ad.title}</p>
        <p>${ad.price}</p>
        <div className="ad-contact-info">
          <Link to={`/listings/${ad.id}`}>
            <button>View</button>
          </Link>
        </div>
      </li>
    </div>
  );
}

AdListItem.propTypes = {
  ad: PropTypes.object,
  edit: PropTypes.bool,
  index: PropTypes.number,
};

export default AdListItem;
