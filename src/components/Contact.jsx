import Footer from "../pages/Footer";
import NavbarPages from "../pages/NavbarPages";

function Contact() {
  const nomorWa = "+6281110117776";
  const pesan = "Saya ingin Order product anda, Apakah stoknya Ready?";
  const linkWa = `http://wa.me/${nomorWa}?text=${pesan}`;
  return (
    <>
      <NavbarPages />
      <div className="homepage pb-10">
        <div className="container mx-auto px-4 items-center pt-18  md:pt-32 ">
          <div className=" bg-gradient-to-r from-slate-200 to-gray-400 to-90% h-60 md:h-70 pt-3  ">
            <p className="text-2xl  md:text-6xl font-bold mx-4 md:mx-10 pt-16 md:pt-24 pb-2  ">
              FIRECITY TRAD
            </p>
            <p className=" mt-1 text-sm md:text-xl  text-justify px-4 sm:pl-8 mb-4">
              We are a factory wood charcoal. We produce the best wood charcoal
              with the best quality raw material
            </p>
            <ul className="flex mx-4 md:mx-10 w-60 md:w-70 h-9 rounded-sm  bg-slate-300">
              <li className="text-yellow-900 px-5 pt-1 text-center items-center font-semibold text-lg md:text-xl">
                <a href="/">Home </a>
              </li>
              <p className="py-2 pr-3 text-sm font-bold">||</p>
              <li className="text-yellow-900 pt-1 text-center items-center font-semibold text-lg md:text-xl">
                <a href="/product">Our Products</a>
              </li>
            </ul>
          </div>
          <div className="Contact grid md:grid-cols-2  grid-cols-1 items-center gap-3 pt-10 ">
            <div className="grid-cols-3 w-[350px] md:w-2xl h-72   shadow-black border-black border-4 rounded-4xl items-start mx-auto">
              <p className="mt-7 border-2 bg-sky-200 text-black border-black text-xl text-center items-center mx-auto rounded-xl md:rounded-lg  w-40  h-8 font-semibold">
                Call Us
              </p>
              <p className="text-center mt-14 text-2xl md:text-4xl font-semibold">
                Need Some Information
              </p>
              <button
                onClick={() => window.open(linkWa, "_blank")}
                type="submit"
                className="mt-14 bg-green-700 text-xl md:text-2xl ml-10 text-center mx-auto  md:mx-52 shadow-slate-200 rounded-full border w-64 text-white h-12 py-1 font-semibold"
              >
                <i className="ri-whatsapp-line "></i> WhatsApp
              </button>
            </div>

            <div className="w-[350px] md:w-2xl h-80  items-center mx-auto  shadow-black border-black border-4 rounded-4xl">
              <div className="mt-7 border-2 bg-sky-200 text-black border-black text-xl text-center items-center mx-auto rounded-lg  w-40  h-8 font-semibold">
                Contact Us
              </div>
              <div className="mx-6 mt-5 md:mt-10 text-xl">
                <p className="">
                  <i className="ri-phone-line pr-3 pl-2 pb-3"></i>
                  0811-1011-7776
                </p>
                <p className="pt-3">
                  <i className="ri-mail-line pr-3 pl-2 "></i>
                  ptfirecity@gmail.com
                </p>
                <p className="flex">
                  <i className="ri-home-office-line pr-3 pl-2 pt-3"> </i>
                  <p className="text-justify pt-3">
                    Komp Pergudangan JJ Permata Jabon II C No.5, Tambaksawah,
                    Waru, Sidoarjo, East Java-Indonesi
                  </p>
                </p>
              </div>
            </div>
          </div>

          {/* <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="400"
            className=" mx-auto mt-7 rounded-2xl shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63748.73592835435!2d120.15878392333742!3d-3.0148947069564604!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d93e03ef72f9f91%3A0x3030bfbcaf770c0!2sPalopo%2C%20Kec.%20Wara%2C%20Kota%20Palopo%2C%20Sulawesi%20Selatan!5e0!3m2!1sid!2sid!4v1746652320323!5m2!1sid!2sid"
              className=" w-full h-[350px] md:h-[520px] rounded-xl md:p-2 p-0 "
            ></iframe>
          </div> */}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
