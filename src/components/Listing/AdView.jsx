import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../App";
import { useParams } from "react-router-dom";
import { deleteListing, fetchListing, fetchUser } from "../../service/api";
import { useNavigate, Link } from "react-router-dom";
import { FiLoader } from "react-icons/fi";

function AdView() {
  const { token, userId } = useContext(Context);
  const { id } = useParams();

  const [ad, setAd] = useState(null);
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    async function init() {
      try {
        const adResponse = await fetchListing(id, token);
        setAd(adResponse);

        const userResponse = await fetchUser(adResponse.user.id, token);
        setUser(userResponse);
      } catch (error) {
        console.error("Error initializing page. Redirecting to index page.");
        navigate("/");
      }
    }

    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  async function handleDeleteListing() {
    try {
      const deleteResponse = await deleteListing(id, token);
      console.log("Deleted listing: ", deleteResponse);
      navigate("/");
    } catch (error) {
      console.error("Could not delete listing: ", error.response);
    }
  }

  if (!ad || !user) {
    return <FiLoader className="spin" />;
  }

  return (
    <div className="ad-view-page">
      <div className="ad-view-container">
        <div className="product-info">
          <h2>{ad.title}</h2>
          <hr></hr>
          <p>Category: {ad.category}</p>

          <p>Description: {ad.description}</p>

          {/* {ad.images.length > 0 && (
            <div className="ad-images">
                {ad.images.map((image, index) => (
                    <img key={index} src="" alt="" />
                ))}
            </div>
        )} */}
        </div>
        <hr></hr>
        <div className="ad-contact-info">
          <p>
            Contact person: {user.firstName} {user.lastName}
          </p>
          <p>Email:{user.email}</p>
          <p>Phone:{user.phone}</p>
          <p>Postcode: {ad.postcode}</p>
          <p>Address: {ad.address}</p>
          <p>City: {ad.city}</p>
        </div>
        {userId === ad.user.id && (
          <>
            <Link to={`/listings/${ad.id}/edit`}>
              <button className="edit-ad-button">Edit</button>
            </Link>
            <button className="edit-ad-button" onClick={handleDeleteListing}>
              Delete
            </button>
          </>
        )}
      </div>
    </div>
  );
}

AdView.propTypes = {
  ad: PropTypes.object,
};

export default AdView;
