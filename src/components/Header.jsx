import { Link } from "react-router-dom"

/* eslint-disable react/no-unescaped-entities */
function Header() {
    return (
      <header className="header">
        <h1 className="logo">Bob's Bargain</h1>
        <p className="login">
          <Link className="sign-in" to={"/sign-in"}>
            Sign in
          </Link>{" "}
          |{" "}
          <Link className="login" to={"/log-in"}>
            Log in
          </Link>
        </p>
      </header>
    );
}

export default Header