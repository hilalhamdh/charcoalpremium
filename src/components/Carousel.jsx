import { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    url: "/images/bara.jpg",
  },
  {
    id: 2,
    url: "/images/bara1.jpg",
  },
  {
    id: 3,
    url: "/images/bara2.jpg",
  },
];
const CarouselPages = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === slides.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Ganti slide setiap 3 detik

    return () => clearInterval(interval); // Bersihkan interval saat unmount
  }, []);

  return (
    <>
      <div className="container  mx-auto pt-12 md:pt-28  overflow-hidden rounded-lg">
        <div
          className="flex transition-transform duration-700 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {slides.map((slide) => (
            <img
              key={slide.id}
              src={slide.url}
              alt={`Slide ${slide.id}`}
              className="w-full h-[300px] md:h-[600px] flex-shrink-0 object-cover"
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default CarouselPages;
