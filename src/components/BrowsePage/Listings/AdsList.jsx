import AdListItem from "./AdListItem";
import PropTypes from "prop-types";
import { Context } from "../../../App";
import { useContext } from "react";
import ScrollToTop from "react-scroll-to-top";
import { FiArrowUp } from "react-icons/fi";

function AdsList({ ads }) {
  const { userId } = useContext(Context);
  return (
    <div className="ads-ul-container">
      <ul className="ads-ul">
        {ads.map(
          (ad, index) =>
            !ad.sold && (
              <AdListItem key={index} ad={ad} edit={ad.user.id === userId} index={index} />
            )
        )}
      </ul>
      <div>
      <ScrollToTop 
        smooth 
        component={<FiArrowUp size={20}/>} />
      </div>
      
    </div>
  );
}

AdsList.propTypes = {
  ads: PropTypes.array,
  edit: PropTypes.bool,
  index: PropTypes.number,
};

export default AdsList;
