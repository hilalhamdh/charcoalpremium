import WhatsApp from "../components/WhatsApp";

const Footer = () => {
  return (
    <>
      <div className="bg-black  md:h-[400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="mx-2 text-white md:ml-12 pt-14">
            <h2 className="font-bold text-2xl md:text-3xl">About Us</h2>
            <p className="pt-5 md:pt-10 text-sm md:text-lg text-justify  md:mr-12">
              We are a factory wood charcoal. We produce the best wood charcoal
              with the best quality raw material
            </p>
          </div>
          <div className="text-white pt-5   md:pt-14">
            <h2 className="font-bold text-2xl md:text-3xl mx-2 md:mx-16">
              Contact
            </h2>
            <p className="pt-5 md:pt-10 text-sm md:text-lg text-justify mx-2  md:mx-16 ">
              Office and warehouse address : Komp Pergudangan JJ Permata Jabon
              II C No.5, Desa/Kelurahan Tambaksawah, Kec. Waru, Kab. Sidoarjo,
              Provinsi Jawa Timur, Kode Pos: 61256
            </p>
            <h2 className="font-bold text-xl pt-5 md:pt-4 mx-2 md:mx-16">
              Email
            </h2>
            <p className="pt-1 md:pt-3 text-sm text-justify mx-2 md:mx-16 ">
              ptfirecity@gmail.com
            </p>
            <h2 className="font-bold text-xl pt-1 md:pt-4 mx-2 md:mx-16">
              Phone
            </h2>
            <p className="pt-1 md:pt-3 text-lg text-justify mx-2 md:mx-16 ">
              0811 1011 7776 & 0812 8813 3003
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
