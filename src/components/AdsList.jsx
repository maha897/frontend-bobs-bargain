import { useContext } from "react"
import { Context } from "../App"
import AdListItem from "./AdListItem"

function AdsList() {
    const { ads } = useContext(Context)
    
    return (
        <div className="ads-ul-container">
            <ul className="ads-ul">
                {
                    ads.map((ad, index) => (
                        <AdListItem key={index} ad={ad}/>
                    ))
                }
            </ul>
        </div>
    )
}

export default AdsList