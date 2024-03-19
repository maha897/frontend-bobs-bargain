import { useContext } from "react"
import { Context } from "../../App"
import AdsList from "./AdsList"
import AccountHeader from "./AccountHeader"

function MyAds() {
    const { ads, userLoggedIn } = useContext(Context)
    const myAds = ads.filter((ad) => ad.userId === userLoggedIn.id)
    // myAds state?

    return (
        <div className="my-ads">
            <AccountHeader />
            <AdsList ads={myAds} edit={true}/>
        </div>
    )
}

export default MyAds