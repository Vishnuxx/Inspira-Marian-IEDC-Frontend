import HighlightButton from "../../Components/Highlightbutton/HighlightButton";
import Logo from "../../Components/Logo/Logo";
import Navbar from "../../Components/Navbar/Navbar";
import TopGradient from "../../Components/TopGradientBg/TopGradientBg";
import style from "./landingpage.module.css";

function LandingPage() {
  return (
    <section className={style.landingpage}>
      <TopGradient></TopGradient>
      <Navbar></Navbar>
      <div
        className={style.maincontent}
      >
        <Logo
          withLabel={false}
          logoStyle={{
            width: "120px",
            height: "120px",
            position: "relative",
            top: "30px",
          }}
        ></Logo>
        <h1 className={style.heading}>Inspira</h1>
        <p className={style.subtitle}>MARIAN IEDC</p>
        <p className={style.description}>
          Reach to your Destiny through Innovation And we Are Here For You. We
          are here to assist you in breaking through the echo chambers and free
          you from the shackles you have grounded yourself in.
        </p>
        <div className={style.actionbuttoncontainer}>
          <button className={style.explorebtn}>Explore</button>
          <HighlightButton>Build a Startup</HighlightButton>
          
        </div>
      </div>
    </section>
  );
}

export default LandingPage;




