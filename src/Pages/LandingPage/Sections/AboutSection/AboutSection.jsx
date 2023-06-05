import SubHeading from "../../../../Components/SubHeading/Subheading";
import CommunityIcon from "../../../../Icons/CommunityIcon";
import RadarIcon from "../../../../Icons/RadarIcon";
import RocketIcon from "../../../../Icons/RocketIcon";
import style from './aboutsection.module.css'

function AboutSection() {
    return (
      <section className={style.aboutsection}>
        <SubHeading
          title="Know More About Inspira"
          description="Curious to know more about Inspira? Wanna explore what all wonders we can do as a team? Come, witness it by yourself!"
        ></SubHeading>

        <div className={style.cardcontainer}>
          <div className={`${style.card} ${style.greenBg}`}>
            <CommunityIcon></CommunityIcon>
          </div>
          <div className={`${style.card} ${style.blueBg}`}>
            <RadarIcon></RadarIcon>
          </div>
          <div className={`${style.card} ${style.orangeBg}`}>
            <RocketIcon></RocketIcon>
          </div>
        </div>
      </section>
    );
}

export default AboutSection;