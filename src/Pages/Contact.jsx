import ContactPageHeader from "../Components/Contact/ContactPageHeader";
import AboutUs from "../Components/Contact/AboutUs";
import MapContact from "../Components/Contact/MapContact";
import FeatureContact from "../Components/Contact/FeatureContact";

export default function Contact() {
  return (
    <>
      <div className="">
        <ContactPageHeader />
        <AboutUs />
        <br />
        <FeatureContact />
        <MapContact />
      </div>
    </>
  );
}