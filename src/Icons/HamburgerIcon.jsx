export function HamburgerIcon({ darkmode = false }) {
  return (
    <svg width={33} height={22} fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M30.365 9.25h-28c-1.05 0-1.75.7-1.75 1.75s.7 1.75 1.75 1.75h28c1.05 0 1.75-.7 1.75-1.75s-.7-1.75-1.75-1.75zM2.365 4h28c1.05 0 1.75-.7 1.75-1.75S31.415.5 30.365.5h-28c-1.05 0-1.75.7-1.75 1.75S1.315 4 2.365 4zm28 14h-28c-1.05 0-1.75.7-1.75 1.75s.7 1.75 1.75 1.75h28c1.05 0 1.75-.7 1.75-1.75s-.7-1.75-1.75-1.75z"
        fill={darkmode ? "#fff" : "#000"}
      />
    </svg>
  );
}
