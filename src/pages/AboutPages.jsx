import VisimisiPages from "./VisimisiPages";

function AboutPages() {
  return (
    <>
      <div className="md:pt-20">
        <div className="container mx-auto py-4">
          <h1 className="text-center text-2xl font-bold border-b-3 w-36 ml-1 md:ml-14  border-black">
            ABOUT US
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-16  md:pt-10 mx-3 md:mx-10 ">
            <div className=" md:order-first  md:mt-7 md:ml-20">
              <img
                src="/images/baara3.jpg"
                className="hidden md:block md:none md:w-[700px]  h-[400px] object-cover rounded-sm "
              />
            </div>
            <div className="">
              <h1 className="text-xl  md:text-4xl mb-4 md:mb-0 font-bold text-indigo-300">
                Premium Charcoal, From the Best Supplier.
              </h1>
              <img
                src="/images/baara3.jpg"
                className="visible md:hidden md:w-[700px] h-[350px] md:h-[400px] object-cover rounded-sm "
              />
              <p className="text-sm md:text-xl text-justify pt-5 leading-7">
                Premium charcoal is a high-quality type of charcoal made from
                natural hardwood and coconut shells without any chemicals or
                added binders. This type of charcoal is designed to provide
                maximum performance in grilling and smoking food. We prioritize
                the highest quality standards in all aspects of our business.
                Our charcoal products are sourced from sustainable forests and
                are carefully crafted, ensuring consistent quality, optimal
                burning properties, and enhanced flavor for your grilling and
                cooking needs. The success of our company is driven by our
                dedication to uncompromising quality, excellent customer
                service, timely delivery, professionalism, and strong business
                ethics.
              </p>
            </div>
          </div>
        </div>
      </div>
      <VisimisiPages />
    </>
  );
}

export default AboutPages;
