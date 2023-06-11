import SubHeading from '../../../../Components/SubHeading/Subheading';
import TeamMember from '../../../../Components/TeamMember/TeamMember';
import style from './teamsection.module.css'
import {NODAL_OFFICER_DETAILS, TEAM_MEMBER_DETAILS} from '../../../../Constants/tramMemberDetails'
import { useMemo } from 'react';
function TeamSection() {
  
    return (
      <section className={style.teamsection}>
        <SubHeading
          title="Our Team"
          description="Introducing the Core team of Inspira Marian IEDC 2023-24 Batch."
        ></SubHeading>
        <div className={style.nodaloffsection}>
          {NODAL_OFFICER_DETAILS.map((member, i) => {
            return (
              <TeamMember
                key={i}
                profileicon={member.profileUrl}
                name={member.name}
                designation={member.designation}
              ></TeamMember>
            );
          })}
        </div>
        <div className={style.teammembergrid}>
          {TEAM_MEMBER_DETAILS.map((member, i) => {
            return (
              <TeamMember
                key={i}
                profileicon={member.profileUrl}
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