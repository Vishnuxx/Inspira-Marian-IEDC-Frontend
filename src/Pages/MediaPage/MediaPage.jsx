import { useEffect, useState } from "react";
import Footer from "../../Components/Footer/Footer";
import Navbar from "../../Components/Navbar/Navbar";
import SubHeading2 from "../../Components/SubHeading2/Subheading2";
import TopGradient from "../../Components/TopGradientBg/TopGradientBg";
import { REACT_APP_SERVER_URL } from "../../Constants/envs";
import style from "./mediapage.module.css"
import { getMedia } from "../../services/APIServices";


const data = [
  { title: "", url: "" },
  { title: "", url: "" },
  { title: "", url: "" },
  { title: "", url: "" },
  { title: "", url: "" },
  { title: "", url: "" },
  { title: "", url: "" },
];

function MediaPage() {
     const [posts, setposts] = useState(data);

     useEffect( () => {
       (async function()  {
        try {
          const res = await getMedia();
          if (res.status === 200) setposts(res.data);
        } catch (error) {
          console.error(error);
        }
       })()
       
     }, []);
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
            {posts.map((data, i) => {
             
              return (
                <Post
                  key={i}
                  img={data.url}
                  title={""}
                  description=""
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