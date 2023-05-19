import style from "./newslistitem.module.css"

function NewsListItem({thumbnail , title , description}) {
    return (
      <div className={style.container}>
        <img src={thumbnail} alt="" className={style.thumbnail} />
        <div className={style.titlecontainer}>
          <h5 className={style.title}>
            {title}
          </h5>
          <p className={style.description}>
            {description}
          </p> 
        </div>
      </div>
    );
}

export default NewsListItem;