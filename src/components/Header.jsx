import { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../App";
import Avatar from "react-avatar";

/* eslint-disable react/no-unescaped-entities */
function Header() {
  const { userLoggedIn, setUserLoggedIn, setToken } = useContext(Context);
  const navigate = useNavigate("/")

  useEffect(() => {
    console.log(userLoggedIn)
  }, [userLoggedIn])

  function handleLogOut() {
    setUserLoggedIn(null);
    setToken("")
    localStorage.removeItem("userLoggedIn")
    localStorage.removeItem("token")
    navigate("/")
  }

  return (
    <header className="header">
      <h1 className="logo">Bob's Bargain</h1>
      {!userLoggedIn ? (
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
              name={`${userLoggedIn.firstName} ${userLoggedIn.lastName}`}
              size={50}
              round={true}
            />
          </Link>

          <button className="log-out-button" onClick={handleLogOut}>Log out</button>
        </div>
      )}
    </header>
  );
}

export default Header;
