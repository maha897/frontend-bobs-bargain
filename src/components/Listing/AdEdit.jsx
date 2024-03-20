import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { fetchListing, putListing } from "../../service/api";
import { Context } from "../../App";
import { useNavigate } from "react-router-dom";

function AdEdit() {
  const { token } = useContext(Context);
  const [inputData, setInputData] = useState();
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function init() {
      try {
        const listingData = await fetchListing(id, token);
        setInputData(listingData);
      } catch (error) {
        console.error("Could not get listing. Does it exist?", error.response);
        console.log("Redirecting to index page");
        navigate("/");
      }
    }

    init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;
    setInputData({ ...inputData, [name]: value });
  }

  function handleSubmit(event) {
    event.preventDefault();

    try {
      putListing(inputData, id, token)
      navigate(`/listings/${id}`)
      console.log(`Updated listing [${id}]`);
    } catch (error) {
      console.error("Error updating listing: ", error.response);
    }
  }

  function handleImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function (event) {
      const byteArray = new Uint8Array(event.target.result);
      console.log(byteArray);
      setInputData({
        ...inputData,
        images: [...inputData.images, byteArray],
      });
    };

    reader.readAsArrayBuffer(file);
  }

  return (
    <div className="edit-ad-page">
      <div className="edit-ad-form-container">
        <form className="edit-ad-form" onSubmit={handleSubmit}>
          <div className="ad-form-product-info">
            <h3>Product Info</h3>
            <label htmlFor="title">Title</label> <br />
            <input
              type="text"
              name="title"
              onChange={handleChange}
              value={inputData?.title}
              required
            />
            <br />
            <br />
            <label htmlFor="description">Description</label> <br />
            <textarea
              name="description"
              onChange={handleChange}
              value={inputData?.description}
            ></textarea>{" "}
            <br />
            <br />
            <label htmlFor="category">Category</label> <br />
            <select
              onChange={handleChange}
              value={inputData?.category}
              name="category"
            >
              <option value="electronics">Electronics and appliances</option>
              <option value="clothing">Clothing and cosmetics</option>
              <option value="furniture">Furniture and interior</option>
              <option value="vehicles">Vehicles</option>
              <option value="house">House and renovation</option>
              <option value="other">Other</option>
            </select>
            <br />
            <br />
            <label htmlFor="price">Price</label> <br />
            <input
              type="number"
              name="price"
              onChange={handleChange}
              value={inputData?.price}
            />
            <br />
            <br />
            <input
              type="file"
              name="images"
              onChange={handleImage}
              multiple
            />{" "}
            <br />
            <br />
          </div>

          <div className="ad-form-contact-info">
            <label htmlFor="address">Address</label> <br />
            <input
              type="text"
              name="address"
              onChange={handleChange}
              value={inputData?.address}
              required
            />{" "}
            <br />
            <br />
            <label htmlFor="city">City</label> <br />
            <input
              type="text"
              name="city"
              onChange={handleChange}
              value={inputData?.city}
              required
            />{" "}
            <br /> <br />
            <label htmlFor="postcode">Post code</label> <br />
            <input
              type="number"
              name="postcode"
              onChange={handleChange}
              value={inputData?.postcode}
              required
            />{" "}
            <br /> <br />
          </div>

          <button type="submit">Update ad</button>
        </form>
      </div>
    </div>
  );
}

export default AdEdit;
