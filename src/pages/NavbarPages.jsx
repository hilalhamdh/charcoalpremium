import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "/images/logooo.jpg";
import CarouselPages from "../components/Carousel";

function NavbarPages() {
  const nomorWa = "+6282326065654";
  const pesan = "Saya ingin Order product anda, Apakah Ready?";
  const linkWa = `http://wa.me/${nomorWa}?text=${pesan}`;

  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);

  const navigate = useNavigate();

  const handleClick = () => {
    setShow(!show);
  };

  let menuActive = show ? "right-0" : "-right-full";

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 5) {
        setScroll(true);
        setShow(false);
      } else {
        setScroll(false);
      }
    });
  });

  let scrollActive = scroll ? "py-1 bg-white shadow " : "py-4";
  return (
    <>
      <div
        className={`navbar md:fixed relative w-full translate-all  ${scrollActive}`}
      >
        <div className="container mx-auto  ">
          <div className=" navbar-box flex items-center justify-between">
            <div className="logo flex grid-cols-2 gap-2 items-center">
              <img src={Logo} className="w-auto h-20 rounded-full" />
              <h1 className="text-lg items-center md:text-2xl font-bold">
                CHORCOAL PREMIUM
              </h1>
            </div>
            <div className="flex grid-cols-2 gap-5">
              <ul
                className={`flex lg:gap-12 md:static md:flex-row md:shadow-none md:py-5 md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:text-black gap-6 mt-20 rounded-lg   md:p-0 md:m-0 md:transition-none fixed ${menuActive} top-56 
            -translate-y-full  flex-col fixed z-50  rounded shadow-lg shadow-slate-300 bg-white font-bold
             text-black transition-all`}
              >
                <i
                  className="ri-close-line font-bold text-2xl text-right hover:text-pink-600 items-end pr-3 pt-7 md:hidden block"
                  onClick={handleClick}
                ></i>
                <li className="flex items-center gap-2 px-4">
                  <i className="ri-home-5-line text-3xl md:hidden block"></i>

                  <a
                    href="#"
                    onClick={() => navigate("/")}
                    className="text-xl md:text-lg opacity-75"
                  >
                    Home
                  </a>
                </li>
                <li className=" flex items-center gap-2 px-4">
                  <i className="ri-contacts-fill text-3xl md:hidden block"></i>
                  <a
                    href="#"
                    onClick={() => navigate("/contact")}
                    className="text-xl md:text-lg opacity-75"
                  >
                    Contact Us
                  </a>
                </li>

                <li className=" flex items-center gap-2 px-4">
                  <i className="ri-id-card-line text-3xl md:hidden block"></i>

                  <a
                    href="#"
                    onClick={() => navigate("/portofolio")}
                    className="text-xl md:text-lg opacity-75"
                  >
                    Portofolio
                  </a>
                </li>

                <li className=" flex items-center gap-2 md:pb-0 pb-3 px-4">
                  <i className="ri-product-hunt-line text-3xl md:hidden block"></i>
                  <a
                    href="#"
                    onClick={() => navigate("/product")}
                    className="text-xl md:text-lg opacity-75"
                  >
                    Product
                  </a>
                </li>
              </ul>
            </div>

            <div className="social flex  items-center gap-2">
              <button
                onClick={() => window.open(linkWa, "_blank")}
                type="submit"
                className=" bg-green-600 text-center text-sm md:text-lg w-[100px] md:w-[150px] py-1 rounded-lg text-white  hover:bg-sky-400 translate-all"
              >
                <i className="ri-whatsapp-line "></i> WhatsApp
              </button>
              <i
                className="ri-menu-line text-3xl hover:text-pink-500 md:hidden block"
                onClick={handleClick}
              ></i>
            </div>
          </div>
        </div>
      </div>
      {/* <CarouselPages /> */}
    </>
  );
}

export default NavbarPages;
