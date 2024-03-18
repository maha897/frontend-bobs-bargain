import AdListItem from "./AdListItem"
import PropTypes from "prop-types"

function AdsList({ ads, edit }) {    
    return (
        <div className="ads-ul-container">
            <ul className="ads-ul">
                { 
                    ads.map((ad, index) => (
                        (!ad.sold || edit) && <AdListItem key={index} ad={ad} edit={edit}/>
                    ))
                }
            </ul>
        </div>
    )
}

AdsList.propTypes = {
    ads: PropTypes.array,
    edit: PropTypes.bool,
}

export default AdsList