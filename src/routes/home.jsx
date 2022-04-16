import { useParams } from "react-router-dom";
import '../App.scss';
import LandingSection from "../components/LandingSection/LandingSection";
import AmenitiesSection from "../components/AmenitiesSection/AmenitiesSection";
import ApartamentosSection from "../components/ApartamentosSection/ApartamentosSection";
import EdificioSection from "../components/EdificioSection/EdificioSection";
import EntrevistaSection from "../components/EntrevistaSection/EntrevistaSection";
import UbicacionSection from "../components/UbicacionSection/UbicacionSection";
import PrensaSection from "../components/PrensaSection/PrensaSection";




export default function Home() {
    let params = useParams();
    return (
      <div>
        <LandingSection />
        <EdificioSection />
        <ApartamentosSection />
        <AmenitiesSection />
        <PrensaSection />
        <UbicacionSection />
        <EntrevistaSection />
      </div>
    );
  }
     