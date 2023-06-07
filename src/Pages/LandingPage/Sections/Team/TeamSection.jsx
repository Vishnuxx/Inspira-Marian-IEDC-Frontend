import SubHeading from '../../../../Components/SubHeading/Subheading';
import TeamMember from '../../../../Components/TeamMember/TeamMember';
import style from './teamsection.module.css'
import {TEAM_MEMBER_DETAILS} from '../../../../Constants/tramMemberDetails'
function TeamSection() {
    return (
      <section className={style.teamsection}>
        <SubHeading
          title="Our Team"
          description="Introducing the Core team of Inspira Marian IEDC 2023-24 Batch."
        ></SubHeading>
        <div className={style.teammembergrid}>
          {TEAM_MEMBER_DETAILS.map((member , i) => { 
            console.log(
           `${process.env.PUBLIC_URL}/imgs/${member.name}`
            );
            return (
              <TeamMember
                key={i}
                profileicon={`${process.env.PUBLIC_URL}/imgs/${member.profileicon}`}
                name={member.name}
                designation={member.designation}
              ></TeamMember>
            );
          })}
          
         
        </div>
      </section>
    );
}

export default TeamSection;