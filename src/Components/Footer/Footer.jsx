import { Link } from "react-router-dom";
import { ROUTES } from "../../Constants/RouterPaths";
import Logo from "../Logo/Logo";
import style from "./footer.module.css"

function Footer() {
    return (
      <div className={style.footer}>
        <Logo style={{ width: "fit-content" , display:"flex"  }} textColor="white"></Logo>
        <div className={style.sitemapcontainer}>
          <Link to="/">Home</Link>
          <Link to={ROUTES.ABOUT_PAGE}>About</Link>
          <Link to={ROUTES.MEDIA_PAGE}>Media</Link>
          <Link to={ROUTES.PORTAL_PAGE}>Build a startup</Link>
          {/* <a href="/Events">Events</a>
          <a href="/Learn">Learn</a> */}
        </div>
        <p style={{fontSize:"12px"}}>Copyright 2023 Inspira Marian</p>
      </div>
    );
}

export default Footer;