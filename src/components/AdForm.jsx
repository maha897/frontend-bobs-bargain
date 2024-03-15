function AdForm() {
  return (
    <div className="ad-form-container">
      <form className="ad-form">
        <div className="ad-form-product-info">
          <h3>Product Info</h3>
          <label htmlFor="title">Title</label> <br />
          <input type="text" name="title" />
          <br />
          <br />
          <label htmlFor="description">Description</label> <br />
          <textarea name="description"></textarea> <br />
          <br />
          <label htmlFor="category">Category</label> <br />
          <select name="category">
            <option value="electronics">Electronics</option>
            <option value="clothing">Clothing</option>
            <option value="furniture">Furniture</option>
          </select>
          <br />
          <br />
          <label htmlFor="price">Price</label> <br />
          <input type="number" name="price" />
          <br />
          <br />
          <button>Attach images</button> <br /> <br />
        </div>

        <div className="ad-form-contact-info">
          <label htmlFor="address">Address</label> <br />
          <input type="text" name="address" /> <br/><br/>
          <label htmlFor="address">Address</label> <br /> 
          <input type="text" name="address" /> <br/> <br/>
        </div>

        <button>Publish ad</button>
      </form>
    </div>
  );
}

export default AdForm;
