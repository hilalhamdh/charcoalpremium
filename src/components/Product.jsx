import NavbarPages from "../pages/NavbarPages";

import Footer from "../pages/Footer";
import { productt, proces } from "../Data";

function Product() {
  return (
    <>
      <NavbarPages />
      <div className="product pb-10 ">
        <div className="container mx-auto  ">
          <div className=" items-center pt-18  md:pt-32">
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

            <div className="pt-4 md:pt-7">
              <h2 className="text-center mx-auto font-bold w-45 md:w-60 h-10  md:h-14 items-center pt-2 text-yellow-500 shadow-amber-50 text-2xl md:text-3xl border-b-3 ">
                Our Products
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {productt.map((products) => (
                  <div
                    key={products.id}
                    className="bg-white p-4 rounded shadow"
                  >
                    <img
                      src={products.gambar}
                      alt="product-image"
                      className="w-full h-[300px] object-cover rounded"
                    />
                    <h1 className="mt-2 text-lg text-center font-semibold">
                      {products.name}
                    </h1>
                  </div>
                ))}
              </div>
            </div>

            <div className="py-10 mx-2">
              <div className="">
                <h2 className="text-center mx-auto font-bold w-65 md:w-80 h-10  md:h-14 items-center pt-2 text-yellow-500 shadow-amber-50 text-2xl md:text-3xl border-b-3 ">
                  Desctiption Product
                </h2>
              </div>
              <p className="text-md md:text-2xl text-justify pt-5 shadow-white shadow-4xl">
                Our products are tamarind wood charcoal, halaban wood charcoal,
                coffe wood charcoal and mixed hardwood charcoal. Our product
                made from the best quality raw material.
                <br />
                The advantages of our products:
              </p>
              <ol className="mx-4 list-decimal list-outside space-y-2 mt-4 text-sm md:text-lg text-justify">
                <li>Easy to turn on</li>
                <li>Longer burning time</li>
                <li>High temperature</li>
                <li>Smokeless and less spark</li>
                <li>Higher density</li>
                <li>Higher thermal efficiency</li>
              </ol>
            </div>
            <div className="pt-4 md:pt-7">
              <h2 className="text-center mx-auto font-bold w-65 md:w-80 h-10  md:h-14 items-center pt-2 text-yellow-500  shadow-amber-50 text-2xl md:text-3xl border-b-3 ">
                Production Procces
              </h2>
              <p className="z-50 text-center w-full pt-2 text-md">
                Our company standardized wood charcoal production process as
                following
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {proces.map((pros) => (
                  <div key={pros.id} className="bg-white p-4 rounded sha000ow">
                    <h1 className="mt-2 text-lg md:text-2xl font-semibold">
                      {pros.desc}
                    </h1>
                    <img
                      src={pros.gambar}
                      alt="product-image"
                      className="w-full h-[300px] object-cover rounded"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Product;
