import Button from "../../Components/Button/Button";
import { Input, TextInput } from "../../Components/FormInput/FormInput";
import SubHeading2 from "../../Components/SubHeading2/Subheading2";
import TopGradient from "../../Components/TopGradientBg/TopGradientBg";
import style from "./portalpage.module.css";

function PoralPage() {
  return (
    <main className={style.main}>
      <TopGradient zIndex={-1}></TopGradient>
      <section className={style.section}>
        <div>
          <SubHeading2 title={"Build a Startup"}></SubHeading2>
          <p className={style.description}> portal</p>
          <div action="none">
            <Input
              title={"Mail Id"}
              description={"Use your college email id only"}
              errormessage={"invalis"}
            ></Input>
            <TextInput
              title={"Problem Statement"}
              description={"Write a Description of the problem you would like to solve"}
            ></TextInput>
            <TextInput
              title={"Your Solution"}
              description={"Write the description of your solution. Try to write your idea in detailed way. "}
            ></TextInput>
            <TextInput
              title={"Target Customers"}
              description={"Write the type of the customers who will use your product/service"}
            ></TextInput>
            <TextInput
              title={"Your current Skills"}
              description={"this is sa descripton"}
            ></TextInput>

            <Button>Submit</Button>
          </div>
        </div>
      </section>
    </main>
  );

}

export default PoralPage;