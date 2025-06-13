import UseproductPages from "./UseproductPages";
import VisimisiPages from "./VisimisiPages";
import AOS from "aos";
import { useEffect } from "react";
import Bara from "../assets/images/baara.jpg";
const AboutPages = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div className="md:pt-20">
        <div className="container mx-auto py-4">
          <h1 className="text-center text-2xl font-bold border-b-3 w-36 ml-1 md:ml-14  border-black">
            ABOUT US
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5   md:pt-10 mx-3 lg:mx-10 ">
            <div className=" md:order-first  md:mt-7 md:float-right md:ml-6">
              <img
                // data-aos="zoom-in"
                src={Bara}
                className="hidden  md:block md:none sm:w-full  h-[400px] object-cover rounded-sm "
              />
            </div>
            <div className="">
              <h1 className="text-xl  md:text-2xl mb-4 md:mb-0 font-bold text-zinc-900">
                We are a factory wood charcoal. We produce the best wood
                charcoal with the best quality raw material
              </h1>
              <img
                // data-aos="zoom-in"
                src={Bara}
                className="visible md:hidden w-full  h-[350px] object-cover rounded-sm "
              />
              <p
                // data-aos="fade-up"
                className="text-sm md:text-lg text-justify pt-5 leading-7 space-y-2"
              >
                Our factory produces the highest quality wood charcoal, made
                exclusively from superior raw materials for exeptional results.
                <br />
                Expanding our global reach, we proudly export around 150 tons of
                our high-quality products primaly to China and the Middle Eastto
                become a leading charcoal business by strategically prioritize
                earning buyer trust and delivering superior service
              </p>
            </div>
          </div>
        </div>
      </div>
      <VisimisiPages />
      <UseproductPages />
    </>
  );
};

export default AboutPages;
