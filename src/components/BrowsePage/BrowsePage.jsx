import { useContext, useState, useEffect } from "react";
import AdsList from "./Listings/AdsList";
import SearchBar from "./SearchBar";
import { Context } from "../../App";
import { fetchAllListings } from "../../service/api";
import { FiLoader } from "react-icons/fi";

export default function BrowsePage() {
  const [listings, setListings] = useState([]);
  const [loading, setloading] = useState(true);
  const { token } = useContext(Context);

  useEffect(() => {
    async function fetchListings() {
      const listingResponse = await fetchAllListings(token);
      setListings(listingResponse);
      setloading(false);
      console.log("Listings: ", listingResponse);
    }

    fetchListings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="browse-page">
      <SearchBar setFilteredAds={setListings} setLoading={setloading} />
      {loading ? (
        <>
          <br />
          <br />
          <br />
          <FiLoader className="spin loader" />
        </>
      ) : (
        <AdsList ads={listings} />
      )}
    </div>
  );
}
