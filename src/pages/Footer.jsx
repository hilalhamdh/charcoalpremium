import WhatsApp from "../components/WhatsApp";

const Footer = () => {
  return (
    <>
      <div className="bg-black  md:h-[400px]">
        <div className="grid grid-col1-1 md:grid-cols-3 gap-5">
          <div className="mx-5 text-white md:ml-12 pt-14">
            <h2 className="font-bold text-2xl md:text-3xl">About Company</h2>
            <p className="pt-5 md:pt-10 text-lg md:text-xl text-justify  md:mr-12">
              Charcoal Premium has been a leading global charcoal manufacturer
              and exporter for the past 6 years, delivering top-quality
              varieties of Indonesian natural wooden and wooden briquette
              charcoal worldwide.
            </p>
          </div>
          <div className="text-white pt-5   md:pt-14">
            <h2 className="font-bold text-2xl md:text-3xl mx-5 md:mx-16">
              Contact
            </h2>
            <p className="pt-5 md:pt-10 text-lg md:text-xl text-justify mx-5  md:mx-16 ">
              Address : Ponrang, Desa Tirowali, Kecamatan Ponrang, Kabupaten
              Luwu, Sulawesi Selatan
            </p>
            <h2 className="font-bold text-xl pt-2 md:pt-4 mx-5 md:mx-16">
              Email
            </h2>
            <p className="pt-1 md:pt-3 text-lg text-justify mx-5 md:mx-16 ">
              barapremium@gmail.com
            </p>
            <h2 className="font-bold text-xl pt-1 md:pt-4 mx-5 md:mx-16">
              Phone
            </h2>
            <p className="pt-1 md:pt-3 text-lg text-justify mx-5 md:mx-16 ">
              +62 823-2606-5654
            </p>
          </div>
          <div className="text-white pt-7 md:pt-14">
            <h2 className="font-bold text-2xl md:text-3xl mx-5 md:mx-16 bg-white text-center  text-black w-48 rounded-sm">
              Quick Menu
            </h2>
            <ul className="pt-7 text-lg text-justify mx-5 md:mx-16">
              <li className="pb-5">
                <a href="/" className="text-xl ">
                  Home
                </a>
              </li>
              <li className="pb-8">
                <a href="/contact" className="text-xl">
                  Contact Us
                </a>
              </li>
            </ul>
            <div className="flex bg-slate-800 h-14 w-[350px] mx-5 md:mx-16 rounded-sm mb-10 md:mb-0">
              <p className=" text-xl pt-3 font-semibold mx-6">
                Subscribe For Us
              </p>
              <i className="ri-telegram-2-line pt-1 pl-20 text-5xl"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
