import { useEffect, useState } from "react";
import NewsListItem from "../../../../Components/NewsListItem/NewsListItem";
import SubHeading from "../../../../Components/SubHeading/Subheading";
import style from "./activities.module.css";
import { getMedia } from "../../../../services/APIServices";

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
      const medias = await getMedia(6);
      setposts(medias);
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
        <a href="/media">More</a>
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
