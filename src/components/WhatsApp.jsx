const WhatsApp = () => {
  const nomorWa = "+6282326065654";
  const pesan = "Saya ingin Order product anda, Apakah Ready?";
  const linkWa = `http://wa.me/${nomorWa}?text=${pesan}`;
  return (
    <button
      onClick={() => window.open(linkWa, "_blank")}
      className=" mt-7 bg-green-600 rounded-lg text-white text-xl  w-40 h-9 font-semibold"
    >
      Hubungi Kami
    </button>
  );
};
export default WhatsApp;
