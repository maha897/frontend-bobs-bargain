import ProductsList from "./AdsList";
import SearchBar from "./SearchBar"

function BrowsePage() {
    return (
      <div className="browse-page">
        <SearchBar />
        <ProductsList />
      </div>
    );
}

export default BrowsePage