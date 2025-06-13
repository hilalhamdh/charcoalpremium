import UseproductPages from "./UseproductPages";
import VisimisiPages from "./VisimisiPages";
import AOS from "aos";
import { useEffect } from "react";

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
          <div className="mx-5 md:mx-20">
            <h1 className="text-xl  md:text-2xl mb-4 md:mb-0  pt-5 text-zinc-900 text-justify">
              We are a factory wood charcoal. We produce the best wood charcoal
              with the best quality raw material
            </h1>

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
      <VisimisiPages />
      <UseproductPages />
    </>
  );
};

export default AboutPages;
