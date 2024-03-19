import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../App";
import Avatar from "react-avatar";

/* eslint-disable react/no-unescaped-entities */
function Header() {
  const { user, setUser, setToken, setUserId } = useContext(Context);
  const navigate = useNavigate("/");

  function handleLogOut() {
    setUser(null);
    setToken("");
    setUserId("")
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <header className="header">
      <h1 className="logo">Bob's Bargain</h1>
      {!user ? (
        <p className="login">
          <Link className="sign-up" to={"/sign-up"}>
            Sign up
          </Link>{" "}
          |{" "}
          <Link className="log-in" to={"/log-in"}>
            Log in
          </Link>
        </p>
      ) : (
        <div className="avatar-container">
          <Link to={"/profile"}>
            <Avatar
              name={`${user.firstName} ${user.lastName}`}
              size={50}
              round={true}
            />
          </Link>

          <button className="log-out-button" onClick={handleLogOut}>
            Log out
          </button>
        </div>
      )}
    </header>
  );
}

export default Header;
