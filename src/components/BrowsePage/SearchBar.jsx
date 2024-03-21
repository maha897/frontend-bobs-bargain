import { useState, useEffect, useContext } from "react";
import { fetchAllListings } from "../../service/api";
import { Context } from "../../App";
import PropTypes from "prop-types";

function SearchBar({ setFilteredAds }) {
  const { token } = useContext(Context);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [searchQuery, setsearchQuery] = useState("");

  useEffect(() => {
    if (selectedCategory !== "" || searchQuery.trim() !== "") {
      fetchFilteredAds(selectedCategory);
    } else {
      // Fetch all listings
      fetchAllListings(token).then((data) => setFilteredAds(data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory, searchQuery]);

  const fetchFilteredAds = async () => {
    try {
      const filteredListings = await fetchAllListings(
        token,
        searchQuery,
        selectedCategory
      );
      setFilteredAds(filteredListings);
    } catch (error) {
      console.error("Error fetching filtered listings:", error);
    }
  };

  function handleSubmit(event) {
    event.preventDefault();
    const search = event.target.form[0].value;
    setsearchQuery(search);
  }

  return (
    <div className="search-bar-container">
      <form className="search-bar">
        <input name="search-query" placeholder="Search..." />
        <button type="submit" onClick={handleSubmit}>
          Search
        </button>
      </form>

      <div className="category-dropdown">
        <select
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
          name="category"
          className="category-select"
        >
          <option value="">All</option>
          <option value="electronics">Electronics & Appliances</option>
          <option value="clothing">Clothing & Cosmetics</option>
          <option value="furniture">Furniture & Interior</option>
          <option value="vehicles">Vehicles</option>
          <option value="tools">Tools & Equipment</option>
          <option value="sports">Sports & Hobby</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  setFilteredAds: PropTypes.func,
};

export default SearchBar;
