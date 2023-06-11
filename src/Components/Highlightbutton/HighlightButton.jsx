import globalstyle from "../../styles/globals.module.css";
import style from "./highlightbutton.module.css";


function HighlightButton({ fill, children , onClick }) {

  return (
    <button className={style.highlightbutton} onClick={onClick}>
      <p>{children}</p>
    </button>
  );
}

export default HighlightButton;
