import { useContext } from "react";
import { Link } from "react-router-dom"
import { Context } from "../App";
import Avatar from "react-avatar";

/* eslint-disable react/no-unescaped-entities */
function Header() {
    const { userLoggedIn } = useContext(Context)

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
            <Avatar
              name={`${userLoggedIn.firstname} ${userLoggedIn.lastname}`}
              size={50}
              round={true}
            />
          </div>
        )}
      </header>
    );
}

export default Header