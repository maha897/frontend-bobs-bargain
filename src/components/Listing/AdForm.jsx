import { useContext, useState } from "react";
import { Context } from "../../App";
import { createListing } from "../../service/api";
import { Link, useNavigate } from "react-router-dom";
import { FiStar, FiX } from "react-icons/fi";

function AdForm() {
  const { token, userId } = useContext(Context);
  const navigate = useNavigate();

  const initForm = {
    userId: userId,
    title: "",
    description: "",
    category: "",
    price: 0,
    address: "",
    images: [],
    city: "",
    postcode: "",
    sold: false,
  };

  const [inputData, setInputData] = useState(initForm);

  function submitForm(event) {
    event.preventDefault();

    async function queryCreation() {
      try {
        const putResponse = await createListing(inputData, token);
        console.log("Created listing!");
        navigate(`/listings/${putResponse.id}`);
      } catch (error) {
        console.error(`Error creating listing: `, inputData, error.response);
      }
    }

    queryCreation();
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setInputData({ ...inputData, [name]: value });
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
    <div className="ad-form-container">
      <form className="ad-form" onSubmit={submitForm}>
        <div className="ad-form-product-info">
          <h2>List new item</h2>
          <hr></hr>
          <br />
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={inputData.title}
            required
            placeholder="Title"
          />
          <br />
          <textarea
            name="description"
            className="desc-textarea"
            onChange={handleChange}
            value={inputData.description}
            placeholder="Description..."
          ></textarea>{" "}
          <br />
          <div className="label-label-box">
            <div className="label-box">
              <label htmlFor="category">Category</label> <br />
              <select
                onChange={handleChange}
                value={inputData.category || ""}
                required
                name="category"
              >
                <option value="" disabled>
                  Select Category
                </option>
                <option value="electronics">Electronics & Appliances</option>
                <option value="clothing">Clothing & Cosmetics</option>
                <option value="furniture">Furniture & Interior</option>
                <option value="vehicles">Vehicles</option>
                <option value="tools">Tools & Equipment</option>
                <option value="sports">Sports & Hobby</option>
                <option value="other">Other</option>
              </select>
            </div>
            <br />
            <div className="label-box">
              <label htmlFor="price" style={{ marginRight: "18px" }}>
                Price
              </label>{" "}
              <br />
              <input
                type="number"
                name="price"
                onChange={handleChange}
                value={inputData.price}
              />
            </div>
            <br />
            <div className="label-box">
              <label htmlFor="images">Images</label> <br />
              <input
                type="file"
                name="images"
                onChange={handleImage}
                multiple
              />
            </div>
            <br />
          </div>
        </div>

        <div className="ad-form-contact-info">
          <input
            type="text"
            name="address"
            onChange={handleChange}
            value={inputData.address}
            required
            placeholder="Address"
          />{" "}
          <div className="postal-info">
            <input
              type="text"
              name="city"
              onChange={handleChange}
              className="postal-city"
              value={inputData.city}
              required
              placeholder="City"
            />
            <br />
            <input
              type="number"
              name="postcode"
              onChange={handleChange}
              value={inputData.postcode}
              className="postal-code"
              required
              placeholder="Postcode"
            />{" "}
            <br />
          </div>
        </div>
        <br />
        <button type="submit" style={{ marginRight: "20px" }}>
          <FiStar style={{ transform: "translateY(2px)" }} />{" "}
          <FiStar style={{ transform: "translateY(2px)" }} /> Publish{" "}
          <FiStar style={{ transform: "translateY(2px)" }} />{" "}
          <FiStar style={{ transform: "translateY(2px)" }} />
        </button>
        <Link to={"/"}>
          <button type="submit" style={{ backgroundColor: "rgb(219, 66, 66)" }}>
            <FiX style={{ transform: "translateY(2px)" }} /> Cancel
          </button>
        </Link>
      </form>
    </div>
  );
}

export default AdForm;
