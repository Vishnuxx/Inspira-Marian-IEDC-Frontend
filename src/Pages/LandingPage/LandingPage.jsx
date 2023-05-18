import Navbar from "../../Components/Navbar/Navbar";
import TopGradient from "../../Components/TopGradientBg/TopGradientBg";
import style from "./landingpage.module.css";

function LandingPage() {
  return (
    <section className={style.landingpage}>
      <TopGradient></TopGradient>
      <Navbar></Navbar>
    </section>
  );
}

export default LandingPage;
