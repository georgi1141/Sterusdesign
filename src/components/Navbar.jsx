import { Menu } from "antd";
import "./navbar.css";
import { Link, useNavigate, useLocation } from "react-router-dom";
import sterus from "../assets/sterus.png";
import { useGlobalContext } from "./globalContext/GlobalAppContext";
import { logout } from "../services/userService";

function Navbar() {
  const navigate = useNavigate();
  const { user, setUser } = useGlobalContext();

  const clickHandler = (key) => {
    if (key === "signout") {
      try {
        logout(user.accessToken)
        .then((res) => (
            console.log(res),
            setUser(false),
            localStorage.clear(),
            navigate("/")
          )
        );
      } catch (error) {
        console.log("Got an error!");
      }
    } else {
      navigate(key);
    }
  };

  const userHandler = () => {
    if (user.accessToken) {
      return [
        { label: "HOME", key: "/" },
        { label: "PROJECTS", key: "/projects" },
        { label: "CONTACTS", key: "/contacts" },
        { label: "ABOUT US", key: "/about" },
        { label: "PROFILE", key: "/profile" },
        { label: "LOGOUT", danger: true, key: "signout" },
      ];
    } else {
      return [
        { label: "HOME", key: "/" },
        { label: "PROJECTS", key: "/projects" },
        { label: "CONTACTS", key: "/contacts" },
        { label: "ABOUT US", key: "/about" },
        { label: "LOGIN", key: "/login" },
        { label: "REGISTER", key: "/register" },
      ];
    }
  };

  // Get  selected key from browserAPI to show the correct active root highlight on the Navbar.
  const selectedKey = useLocation();

  return (
    <nav className="navbar">
      <div>
        <Link to="/">
          <img className="site-logo svg" src={sterus} alt="site-logo" />
        </Link>
      </div>
      <div className="nav-sub-container">
        {user && <div className="user">Hello, {user.username}!</div>}
        <Menu
          selectedKeys={selectedKey.pathname}
          onClick={({ key }) => {
            clickHandler(key);
          }}
          className="menu"
          items={userHandler()}
        ></Menu>
      </div>
    </nav>
  );
}

export default Navbar;
