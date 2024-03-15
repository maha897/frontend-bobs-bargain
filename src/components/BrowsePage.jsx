import ProductsList from "./ProductsList";
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