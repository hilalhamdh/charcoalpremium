function VisimisiPages() {
  return (
    <div className="pt-10 md:pt-20 min-h-screen flex items-center justify-center ">
      <div className="container mx-auto px-4 ">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6   ">
          <div
            // data-aos="fade-up"
            // data-aos-duration="3000"
            className="flex grid-cols-2 hover:scale-105 duration-300 w-full  md:w-full h-90 md:h-80 border-4 border-white rounded-2xl shadow-2xl "
          >
            <i className="text-6xl rounded-full ri-empathize-line py-10 md:px-3"></i>
            <div className="py-10 px-1 md:px-3">
              <h1 className="text-xl md:text-2xl font-bold pt-3 ">
                OUR VISION{" "}
              </h1>
              <p className="pt-5 text-sm md:text-lg text-justify mt-4 ">
                Our factory produces the highest quality wood charcoal, made
                exclusively from superior raw materials for exeptional results.
                <br />
                Expanding our global reach, we proudly export around 150 tons of
                our high-quality products primaly to China and the Middle East.
                <br />
                to become a leading charcoal business by strategically
                prioritize earning buyer trust and delivering superior service
              </p>
            </div>
          </div>
          <div>
            <div
              // data-aos="fade-up"
              // data-aos-duration="3000"
              className="flex grid-cols-2 w-full hover:scale-105 duration-300  md:w-full h-72 md:h-80 border-4 border-white rounded-2xl shadow-2xl "
            >
              <i className="text-6xl rounded-full ri-hand-heart-line py-10 md:px-3"></i>
              <div className="py-10 px-1 md:px-3">
                <h1 className="text-xl md:text-2xl font-bold pt-3 ">
                  OUR MISSION{" "}
                </h1>

                <ol className="list-decimal list-outside space-y-2 mt-4 text-sm md:text-lg text-justify">
                  <li>Produce high quality and eco friendly wood charcoal.</li>
                  <li>Products and minimizing the environment impact.</li>
                  <li>
                    We are committed to sustainable practices believe that it is
                    our responsibility to contribute to a healthier world.
                  </li>
                </ol>
              </div>
            </div>
          </div>
          <div
            // data-aos="fade-up"
            // data-aos-duration="3000"
            className="flex grid-cols-2 w-full hover:scale-105 duration-300 md:w-full h-80 md:h-95 border-4 border-white rounded-2xl shadow-2xl "
          >
            <i className="text-6xl rounded-full ri-hand py-10 md:px-3"></i>
            <div className="py-10 px-1 md:px-3">
              <h1 className="text-xl md:text-2xl font-bold pt-3 ">
                OUR VALUES{" "}
              </h1>
              <ul className="pt-5 text-sm md:text-lg text-justify list-disc mt-4">
                <li>
                  We are committed to producing charcoal with high quality
                  standards, which are consistent and reliable for customers.
                </li>
                <li>
                  We uphold honesty and transparency in all aspects of our
                  business, from production to distribution.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VisimisiPages;
