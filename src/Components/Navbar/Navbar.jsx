import useMediaQuery from "../../hooks/useMediaQuery";
import NavbarDesktop from "./Navbar.Desktop";
import NavbarMobile from "./Navbar.Mobile";

function Navbar() {
  const isDesktop = useMediaQuery("(min-width: 960px)");
  return (
    <>
      {isDesktop? <NavbarDesktop></NavbarDesktop> : <NavbarMobile></NavbarMobile>}
    </>
  );
}
export default Navbar;
