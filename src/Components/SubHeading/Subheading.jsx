import style from "./subheading.module.css"

function SubHeading({title , description}) {
    return <div className={style.container}>
        <h3 className={style.subheading}>{title}</h3>
        <p className={style.description}>{description}</p>
    </div>
}

export default SubHeading;