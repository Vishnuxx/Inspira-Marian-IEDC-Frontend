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
            <div style={{ height: "30px" }}></div>
            <p>
              We identify all
              possible ways by which our students can achieve a successful
              career. Even though a good number of students are recruited by
              companies through campus recruitment, we also help to mould them
              as job providers, not as job seekers.
            </p>
          </div>
          <div className={`${style.card} ${style.blueBg}`}>
            <RadarIcon></RadarIcon>
            <div style={{ height: "30px" }}></div>
            <p>
              Students are encouraged to think out of the syllabus to identify
              problems, which can’t be solved, and to develop a product as
              outcome of solution. They are given end to end support through
              which they can file a patent and market the product.
              
            </p>
          </div>
          <div className={`${style.card} ${style.orangeBg}`}>
            <RocketIcon></RocketIcon>
            <div style={{ height: "30px" }}></div>
            <p>
              Students
              attend lot of technology seminars and hands on trainings, through
              which they can improve their technical skill and sharpen their
              thought process. The IEDC is affiliated to Kerala Startup Mission
              at Technopark, Thiruvananthapuram.
            </p>
          </div>
        </div>
      </section>
    );
}

export default AboutSection;