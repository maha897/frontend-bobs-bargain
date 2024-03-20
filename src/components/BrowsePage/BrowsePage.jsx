import { useContext, useState, useEffect } from "react";
import AdsList from "./Listings/AdsList";
import SearchBar from "./SearchBar";
import { Context } from "../../App";
import { fetchAllListings } from "../../service/api";

export default function BrowsePage() {
  const [listings, setListings] = useState([]);
  const { token } = useContext(Context);

  useEffect(() => {
    async function fetchListings() {
      const listingResponse = await fetchAllListings(token);
      setListings(listingResponse);
      console.log("Listings: ", listingResponse)
    }

    fetchListings();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="browse-page">
      <SearchBar setFilteredAds={setListings}/>
      <AdsList ads={listings} />
    </div>
  );
}
