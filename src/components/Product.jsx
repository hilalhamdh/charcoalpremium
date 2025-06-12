import NavbarPages from "../pages/NavbarPages";
import Bara1 from "../assets/images/baara1.jpg";
import Bara from "../assets/images/baara2.jpg";
import Bara2 from "../assets/images/baara5.jpg";
import Bara3 from "../assets/images/baara3.jpg";

import Footer from "../pages/Footer";

function Product() {
  return (
    <>
      <NavbarPages />
      <div className="product pb-10 ">
        <div className="container mx-auto  ">
          <div className=" items-center pt-14  md:pt-32">
            <div className=" bg-gradient-to-r from-slate-200 to-gray-400 to-90% h-50 md:h-60  ">
              <p className="text-3xl  md:text-6xl font-bold mx-5 md:mx-10 pt-16 md:pt-24 pb-5  ">
                Fire City Trad
              </p>
              <ul className="flex mx-5 md:mx-10 w-72 h-9 rounded-sm  bg-slate-300">
                <li className="text-yellow-900 px-5 pt-1 text-center items-center font-semibold text-lg md:text-xl">
                  <a href="/">Home </a>
                </li>
                <p className="py-2 pr-3 text-sm font-bold">||</p>
                <li className="text-yellow-900 pt-1 text-center items-center font-semibold text-lg md:text-xl">
                  <a href="/contact">Our Contact</a>
                </li>
              </ul>
            </div>

            <div className="pt-4 md:pt-7">
              <h2 className="text-center font-bold w-44 md:w-56 h-10  md:h-14 items-center pt-2 text-yellow-500 rounded-lg shadow-amber-50 text-2xl md:text-3xl bg-sky-950 mx-auto ">
                Our Product
              </h2>
            </div>

            <div className="py-10 px-1">
              <h1 className="text-xl md:text-2xl  pt-3 ">
                Our products are tamarind wood charcoal, halaban wood charcoal,
                coffe wood charcoal and mixed hardwood charcoal. Our product
                made from the best quality raw material.
                <br />
                The advantages of our products:
              </h1>
              <ul className="pt-5 text-sm md:text-lg text-justify list-disc mt-4">
                <li>
                  We are committed to producing charcoal with high quality
                  standards, which are consistent and reliable for customers.
                </li>
                <li>
                  We uphold honesty and transparency in all aspects of our
                  business, from production to distribution.
                </li>
              </ul>
            </div>

            <div className=" pt-4 md:pt-7 items-center justify-center ">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mx-4">
                <img src={Bara1} className="w-full md:w-[350px] h-[300px]" />
                <img src={Bara} className="w-full md:w-[350px] h-[300px]" />
                <img src={Bara2} className="w-full md:w-[350px] h-[300px]" />
                <img src={Bara3} className="w-full md:w-[350px] h-[300px]" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="hidden md:block pt-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3  h-48 bg-stone-700">
          <div className="flex grid-cols-2 gap-5 pt-18 mx-16">
            <i className="ri-phone-line text-white text-7xl font-bold  pt-1 "></i>
            <div className="col-span-4 text-left ml-2 ">
              <p className="text-white text-xl font-semibold pb-3 pl-1">
                Contact Us
              </p>
              <p className="text-white text-lg md:text-xl font-bold">
                +62 823-2606-5654
              </p>
            </div>
          </div>

          <div className="my-5 pt-2">
            <img
              src={Bara}
              className="w-[250px] h-[150px] rounded-sm  mx-auto"
            />
          </div>
          <div className="flex grid-cols-2  pt-18 gap-5">
            <div className="col-span-4 text-right ">
              <p className="text-white text-lg md:text-xl font-semibold pb-3 ">
                Mail Us
              </p>
              <p className="text-white text-lg md:text-xl font-bold">
                charcoalpremium@gmail.com
              </p>
            </div>
            <i className="ri-mail-ai-line text-white text-6xl font-bold   "></i>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Product;
