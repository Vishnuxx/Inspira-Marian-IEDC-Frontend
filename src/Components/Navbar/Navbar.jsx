import HighlightButton from "../Highlightbutton/HighlightButton";
import Logo from "../Logo/Logo";
// import globalstyle from "../../style/globals.module.css";
import style from "./navbar.module.css";
import { HamburgerIcon } from "../../Icons/HamburgerIcon";
import useNavBar from "../../hooks/useNavbar";
import { CloseIcon } from "../../Icons/CloseIcon";

function NavbarDesktop() {
  const [isOpen, setOpen] = useNavBar();
  console.log(isOpen);
  return (
    <header className={style.header}>
      <a href="" className={style.logo}>
        <Logo style={{ display: "flex" }}></Logo>
      </a>
      <input className={style.menu_btn} type="checkbox" id="menu-btn" />
      <label className={style.menu_icon} htmlFor="menu-btn">
        <span className={style.navicon}></span>
      </label>
      <ul className={style.menu}>
        <li>
          <a href="#work">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#careers">Events</a>
        </li>
        <li>
          <a href="#contact">Media</a>
        </li>

        <li>
          <a href="#contact">Learn</a>
        </li>
      </ul>
      <div className={style.sidebuttons}>
        <HighlightButton>Build a Startup</HighlightButton>
      </div>
    </header>
  );
}

export default NavbarDesktop;
