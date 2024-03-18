import { useContext } from "react";
import AdsList from "./AdsList";
import SearchBar from "./SearchBar"
import { Context } from "../App";

function BrowsePage() {
  const { ads } = useContext(Context)

    return (
      <div className="browse-page">
        <SearchBar />
        <AdsList ads={ads} edit={false}/>
      </div>
    );
}

export default BrowsePage