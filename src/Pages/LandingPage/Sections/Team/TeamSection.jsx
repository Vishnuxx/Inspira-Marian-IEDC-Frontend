import SubHeading from '../../../../Components/SubHeading/Subheading';
import TeamMember from '../../../../Components/TeamMember/TeamMember';
import style from './teamsection.module.css'

function TeamSection() {
    return (
      <section className={style.teamsection}>
        <SubHeading
          title="Our Team"
          description="Introducing the Core team of Inspira Marian IEDC 2023-24 Batch."
        ></SubHeading>
        <div className={style.teammembergrid}>
          <TeamMember name={"Vishnu"} designation={"CEO"}></TeamMember>
          <TeamMember name={"Vishnu"} designation={"CEO"}></TeamMember>
          <TeamMember name={"Vishnu"} designation={"CEO"}></TeamMember>
          <TeamMember name={"Vishnu"} designation={"CEO"}></TeamMember>
          <TeamMember name={"Vishnu"} designation={"CEO"}></TeamMember>
          <TeamMember name={"Vishnu"} designation={"CEO"}></TeamMember>
        </div>
      </section>
    );
}

export default TeamSection;