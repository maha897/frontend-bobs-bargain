import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function AdListItem({ ad, edit, index }) {
  // Fade in delay on ads:
  const animationDelay = `${index * 0.3}s`
  
  return (
    <div className="ad-container" style={ {animationDelay}}>
      <li className="ad-li">
        {ad.title}
        {ad.price}
        <div className="ad-contact-info">
          <Link to={`/listings/${ad.id}`}>
            <button>View</button>
          </Link>
        </div>
        {edit && (
          <div>
            <Link to={`/listings/${ad.id}/edit`}>
              <button className="edit-ad-button">Edit</button>
            </Link>
          </div>
        )}
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
