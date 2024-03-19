import { useContext, useState, useEffect } from "react";
import { Context } from "../../App";
import AdsList from "../BrowsePage/Listings/AdsList";
import { fetchAllListings } from "../../service/api";
import AccountHeader from "./AccountHeader";

function MyAds() {
  const { user, token } = useContext(Context);
  const [filteredListings, setfilteredListings] = useState([]);

  useEffect(() => {
    async function fetchListings() {
      const listingResponse = await fetchAllListings(token);
      setfilteredListings(
        listingResponse.filter((item) => item.user.id === user.id)
      );
    }

    fetchListings();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="my-ads">
      <AccountHeader user={user} />
      <AdsList ads={filteredListings} />
    </div>
  );
}

export default MyAds;
