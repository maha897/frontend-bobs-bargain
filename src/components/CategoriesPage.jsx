import { Link } from "react-router-dom";


function CategoriesPage() {
    return (
      <div className="categories-page-container">
        <h2>Categories</h2>
        <ul>
          <li>
            <Link to="/category/electronics">Electronics and appliances</Link>
          </li>
          <li>
            <Link to="/category/clothing">Clothing and cosmetics</Link>
          </li>
          <li>
            <Link to="/category/furniture">Furniture and interior</Link>
          </li>
          <li>
            <Link to="/category/vehicles">Vehicles</Link>
          </li>
          <li>
            <Link to="/category/house">House and renovation</Link>
          </li>
        </ul>
      </div>
    );
}

export default CategoriesPage