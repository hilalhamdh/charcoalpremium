import Use2 from "../assets/images/use2.jpg";
import Use9 from "../assets/images/use9.jpg";
import Use8 from "../assets/images/use8.jpg";

const UseproductPages = () => {
  return (
    <div className="bg-black mt-10 min-h-screen">
      <div className="container mx-auto pt-30  ">
        <div className="w-72 items-center text-center justify-center mx-auto">
          <h2 className="text-2xl text-center font-bold text-white border-b-2 border-b-white pb-3 ">
            Uses of Our Products
          </h2>
        </div>
        <p className="text-2xl md:text-5xl font-bold text-white text-center pt-4">
          From home to Industries, our products make your life better.
        </p>
        <div className="pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div data-aos="fade-up" data-aos-duration="3000" className="py-10">
              <img
                src={Use9}
                className="w-full h-[350px] object-cover rounded-lg"
              />
              <h2 className="text-2xl font-bold text-white pb-3 pt-1 mx-2">
                Home Barberque
              </h2>
              <p className="text-white text-justify text-sm md:text-lg mx-2">
                For home barbecues, wood charcoal plays an important role in
                creating a distinctive grilled taste and a more authentic
                cooking experience. Perfect for longer BBQs or slow cooking.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-duration="3000" className="py-10">
              <img
                src={Use2}
                className="w-full h-[350px] object-cover rounded-lg"
              />
              <h2 className="text-2xl font-bold text-white pb-3 pt-1 mx-2">
                Restaurant and Cafes
              </h2>
              <p className="text-white text-justify text-sm md:text-lg mx-2">
                Restaurants—especially those that feature grill, barbecue, or
                smoky dishes—often use charcoal because it can provide high heat
                and a distinctive, authentic taste to food. Wood charcoal
                produces a natural smoky flavor that infuses meat, fish, and
                vegetables—something that's hard to achieve with gas or
                electricity.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-duration="3000" className="py-10">
              <img
                src={Use8}
                className="w-full h-[350px] object-cover rounded-lg "
              />
              <h2 className="text-2xl font-bold text-white pb-3 pt-1 mx-2">
                Heating
              </h2>
              <p className="text-white text-sm md:text-lg text-justify mx-2">
                The use of wood charcoal as a heating source has long been known
                for its efficiency in producing high heat at relatively low
                cost. wood charcoal stove: Used in rural areas or homes without
                access to electricity/gas. Portable space heater: In some
                countries (e.g. in Asia and Africa),wood charcoal is used in
                ceramic stoves to heat small rooms during the winter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseproductPages;
