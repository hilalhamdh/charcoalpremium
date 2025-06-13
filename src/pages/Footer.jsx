const Footer = () => {
  return (
    <>
      <div className="bg-black  md:h-[400px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 ">
          <div className="mx-4 text-white md:ml-12 pt-14 ">
            <h2 className="font-bold text-2xl md:text-3xl">About Us</h2>
            <p className="pt-5 md:pt-10 text-sm md:text-lg text-justify ">
              We are a factory wood charcoal. We produce the best wood charcoal
              with the best quality raw material
            </p>
          </div>
          <div className="text-white pt-5   md:pt-14">
            <h2 className="font-bold text-2xl md:text-3xl mx-4 ">Contact</h2>
            <div className="flex items-center mx-2 ">
              <i className="ri-building-2-line"></i>
              <p className="pt-5 md:pt-10 text-sm md:text-lg text-justify mx-3  ">
                Office and warehouse address :<br /> Komp Pergudangan JJ Permata
                Jabon II C No.5, Desa/Kelurahan Tambaksawah, Kec. Waru, Kab.
                Sidoarjo, Provinsi Jawa Timur, Kode Pos: 61256
              </p>
            </div>
            <div className="flex items-center mx-2">
              <i className="ri-mail-line  "></i>
              <h2 className="pt-2 text-sm md:text-lg text-justify mx-3 ">
                Email :<br /> ptfirecity@gmail.com
              </h2>
            </div>
            <div className="flex items-center mx-2 pb-3">
              <i className="ri-smartphone-line"></i>
              <h2 className="pt-4  text-sm md:text-lg text-justify mx-3">
                Phone : <br />
                0811 1011 7776 & 0812 8813 3003
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="container  items-center justify-between">
        <p className="mx-auto py-4 text-sm text-center">
          &copy; Copyright by{" "}
          <span className="text-sm font-semibold md:font-bold">
            PT. Fire City Trad | 2025
          </span>
        </p>
      </div>
    </>
  );
};
export default Footer;
