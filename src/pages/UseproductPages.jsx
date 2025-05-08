const UseproductPages = () => {
  //   const useProduct = [
  //     {
  //       id: 1,
  //       image: "/images/use1.jpg",
  //       desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
  //                 error consequuntur vero cumque quae nesciunt magni ratione
  //                 assumenda illum id aut, fuga excepturi corrupti ex accusantium
  //                 ad cupiditate laboriosam eveniet`,
  //     },
  //     {
  //       id: 2,
  //       image: "/images/use9.jpg",
  //       desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
  //               error consequuntur vero cumque quae nesciunt magni ratione
  //               assumenda illum id aut, fuga excepturi corrupti ex accusantium
  //               ad cupiditate laboriosam eveniet`,
  //     },
  //     {
  //       id: 3,
  //       image: "/images/use4.jpg",
  //       desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
  //                   error consequuntur vero cumque quae nesciunt magni ratione
  //                   assumenda illum id aut, fuga excepturi corrupti ex accusantium
  //                   ad cupiditate laboriosam eveniet`,
  //     },
  //     {
  //       id: 4,
  //       image: "/images/use1.jpg",
  //       desc: `Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illo
  //                 error consequuntur vero cumque quae nesciunt magni ratione
  //                 assumenda illum id aut, fuga excepturi corrupti ex accusantium
  //                 ad cupiditate laboriosam eveniet`,
  //     },
  //   ];
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
                src="/images/use1.jpg"
                className="w-full h-[350px] object-cover rounded-lg"
              />
              <h2 className="text-2xl font-bold text-white pb-3 pt-1 mx-2">
                Industrial Use
              </h2>
              <p className="text-white text-justify text-sm md:text-lg mx-2">
                Charcoal for industrial purposes has many applications due to
                its properties as a clean, strong fuel and its high carbon
                content. Activated charcoal is used for refining precious metals
                such as gold and silver.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-duration="3000" className="py-10">
              <img
                src="/images/use9.jpg"
                className="w-full h-[350px] object-cover rounded-lg"
              />
              <h2 className="text-2xl font-bold text-white pb-3 pt-1 mx-2">
                Home Barberque
              </h2>
              <p className="text-white text-justify text-sm md:text-lg mx-2">
                For home barbecues, charcoal plays an important role in creating
                a distinctive grilled taste and a more authentic cooking
                experience. Perfect for longer BBQs or slow cooking.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-duration="3000" className="py-10">
              <img
                src="/images/use2.jpg"
                className="w-full h-[350px] object-cover rounded-lg"
              />
              <h2 className="text-2xl font-bold text-white pb-3 pt-1 mx-2">
                Restaurant and Cafes
              </h2>
              <p className="text-white text-justify text-sm md:text-lg mx-2">
                Restaurants—especially those that feature grill, barbecue, or
                smoky dishes—often use charcoal because it can provide high heat
                and a distinctive, authentic taste to food. Charcoal produces a
                natural smoky flavor that infuses meat, fish, and
                vegetables—something that's hard to achieve with gas or
                electricity.
              </p>
            </div>
            <div data-aos="fade-up" data-aos-duration="3000" className="py-10">
              <img
                src="/images/use8.jpg"
                className="w-full h-[350px] object-cover rounded-lg "
              />
              <h2 className="text-2xl font-bold text-white pb-3 pt-1 mx-2">
                Heating
              </h2>
              <p className="text-white text-sm md:text-lg text-justify mx-2">
                The use of charcoal as a heating source has long been known for
                its efficiency in producing high heat at relatively low cost.
                Charcoal stove: Used in rural areas or homes without access to
                electricity/gas. Portable space heater: In some countries (e.g.
                in Asia and Africa), charcoal is used in ceramic stoves to heat
                small rooms during the winter.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UseproductPages;
