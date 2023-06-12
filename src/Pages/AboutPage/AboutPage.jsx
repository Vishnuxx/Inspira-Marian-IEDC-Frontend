import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import SubHeading from "../../Components/SubHeading/Subheading";
import SubHeading2 from "../../Components/SubHeading2/Subheading2";
import TopGradient from "../../Components/TopGradientBg/TopGradientBg";
import { REACT_APP_SERVER_URL, SERVER_URL } from "../../Constants/envs";

import style from "./aboutpage.module.css";

function AboutPage() {
  const posters = [
    "abhiram.webp",
    "joan.webp",
    "vishnu.webp",
    "gayathri.webp",
    "govind.webp",
    "ashwin.webp",
    "abhinavpk.webp",
    "abhinavsb.webp",
    "diya.webp",
  ];
  return (
    <main className={style.main}>
      <TopGradient zIndex={-1}></TopGradient>
      <Navbar></Navbar>

      <section className={style.section}>
        <div>
          <div className={style.subheading}>
            <SubHeading2 title={"About US"}></SubHeading2>
          </div>

          <p>
            IEDC works as the first launch pad for a student’s entrepreneurial
            journey and provide them with access to cutting edge technology,
            world class infrastructure, high quality men-torship, early risk
            capital and global exposure.To support the budding Entrepreneurs
            through Grants and to create an entrepreneurship flavour in the
            academic fraternity.The selected innovators will be exposed to
            Innovation culture, emerging technologies and Business aspects with
            the implicit assumption that the delta will become an entrepreneur
            and all the other skilled talents will get high end jobs with the
            kind of exposure and skills they acquire.
          </p>

          <div className={style.subheading}>
            <SubHeading2 title={"Execom Team"}></SubHeading2>
            <h4 style={{ width: "fit-content", padding: "0 2px" }}>2023-24</h4>
          </div>
        </div>

        <div className={style.grid}>
          {posters.map((link, i) => {
            console.log(link);
            return (
              <div
                key={i}
                style={{
                  width: "100%",
                  height: "100%",
                  color: "black",
                }}
              >
                <img
                  width={"100%"}
                  height={"100%"}
                  loading="lazy"
                  className={style.img}
                  src={require("../../assets/execomposters/" + link)}
                  alt="execomposter"
                />
              </div>
            );
          })}
        </div>
      </section>
      <div>
        <Footer></Footer>
      </div>
    </main>
  );
}

export default AboutPage;
