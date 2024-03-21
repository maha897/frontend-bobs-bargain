import PropTypes from "prop-types";
import { useContext, useEffect, useState } from "react";
import { Context } from "../../App";
import { useParams } from "react-router-dom";
import { deleteListing, fetchListing, fetchUser } from "../../service/api";
import { useNavigate, Link } from "react-router-dom";
import { FiLoader, FiPhone, FiMail } from "react-icons/fi";
import Avatar from "react-avatar";
import placeholder from "../../assets/stock-img.jpg";

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
    return (
      <>
        <br />
        <br />
        <br />
        <FiLoader className="spin" />
      </>
    );
  }

  return (
    <div className="ad-view-page">
      <div className="ad-view-container">
        <div className="product-info">
          <div className="view-flex">
            <h2>
              ${ad.price} - {ad.title}
            </h2>
            <h5>in {mapCategoryValueToText(ad.category)}</h5>
          </div>
        </div>
        <img
          src={placeholder}
          style={{ width: "250px", height: "auto", borderRadius: "5px" }}
        />
        <p>{ad.description}</p>
        <hr></hr>
        <div className="ad-contact-info">
          <div className="normal-view-flex">
            <div className="normal-flex-div">
              <Avatar
                className="view-avatar"
                name={`${user.firstName} ${user.lastName}`}
                size={50}
                round={true}
              />
              <div className="view-text">
                <p
                  style={{
                    fontWeight: "bold",
                    color: "#71104c",
                  }}
                >
                  {user.firstName} {user.lastName}
                </p>
                <p>
                  {ad.address}, {ad.postcode} {ad.city}
                </p>
                <p>
                  <FiMail
                    style={{ transform: "translateY(2px)", marginRight: "5px" }}
                  />
                  <a href={`mailto:${user.email}`}>{user.email}</a>
                </p>
                <p>
                  <FiPhone
                    style={{ transform: "translateY(2px)", marginRight: "4px" }}
                  />{" "}
                  {user.phone}
                </p>
              </div>
            </div>
          </div>
        </div>
        {userId === ad.user.id && (
          <>
            <hr></hr>
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

const mapCategoryValueToText = (value) => {
  switch (value) {
    case "electronics":
      return "Electronics & Appliances";
    case "clothing":
      return "Clothing & Cosmetics";
    case "furniture":
      return "Furniture & Interior";
    case "vehicles":
      return "Vehicles";
    case "tools":
      return "Tools & Equipment";
    case "sports":
      return "Sports & Hobby";
    case "other":
      return "Other";
    default:
      return "Unknown";
  }
};

AdView.propTypes = {
  ad: PropTypes.object,
};

export default AdView;
