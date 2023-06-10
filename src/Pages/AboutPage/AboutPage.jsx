import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import SubHeading from "../../Components/SubHeading/Subheading";
import SubHeading2 from "../../Components/SubHeading2/Subheading2";
import TopGradient from "../../Components/TopGradientBg/TopGradientBg";
import { REACT_APP_SERVER_URL, SERVER_URL } from "../../Constants/envs";

import style from "./aboutpage.module.css";

function AboutPage() {
  const posters = [
    "iedclead.webp",
    "operationslead.webp",
    "techlead.webp",
    "welead.webp",
    "communitylead.webp",
    "creativelead.webp",
    "financelead.webp",

    "marketinglead.webp",

    "portallead.webp",
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
            Marian Engineering College always focuses its activities to solve
            unemployment problems that exist in society. We identify all
            possible ways by which our students can achieve a successful
            career.IEDC works as the first launch pad for a student’s
            entrepreneurial journey and provide them with access to cutting edge
            technology, world class infrastructure, high quality men-torship,
            early risk capital and global exposure.
          </p>

          <div className={style.subheading}>
            <SubHeading2 title={"Execom Team"}></SubHeading2>
            <h4 style={{ width: "fit-content", padding: "0 2px" }}>2023-24</h4>
          </div>
        </div>

        <div className={style.grid}>
          {posters.map((link, i) => {
            console.log(
              REACT_APP_SERVER_URL,
              "/public/posters/execom/2023-24/",
              link
            );
            return (
              <img
                width={"100%"}
                height={"100%"}
                loading="lazy"
                key={i}
                src={
                  REACT_APP_SERVER_URL +
                  "/static/posters/execom/2023-24/" +
                  link
                }
                alt="execomposter"
              />
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
