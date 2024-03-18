import { useContext } from "react"
import Avatar from "react-avatar"
import { Context } from "../App"

function UserPage() {
    const { userLoggedIn } = useContext(Context)

    return (
        <div className="user-page-container">
            <h2>Account Settings</h2>
            <Avatar name={`${userLoggedIn.firstname} ${userLoggedIn.lastname}`} round={true}/>
            <hr></hr>
            
        </div>
    )
}

export default UserPage