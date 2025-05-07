import Footer from "../pages/Footer";
import NavbarPages from "../pages/NavbarPages";

function Contact() {
  const nomorWa = "+6282326065654";
  const pesan = "Saya ingin Order product anda, Apakah Ready?";
  const linkWa = `http://wa.me/${nomorWa}?text=${pesan}`;
  return (
    <>
      <NavbarPages />
      <div className="homepage pb-10">
        <div className="container mx-auto px-4 ">
          <div className="Contact grid md:grid-cols-2  grid-cols-1 items-center gap-3 pt-20 md:pt-32">
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
                  082-326-065-654
                </p>
                <p className="pt-3">
                  <i className="ri-mail-line pr-3 pl-2 "></i>
                  hilalbow011@gmail.com
                </p>
                <p className="flex">
                  <i className="ri-home-office-line pr-3 pl-2 pt-3"> </i>
                  <p className="text-justify pt-3">
                    Ponrang, Desa Tirowali, Kecamatan Ponrang, Kabupaten Luwu,
                    Sulawesi Selatan
                  </p>
                </p>
              </div>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            data-aos-delay="400"
            className=" mx-auto mt-7 rounded-2xl shadow-lg"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127474.84390309086!2d120.13142108917238!3d-3.202155282556154!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2d915352008f3277%3A0x377da953be3630ef!2sMasjid%20Al%20Mukmin%20(LDII)!5e0!3m2!1sid!2sid!4v1745853037542!5m2!1sid!2sid"
              className=" w-full h-[350px] md:h-[520px] rounded-xl md:p-2 p-0 "
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Contact;
