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
          // description="Curious to know more about Inspira? Wanna explore what all wonders we can do as a team? Come, witness it by yourself!"
        ></SubHeading>

        <div className={style.cardcontainer}>
          <div className={`${style.card} ${style.greenBg}`}>
            <CommunityIcon></CommunityIcon>
            <div style={{ height: "30px" }}></div>
            <p>
              We promote an innovation driven entrepreneurship culture among the
              students. We identify all possible ways by which our students can
              achieve a successful career.
            </p>
          </div>
          <div className={`${style.card} ${style.blueBg}`}>
            <RadarIcon></RadarIcon>
            <div style={{ height: "30px" }}></div>
            <p>
              Students are encouraged to think out of the syllabus to identify
              problems, which can’t be solved, and to develop a product as
              outcome of solution. 
            </p>
          </div>
          <div className={`${style.card} ${style.orangeBg}`}>
            <RocketIcon></RocketIcon>
            <div style={{ height: "30px" }}></div>
            <p>
              The purpose of the IEDCs will be to act as an aspirational
              platform,for the student entrepreneurs and tech savvy
              innovators, in skilling and sharpening their entrepreneurial skill
              sets.
            </p>
          </div>
        </div>
      </section>
    );
}

export default AboutSection;