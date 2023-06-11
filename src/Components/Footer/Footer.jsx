import { ROUTES } from "../../Constants/RouterPaths";
import Logo from "../Logo/Logo";
import style from "./footer.module.css"

function Footer() {
    return (
      <div className={style.footer}>
        <Logo style={{ width: "fit-content" , display:"flex"  }} textColor="white"></Logo>
        <div className={style.sitemapcontainer}>
          <a href="/">Home</a>
          <a href={ROUTES.ABOUT_PAGE}>About</a>
          <a href={ROUTES.MEDIA_PAGE}>Media</a>
          <a href={ROUTES.PORTAL_PAGE}>Build a startup</a>
          {/* <a href="/Events">Events</a>
          <a href="/Learn">Learn</a> */}
        </div>
        <p style={{fontSize:"12px"}}>Copyright 2023 Inspira Marian</p>
      </div>
    );
}

export default Footer;