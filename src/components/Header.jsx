import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../App";
import { FiPlus } from "react-icons/fi";
import Avatar from "react-avatar";

/* eslint-disable react/no-unescaped-entities */
function Header() {
  const { user, setUser, setToken, setUserId } = useContext(Context);
  const navigate = useNavigate("/");

  function handleLogOut() {
    setUser(null);
    setToken("");
    setUserId("");
    localStorage.removeItem("id");
    localStorage.removeItem("token");
    navigate("/login");
  }

  return (
    <header className="header">
      <Link className="logo" to={"/"}>
        <h1>Bob's Bargain</h1>
      </Link>
      {!user ? (
        <div className="login">
          <Link className="sign-up" to={"/signup"}>
            Sign up
          </Link>{" "}
          |{" "}
          <Link className="log-in" to={"/login"}>
            Log in
          </Link>
        </div>
      ) : (
        <div className="avatar-container">
          <Link className="log-in" to={"/listings/create"}>
            <button className="log-out-button">
              <FiPlus
                size={15}
              />{" "}
              New listing
            </button>
          </Link>
          
          <button className="log-out-button" onClick={handleLogOut}>
            Log out
          </button>
          <Link to={"/profile"}>
            <Avatar
              name={`${user.firstName} ${user.lastName}`}
              size={40}
              round={true}
            />
          </Link>
        </div>
      )}
    </header>
  );
}

export default Header;
