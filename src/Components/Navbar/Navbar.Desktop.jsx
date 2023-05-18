import HighlightButton from "../Highlightbutton/HighlightButton";
import Logo from "../Logo/Logo";
import globalstyle from "../../styles/globals.module.css";

function NavbarDesktop() {
  return (
    <div className={globalstyle.menubar}>
      <Logo></Logo>
      <div className={globalstyle.menulist}>
        <p className={globalstyle.menuItem}>Home</p>
        <p className={globalstyle.menuItem}>About</p>
        <p className={globalstyle.menuItem}>News</p>
        <p className={globalstyle.menuItem}>Events</p>
        <p className={globalstyle.menuItem}>Learn</p>
      </div>
      <div>
        <HighlightButton fill>Build A Startup</HighlightButton>
      </div>
    </div>
  );
}

export default NavbarDesktop;
