import style from "./teammember.module.css";

function TeamMember({ profileicon, name, designation }) {
  console.log("../assets/imgs/" + profileicon);
  return (
    <div className={style.container}>
      <div className={style.avatar}>
        <img className={style.image}  src={require(`../../assets/imgs/${profileicon}`)} height="100px" width="100px" alt={name}></img>
      </div>

      <div className={style.text_container}>
        <p className={style.title}>{name}</p>
        <p className={style.designation}>{designation}</p>
      </div>
    </div>
  );
}

export default TeamMember;
