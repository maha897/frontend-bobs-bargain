import PropTypes from "prop-types"
import { useContext } from "react";
import { Context } from "../App";

function AdListItem({ ad, edit }) {
  const { ads, setAds } = useContext(Context)
 
  function handleClick() {
    const updatedAd = { ...ad, sold:true }

    const updatedAds = ads.map((a) => a.id == ad.id ? updatedAd : a)

    setAds(updatedAds)
  }

    return (
      <div className="ad-container">
        <li className="ad-li">
            {ad.title}
            {ad.description}
            {ad.price}
            {edit && (
              <div>
                {ad.sold ? <p>Status: Sold</p> : <p>Status: Active</p>}
                {!ad.sold && (
                  <button onClick={handleClick}>Mark as sold</button>
                )}
              </div>
            )}
        </li>
      </div>
    );
}

AdListItem.propTypes = {
    ad: PropTypes.object,
    edit: PropTypes.bool,
}

export default AdListItem