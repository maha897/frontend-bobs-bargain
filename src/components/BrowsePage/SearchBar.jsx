import { useState, useEffect, useContext } from "react";
import { fetchAllListings } from "../../service/api";
import { Context } from "../../App";
import PropTypes from "prop-types";

function SearchBar({ setFilteredAds }) {
  const { token } = useContext(Context);
  const [selectedCategory, setSelectedCategory] = useState("");

  useEffect(() => {
    if (selectedCategory !== "") {
      fetchFilteredAds(selectedCategory);
    } else {
      // If no category is selected, fetch all listings
      fetchAllListings(token).then((data) => setFilteredAds(data));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategory]); // Fetch filtered ads whenever the selected category changes

  const fetchFilteredAds = async (category) => {
    try {
      const filteredListings = await fetchAllListings(token, null, category);
      setFilteredAds(filteredListings);
    } catch (error) {
      console.error("Error fetching filtered listings:", error);
    }
  };

  return (
    <div className="search-bar-container">
      <form className="search-bar">
        <input name="search-query" placeholder="Search..." />
        <button type="submit">Search</button>
      </form>

      <div className="category-dropdown">
        <select
          value={selectedCategory}
          onChange={(event) => setSelectedCategory(event.target.value)}
          name="category"
          className="category-select"
        >
          <option value="">All</option>
          <option value="electronics">Electronics and appliances</option>
          <option value="clothing">Clothing and cosmetics</option>
          <option value="furniture">Furniture and interior</option>
          <option value="vehicles">Vehicles</option>
          <option value="house">House and renovation</option>
          <option value="other">Other</option>
        </select>
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  setFilteredAds: PropTypes.function,
};

export default SearchBar;
