import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../App";

function SideMenu() {
  const { userLoggedIn } = useContext(Context)

    return (
      <div className="side-menu">
        <ul className="side-menu-ul">
          <li className="side-menu-li side-menu-first">
            <Link to={"/"}>Browse</Link>
          </li>
          <li className="side-menu-li">
            {userLoggedIn && <Link to={"/new-ad"}>New Ad</Link>}
            {!userLoggedIn && <Link to={"/log-in"}>New Ad</Link>}
          </li>
          <li className="side-menu-li">
            <Link to={"/categories"}>Categories</Link>
          </li>
          {/**
           * <li className="side-menu-li">Messages</li>
           */}
        </ul>
      </div>
    );
}

export default SideMenu