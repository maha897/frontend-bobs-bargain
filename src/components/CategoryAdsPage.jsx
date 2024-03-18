import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../App";

function CategoryAdsPage() {
    const { ads } = useContext(Context)
  const { category } = useParams(); 
  const filteredAds = ads.filter((ad) => ad.category === category);

  return (
    <div className="category-ads-page-container">
      <h2>{category} Ads</h2>
      <div className="ads-list">
        {filteredAds.map((ad) => (
          <div key={ad.id} className="ad-item">
            <h3>{ad.title}</h3>
            <p>{ad.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategoryAdsPage;
