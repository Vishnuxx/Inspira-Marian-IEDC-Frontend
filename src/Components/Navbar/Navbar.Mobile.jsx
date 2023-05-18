import HighlightButton from "../Highlightbutton/HighlightButton";
import Logo from "../Logo/Logo";
import globalstyle from "../../styles/globals.module.css";
import style from "./navbar.module.css";
import TopGradient from "../TopGradientBg/TopGradientBg";
import useNavBar from "../../hooks/useNavbar";
import { CloseIcon } from "../../Icons/CloseIcon";
import { HamburgerIcon } from "../../Icons/HamburgerIcon";

function NavbarMobile() {
  const [isOpen, setOpen] = useNavBar();
  return (
    <>
      <nav className={style.navigation}>
        <div className={style.logobar}>
          <Logo></Logo>
        </div>
        <div onClick={() => setOpen(true)}>
          <HamburgerIcon></HamburgerIcon>
        </div>
      </nav>
      {isOpen && (
        <MenuItemContainer state={[isOpen , setOpen]}></MenuItemContainer>
      )}
    </>
  );
}

export default NavbarMobile;



function MenuItemContainer({state}) {
   const [isOpen, setOpen] = state
    return<div className={style.navmenu_mobile}>
          <TopGradient></TopGradient>

          <div className={style.navmenulist_mobile}>
            <p className={style.navmenuItem}>Home</p>
            <p className={style.navmenuItem}>About</p>
            <p className={style.navmenuItem}>News</p>
            <p className={style.navmenuItem}>Events</p>
            <p className={style.navmenuItem}>Learn</p>
            <HighlightButton>Build a Startup</HighlightButton>
          </div>

          <div onClick={() => setOpen(false)}>
            <CloseIcon></CloseIcon>
          </div>
        </div>
}