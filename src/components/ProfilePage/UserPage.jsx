import { Link } from "react-router-dom"
import AccountHeader from "./AccountHeader"

function UserPage() {

    return (
      <div className="user-page-container">
        <AccountHeader />
        <div className="my-ads-link">
          <Link to={"/profile/my-ads"}>My Ads</Link>
        </div>
        <div className="user-settings-link">
          <Link to={"/profile/user-settings"}>User Settings</Link>
        </div>
      </div>
    );
}

export default UserPage