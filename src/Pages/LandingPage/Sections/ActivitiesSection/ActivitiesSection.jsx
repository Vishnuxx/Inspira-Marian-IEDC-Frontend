import NewsListItem from '../../../../Components/NewsListItem/NewsListItem';
import SubHeading from '../../../../Components/SubHeading/Subheading';
import style from './activities.module.css'

function ActivitiesSection() {
    return (
      <section className={style.activitiessection}>
        <SubHeading
          title="News and Activities"
          description={
            "Curious to know more about Inspira? Wanna explore what all wonders we can do as a team? Come, witness it by yourself!"
          }
        ></SubHeading>

        <div className={style.mediacontainer}>
          <NewsListItem title="hello newa 1"></NewsListItem>
          <NewsListItem title="hello newa 1"></NewsListItem>
          <NewsListItem title="hello newa 1"></NewsListItem>
          <NewsListItem title="hello newa 1"></NewsListItem>
          <NewsListItem title="hello newa 1"></NewsListItem>
          <NewsListItem title="hello newa 1"></NewsListItem>
        </div>
      </section>
    );
}
export default ActivitiesSection
;