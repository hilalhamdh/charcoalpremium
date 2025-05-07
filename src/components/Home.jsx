// import Home from "../assets/images/5.jpg";

import NavbarPages from "../pages/NavbarPages";
import Bara from "/images/bara.jpg";
import WhatsApp from "./WhatsApp";
import Footer from "../pages/Footer";
import CarouselPages from "./Carousel";
import AboutPages from "../pages/AboutPages";

function Home() {
  return (
    <>
      <NavbarPages />
      <CarouselPages />

      <AboutPages />
      <Footer />
    </>
  );
}

export default Home;
