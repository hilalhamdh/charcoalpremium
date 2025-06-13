// import Home from "../assets/images/5.jpg";

import NavbarPages from "../pages/NavbarPages";

import WhatsApp from "./WhatsApp";
import Footer from "../pages/Footer";

import AboutPages from "../pages/AboutPages";

import { product } from "../Data";

function Home() {
  return (
    <>
      <NavbarPages />
      <div>
        <div className="homepage pb-10">
          <div className="container mx-auto px-1 ">
            <div className="hero   md:pt-32">
              <div className="box">
                <div className=" bg-gradient-to-r from-slate-200 to-gray-400 to-90% h-60 md:h-70 pt-3  ">
                  <p className="text-2xl  md:text-6xl font-bold mx-4 md:mx-10 pt-16 md:pt-24 pb-2  ">
                    FIRECITY TRAD
                  </p>
                  <p className=" mt-1 text-sm md:text-xl  text-justify px-4 sm:pl-8 mb-4">
                    We are a factory wood charcoal. We produce the best wood
                    charcoal with the best quality raw material
                  </p>
                  <ul className="flex mx-4 md:mx-10 w-60 md:w-70 h-9 rounded-sm  bg-slate-300">
                    <li className="text-yellow-900 px-5 pt-1 text-center items-center font-semibold text-lg md:text-xl">
                      <a href="/">Home </a>
                    </li>
                    <p className="py-2 pr-3 text-sm font-bold">||</p>
                    <li className="text-yellow-900 pt-1 text-center items-center font-semibold text-lg md:text-xl">
                      <a href="/contact">Our Contact</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className=" mt-5 grid lg:grid-cols-4  md:grid-cols-2 grid-cols-1 gap-2">
                {product.map((products) => (
                  <div
                    className="flex items-center gap-2  border border-zinc-600 rounded-md hover:bg-zinc-800 group"
                    key={products.id}
                  >
                    <img
                      src={products.gambar}
                      alt="product"
                      className="w-full h-full bg-zinc-800  group-hover:bg-zinc-900"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutPages />
      <Footer />
    </>
  );
}

export default Home;
