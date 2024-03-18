import { useContext } from "react";
import Avatar from "react-avatar";
import { Context } from "../App";

function AccountHeader() {
    const { userLoggedIn } = useContext(Context)

    return (
      <div className="account-header">
        <h2>Account</h2>
        <Avatar
          name={`${userLoggedIn.firstName} ${userLoggedIn.lastName}`}
          round={true}
        />
        <h3>{`${userLoggedIn.firstName} ${userLoggedIn.lastName}`}</h3>
        <p>{userLoggedIn.email}</p>
        <hr></hr>
      </div>
    );
}

export default AccountHeader