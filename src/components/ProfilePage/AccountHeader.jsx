import Avatar from "react-avatar";
import { Context } from "../../App";
import { useContext } from "react";

function AccountHeader() {
  const { user } = useContext(Context);
  return (
    <div className="account-header">
      <h2>Account</h2>
      <Avatar name={`${user?.firstName} ${user?.lastName}`} round={true} />
      <h3>{`${user?.firstName} ${user?.lastName}`}</h3>
      <h4>{user?.email}</h4>
      <hr></hr>
    </div>
  );
}

export default AccountHeader;
