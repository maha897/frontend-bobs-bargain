import { useContext, useState } from "react";
import { Context } from "../../App";

function AdForm() {
  const { ads, setAds, userLoggedIn } = useContext(Context);

  const initForm = {
    userId: userLoggedIn.id,
    title: "",
    description: "",
    category: "other",
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
    setAds([...ads, inputData]);
    setInputData(initForm);

    /*
    event.preventDefault()

    fetch("https://boolean-api-server.fly.dev/maha897/contact", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(inputData)
        })
            .then((response) => response.json())
            .then(
              // ...
            ).catch((error) => console.error("Error publishing ad: ", error))
    }
  */
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setInputData({ ...inputData, [name]: value });
  }

  function handleImage(event) {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = function(event) {
        const byteArray = new Uint8Array(event.target.result);
        console.log(byteArray)
        setInputData({
          ...inputData,
          images: [...inputData.images, byteArray],
        });
    }

    reader.readAsArrayBuffer(file);
  }
    /*
    console.log(event.target.files)
    setInputData({
      ...inputData,
      images: [...inputData.images, URL.createObjectURL(event.target.files[0])],
    });
    console.log(inputData.images)*/

  return (
    <div className="ad-form-container">
      <form className="ad-form" onSubmit={submitForm}>
        <div className="ad-form-product-info">
          <h3>Product Info</h3>
          <label htmlFor="title">Title</label> <br />
          <input
            type="text"
            name="title"
            onChange={handleChange}
            value={inputData.title}
            required
          />
          <br />
          <br />
          <label htmlFor="description">Description</label> <br />
          <textarea
            name="description"
            onChange={handleChange}
            value={inputData.description}
          ></textarea>{" "}
          <br />
          <br />
          <label htmlFor="category">Category</label> <br />
          <select
            onChange={handleChange}
            value={inputData.category}
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
            value={inputData.price}
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
            value={inputData.address}
            required
          />{" "}
          <br />
          <br />
          <label htmlFor="city">City</label> <br />
          <input
            type="text"
            name="city"
            onChange={handleChange}
            value={inputData.city}
            required
          />{" "}
          <br /> <br />
          <label htmlFor="postcode">Post code</label> <br />
          <input
            type="number"
            name="postcode"
            onChange={handleChange}
            value={inputData.postcode}
            required
          />{" "}
          <br /> <br />
        </div>

        <button type="submit">Publish ad</button>
      </form>
    </div>
  );
}

export default AdForm;
