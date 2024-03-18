import { useContext } from "react";
import { useParams } from "react-router-dom";
import { Context } from "../App";
import AdsList from "./AdsList";

function CategoryAdsPage() {
    const { ads } = useContext(Context)
  const { category } = useParams(); 
  const filteredAds = ads.filter((ad) => ad.category === category);

  return (
    <div className="category-ads-page-container">
      <h2>{category} Ads</h2>
      <div className="ads-list">
        <AdsList ads={filteredAds} edit={false}/>
      </div>
    </div>
  );
}

export default CategoryAdsPage;
