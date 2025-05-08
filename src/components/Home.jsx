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
{
  /* <div className="homepage pb-10 ">
        <div className="container mx-auto px-4 ">
          <div className="hero grid md:grid-cols-2 grid-cols-1 items-center gap-10 md:gap-20 pt-14 md:pt-32">
            <div className="box">
              <h1
                data-aos="fade-down"
                data-aos-duration="2000"
                className="lg:text-3xl/tight text-2xl font-bold mb-3 text-center md:text-left "
              >
                Welcome To Charcoal Premium
              </h1>
              <p
                data-aos="fade-right"
                data-aos-duration="2000"
                data-aos-delay="200"
                className="py-3 text-lg md:text-xl font-semibold text-justify"
              >
                We offer a diverse range of charcoal products tailored to meet
                the spesific needs of our valued costumers, wheter for grilling,
                heating, or industrial applications.
              </p>

              <button className="mt-7 bg-green-600 rounded-lg text-white text-xl  w-40 h-10 font-semibold">
                Hubungi Kami
              </button>
              <WhatsApp />
            </div>
            <div className="box" data-aos="fade-down" data-aos-duration="2000">
              <img
                src={Bara}
                data-aos="zoom-in"
                data-aos-duration="2000"
                alt="Halaman Homepage"
                className="md:w-[750px] w-[500px]  mx-auto md:m-0  rounded-xl  shadow-lg shadow-white  h-[350px] md:h-[450px] "
              />
            </div>
          </div>
        </div>
      </div> */
}
