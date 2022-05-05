import "../App.scss";
import LandingSection from "../components/LandingSection/LandingSection";
import AmenitiesSection from "../components/AmenitiesSection/AmenitiesSection";
import ApartamentosSection from "../components/ApartamentosSection/ApartamentosSection";
import EdificioSection from "../components/EdificioSection/EdificioSection";
import EntrevistaSection from "../components/EntrevistaSection/EntrevistaSection";
import UbicacionSection from "../components/UbicacionSection/UbicacionSection";
import PrensaSection from "../components/PrensaSection/PrensaSection";
import FirstCarrouselSection from "../components/FirstCarrouselSection/FirstCarrouselSection";
import InfoProjectSection from "../components/InfoProjectSection/InfoProjectSection";
import { Box, Stack } from "@mui/material";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <Stack direction="column" alignItems="center">
      <Box sx={{ backgroundColor: "white", maxWidth: "1600px" }}>
        <Header />
        <LandingSection />
        <EdificioSection />
        <FirstCarrouselSection />
        <InfoProjectSection />
        <ApartamentosSection />
        <AmenitiesSection />
        <PrensaSection />
        <UbicacionSection />
        <EntrevistaSection />
        <Footer />
      </Box>
    </Stack>
  );
}
