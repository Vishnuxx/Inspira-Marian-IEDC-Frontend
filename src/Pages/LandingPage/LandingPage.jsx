
import ActivitiesSection from "./Sections/ActivitiesSection/ActivitiesSection";
import AboutSection from "./Sections/AboutSection/AboutSection";
import TeamSection from "./Sections/Team/TeamSection";
import Footer from "../../Components/Footer/Footer";
import CommunityPartnersSection from "./Sections/CommunityPartners/CommunityPartnerSection";
import MainSection from "./Sections/MainSection/MainSection";

function LandingPage() {
  return (
    <main>
      <MainSection></MainSection>
      {/* <CommunityPartnersSection></CommunityPartnersSection> */}
      <ActivitiesSection></ActivitiesSection>
      <AboutSection></AboutSection>
      <TeamSection></TeamSection>
      <Footer></Footer>
    </main>
  );
}

export default LandingPage;
