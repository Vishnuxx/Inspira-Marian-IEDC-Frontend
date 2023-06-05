import Logo from "../Logo/Logo";
import style from "./footer.module.css"

function Footer() {
    return (
      <div className={style.footer}>
        <Logo style={{ width: "fit-content" }} textColor="white"></Logo>
        <div className={style.sitemapcontainer}>
          <a href="/home">Home</a>
          <a href="/About">About</a>
          <a href="/News">News</a>
          <a href="/Events">Events</a>
          <a href="/Learn">Learn</a>
        </div>
        <p>Copyright 2023 Inspira Marian</p>
      </div>
    );
}

export default Footer;