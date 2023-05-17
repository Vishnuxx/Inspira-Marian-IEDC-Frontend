import { Route, Routes } from "react-router";
import "./styles/App.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import { ROUTES } from "./Constants/RouterPaths";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={ROUTES.LANDING_PAGE} element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;
