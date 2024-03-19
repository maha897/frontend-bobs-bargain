import AdListItem from "../AdListItem";
import PropTypes from "prop-types";
import { Context } from "../../App";
import { useContext } from "react";

function AdsList({ ads }) {
  const { userId } = useContext(Context);
  return (
    <div className="ads-ul-container">
      <ul className="ads-ul">
        {ads.map(
          (ad, index) =>
            !ad.sold && (
              <AdListItem key={index} ad={ad} edit={ad.user.id === userId} />
            )
        )}
      </ul>
    </div>
  );
}

AdsList.propTypes = {
  ads: PropTypes.array,
  edit: PropTypes.bool,
};

export default AdsList;
