import { Link } from "react-router-dom";

function SideMenu() {
    return (
      <div className="side-menu">
        <ul className="side-menu-ul">
          <li className="side-menu-li side-menu-first">
            <Link to={"/"}>Browse</Link>
          </li>
          <li className="side-menu-li">
            <Link to={"/new-ad"} >New Ad</Link>
          </li>
          <li className="side-menu-li">Categories</li>
          <li className="side-menu-li">Messages</li>
        </ul>
      </div>
    );
}

export default SideMenu