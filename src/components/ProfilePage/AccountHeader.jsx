import Avatar from "react-avatar";
import { Context } from "../../App";
import { useContext } from "react";
import { Link } from "react-router-dom";

function AccountHeader() {
  const { user } = useContext(Context);
  return (
    <div className="account-header">
      <h2>Account</h2>
      <Link to={"/profile"}>
        <Avatar name={`${user?.firstName} ${user?.lastName}`} round={true} />
      </Link>
      <h3>{`${user?.firstName} ${user?.lastName}`}</h3>
      <p>{user?.email}</p>
      <hr></hr>
    </div>
  );
}

export default AccountHeader;
