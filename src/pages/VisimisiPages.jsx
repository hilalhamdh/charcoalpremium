function VisimisiPages() {
  return (
    <div className=" pt-10 md:pt-30  min-h-screen  ">
      <div className="container mx-auto px-4 md:pl-10 ">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4  ">
          <div className="flex grid-cols-2 w-full md:w-[450px] h-72 md:h-80 border-4 border-white rounded-2xl shadow-2xl ">
            <i className="text-6xl rounded-full ri-bar-chart-fill py-10 md:px-3"></i>
            <div className="py-10 px-1 md:px-3">
              <h1 className="text-xl md:text-2xl font-bold pt-3 ">
                OUR VISION{" "}
              </h1>
              <p className="pt-5 text-sm md:text-lg text-justify mt-4 ">
                To be the leading producer of premium quality coconut charcoal
                briquettes and wood charcoal that is sustainable,
                environmentally friendly and globally trusted.
              </p>
            </div>
          </div>
          <div className="flex grid-cols-2 w-full md:w-[450px] h-80 md:h-96 border-4 border-white rounded-2xl shadow-2xl ">
            <i className="text-6xl rounded-full ri-bar-chart-fill py-10 md:px-3"></i>
            <div className="py-10 px-1 md:px-3">
              <h1 className="text-xl md:text-2xl font-bold pt-3 ">
                OUR MISSION{" "}
              </h1>
              <ul className="pt-5 list-decimal pl-2 text-sm md:text-lg text-justify mt-4 ">
                <li className="pb-1">
                  Providing high quality charcoal products derived from selected
                  raw materials and environmentally friendly production
                  processes.
                </li>
                <li className="pb-1">
                  Developing innovations in the charcoal manufacturing process
                  to improve efficiency, quality and sustainability.
                </li>
                <li>
                  Maintaining excellent quality standards and customer service.
                </li>
              </ul>
            </div>
          </div>
          <div className="flex grid-cols-2 w-full md:w-[450px] h-80 md:h-80 border-4 border-white rounded-2xl shadow-2xl ">
            <i className="text-6xl rounded-full ri-bar-chart-fill py-10 md:px-3"></i>
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
