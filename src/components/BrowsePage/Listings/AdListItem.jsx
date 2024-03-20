import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function AdListItem({ ad, edit }) {
  return (
    <div className="ad-container">
      <li className="ad-li">
        {ad.title}
        <br />
        {ad.price}$
        <br />
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
};

export default AdListItem;
