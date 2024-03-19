import Avatar from "react-avatar";
import PropTypes from "prop-types";

function AccountHeader({ user }) {
  return (
    <div className="account-header">
      <h2>Account</h2>
      <Avatar name={`${user.firstName} ${user.lastName}`} round={true} />
      <h3>{`${user.firstName} ${user.lastName}`}</h3>
      <p>{user.email}</p>
      <hr></hr>
    </div>
  );
}

AccountHeader.propTypes = {
  user: PropTypes.object.isRequired,
};

export default AccountHeader;
