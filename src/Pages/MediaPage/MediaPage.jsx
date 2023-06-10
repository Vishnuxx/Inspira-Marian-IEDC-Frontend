import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import SubHeading2 from "../../Components/SubHeading2/Subheading2";
import TopGradient from "../../Components/TopGradientBg/TopGradientBg";
import { REACT_APP_SERVER_URL } from "../../Constants/envs";
import style from "./mediapage.module.css"

function MediaPage() {
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
      <main>
        <TopGradient zIndex={-1}></TopGradient>
        <Navbar></Navbar>
        <section className={style.section}>
          <div className={style.content}>
            <div>
              <SubHeading2 title="News and Media"></SubHeading2>
            </div>
            <p>
              Marian Engineering College always focuses its activities to solve
              unemployment problems that exist in society. We identify all
              possible ways by which our students can achieve a successful
              career.IEDC works as the first launch pad for a student’s
              entrepreneurial journey and provide them with access to cutting
              edge technology, world class infrastructure, high quality
              men-torship, early risk capital and global exposure.
            </p>
          </div>

          <div className={style.grid}>
            {posters.map((link, i) => {
              console.log(
                REACT_APP_SERVER_URL,
                "/public/posters/execom/2023-24/",
                link
              );
              return (
                <Post
                  key={i}
                  img={
                    REACT_APP_SERVER_URL +
                    "/static/posters/execom/2023-24/" +
                    link
                  }
                  title={link}
                  description="sdkbsd"
                ></Post>
                // <img
                //   width={"100%"}
                //   height={"100%"}
                //   loading="lazy"
                //   key={i}
                //   src={
                //     REACT_APP_SERVER_URL +
                //     "/static/posters/execom/2023-24/" +
                //     link
                //   }
                //   alt="execomposter"
                // />
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

function Post({title , description , img}) {
    return (
      <div
      
        style={{
          width: "100%",
          height: "100%",
          borderRadius: "10px",
          background: "white",
          boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
          padding:"10px",
          color:"black"
        }}
      >
        <img style={{width:"100%" , height:"80%" , objectFit:"cover"  ,borderRadius:"10px"}} src={img} loading="lazy" alt="title" />
        <div>
            <p style={{fontWeight:"600"}}>{title}</p>
            <p style={{fontSize:"15px"}}>{description}</p>
        </div>
      </div>
    );
}

export default MediaPage;