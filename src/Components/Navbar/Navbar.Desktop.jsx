import HighlightButton from "../Highlightbutton/HighlightButton";
import Logo from "../Logo/Logo";
import globalstyle from "../../styles/globals.module.css";
import style from "./navbar.module.css";

function NavbarDesktop() {
  return (
    <div className={style.navigation}>
      <Logo></Logo>
      <div className={style.menulist}>
        <p className={style.menuItem}>Home</p>
        <p className={style.menuItem}>About</p>
        <p className={style.menuItem}>News</p>
        <p className={style.menuItem}>Events</p>
        <p className={style.menuItem}>Learn</p>
      </div>
      <div>
        <HighlightButton fill>Build a Startup</HighlightButton>
      </div>
    </div>
  );
}

export default NavbarDesktop;
