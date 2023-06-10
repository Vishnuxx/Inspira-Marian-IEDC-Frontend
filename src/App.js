import { Route, Routes } from "react-router";
import "./styles/App.css";
import LandingPage from "./Pages/LandingPage/LandingPage";
import { ROUTES } from "./Constants/RouterPaths";
import MediaPage from "./Pages/MediaPage/MediaPage";
import AboutPage from "./Pages/AboutPage/AboutPage";
import PoralPage from "./Pages/PortalPage/PortalPage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path={ROUTES.LANDING_PAGE} element={<LandingPage />} />
        <Route path={ROUTES.ABOUT_PAGE} element={<AboutPage />} />
        <Route path={ROUTES.MEDIA_PAGE} element={<MediaPage />} />
        <Route path={ROUTES.PORTAL_PAGE} element={<PoralPage />} />
       
      </Routes>
    </div>
  );
}

export default App;
