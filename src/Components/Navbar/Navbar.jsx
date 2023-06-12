import HighlightButton from "../Highlightbutton/HighlightButton";
import Logo from "../Logo/Logo";
// import globalstyle from "../../style/globals.module.css";
import style from "./navbar.module.css";
import { HamburgerIcon } from "../../Icons/HamburgerIcon";
import useNavBar from "../../hooks/useNavbar";
import { CloseIcon } from "../../Icons/CloseIcon";
import { useNavigate } from "react-router";
import { ROUTES } from "../../Constants/RouterPaths";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setOpen] = useNavBar();
  const navigate = useNavigate()
  console.log(isOpen);
  return (
    <header className={style.header}>
      <Link to={"/"}>
        <div className={style.logo}>
          <Logo style={{ display: "flex" }}></Logo>
        </div>
      </Link>

      <input className={style.menu_btn} type="checkbox" id="menu-btn" />
      <label className={style.menu_icon} htmlFor="menu-btn">
        <span className={style.navicon}></span>
      </label>
      <ul className={style.menu}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to={ROUTES.ABOUT_PAGE}>About</Link>
        </li>
        {/* <li>
          <Link to="/events">Events</Link>
        </li> */}
        <li>
          <Link to={ROUTES.MEDIA_PAGE}>Media</Link>
        </li>

        {/* <li>
          <a href="/learn">Learn</a>
        </li> */}
      </ul>
      <div className={style.sidebuttons}>
        <HighlightButton onClick={() => navigate(ROUTES.PORTAL_PAGE)}>
          Build a Startup
        </HighlightButton>
      </div>
    </header>
  );
}

export default Navbar;
