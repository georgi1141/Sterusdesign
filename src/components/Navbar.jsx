import { Menu } from "antd";
import "./navbar.css";
import { Link, useNavigate } from "react-router-dom";
import sterus1 from "../assets/svg/sterus1.svg";

function Navbar() {
  const navigate = useNavigate();

  const clickHandler = (key) => {
    if (key === "signout") {
      // implement SIGN-OUT later
      console.log("logout clicked")
    } else {
      navigate(key);
    }
  };

  return (
    <nav className="navbar">
      <div className="site-logo">
        <Link to="/">
          <img className="site-logo" src={sterus1} alt="site-logo" />
        </Link>
      </div>
      <Menu
        onClick={({ key }) => {
          clickHandler(key);
        }}
        className="menu"
        items={[
          { label: "HOME", key: "/" },
          { label: "PROJECTS", key: "/projects" },
          { label: "CONTACTS", key: "/contacts" },
          { label: "ABOUT US", key: "/about" },
          { label: "LOGIN", key: "/login" },
          { label: "REGISTER", key: "/register" },
          { label: "PROFILE", key: "/profile" },
          { label: "LOGOUT", danger: true, key: "signout" },
        ]}
      ></Menu>
    </nav>
  );
}

export default Navbar;
