import { useEffect, useState } from "react";
import NewsListItem from "../../../../Components/NewsListItem/NewsListItem";
import SubHeading from "../../../../Components/SubHeading/Subheading";
import style from "./activities.module.css";
import { getMedia } from "../../../../services/APIServices";
import { Link } from "react-router-dom";
import { ROUTES } from "../../../../Constants/RouterPaths";

const data = [
  { title: "", url: "" },
  { title: "", url: "" },
  { title: "", url: "" },
  { title: "", url: "" },
  { title: "", url: "" },
  { title: "", url: "" },
  { title: "", url: "" },
];

function ActivitiesSection() {
  
  const [posts, setposts] = useState(data);

  useEffect(() => {
    (async function () {
      try {
        const res = await getMedia(6);
    
        setposts(res.data);
      } catch (error) {
        console.error(error)
      }
      
    })();
  }, []);

  return (
    <section id="activities-section" className={style.activitiessection}>
      <SubHeading
        title="News and Activities"
        description={
          "Curious to know more about Inspira? Wanna explore what all wonders we can do as a team? Come, witness it by yourself!"
        }
      ></SubHeading>

      <div className={style.morebuttoncontainer}>
        <Link to={ROUTES.MEDIA_PAGE}>More</Link>
      </div>
      <div className={style.mediacontainer}>
        {posts.map((data, i) => {
          return <NewsListItem key={i} thumbnail={data.url}></NewsListItem>;
        })}
      </div>
    </section>
  );
}
export default ActivitiesSection;
