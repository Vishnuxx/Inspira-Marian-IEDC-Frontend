import HighlightButton from "../../Components/Highlightbutton/HighlightButton";
import Logo from "../../Components/Logo/Logo";
import Navbar from "../../Components/Navbar/Navbar";
import TopGradient from "../../Components/TopGradientBg/TopGradientBg";
import BulbGradient from "../../Icons/BulbGradient";
import style from "./landingpage.module.css";

import bottomillustration from "../../assets/imgs/bottomillus.png";
import ActivitiesSection from "./Sections/ActivitiesSection/ActivitiesSection";
import AboutSection from "./Sections/AboutSection/AboutSection";
import TeamSection from "./Sections/Team/TeamSection";
import Footer from "../../Components/Footer/Footer";
import CommunityPartnersSection from "./Sections/CommunityPartners/CommunityPartnerSection";


function LandingPage() {
  return (
    <main>
      <section className={style.landingpage}>
        <TopGradient></TopGradient>
        <Navbar></Navbar>
        <BulbGradient className={style.bulbBgL}></BulbGradient>
        <BulbGradient className={style.bulbBgR}></BulbGradient>
        <div className={style.maincontent}>
          <div className={style.logocontent}>
            <Logo
              withLabel={false}
              logoStyle={{
                width: "120px",
                height: "120px",
                position: "relative",
                top: "30px",
              }}
            ></Logo>
          </div>

          <h1 className={style.heading}>Inspira</h1>
          <p className={style.subtitle}>MARIAN IEDC</p>
          <p className={style.description}>
            Reach to your Destiny through Innovation And we Are Here For You. We
            are here to assist you in breaking through the echo chambers and
            free you from the shackles you have grounded yourself in.
          </p>
          <div className={style.actionbuttoncontainer}>
            <button className={style.explorebtn}>Explore</button>
            <HighlightButton>Build a Startup</HighlightButton>
          </div>
        </div>
        <img className={style.bottomillus} src={bottomillustration} alt="" />
      </section>
<CommunityPartnersSection></CommunityPartnersSection>
      <ActivitiesSection></ActivitiesSection>
      <AboutSection></AboutSection>
      <TeamSection></TeamSection>
      <Footer></Footer>
    </main>
  );
}

export default LandingPage;
