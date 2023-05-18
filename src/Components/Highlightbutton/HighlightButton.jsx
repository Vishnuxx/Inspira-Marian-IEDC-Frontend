import globalstyle from "../../styles/globals.module.css";

function HighlightButton({ fill, children }) {
  return (
    <button className={globalstyle.highlightbutton}>
      <p>{children}</p>
    </button>
  );
}

export default HighlightButton;
