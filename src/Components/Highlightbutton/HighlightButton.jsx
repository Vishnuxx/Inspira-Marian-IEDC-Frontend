import globalstyle from "../../styles/globals.module.css";
import style from "./highlightbutton.module.css";


function HighlightButton({ fill, children }) {
  return (
    <button className={style.highlightbutton}>
      <p>{children}</p>
    </button>
  );
}

export default HighlightButton;
