import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft, ChevronRight } from "lucide-react";

const CustomArrow = ({ direction, onClick }) => (
  <button
    className={`absolute top-1/2 transform -translate-y-1/2 z-10 bg-black bg-opacity-50 p-2 rounded-full ${
      direction === "prev" ? "left-4" : "right-4"
    }`}
    onClick={onClick}
  >
    {direction === "prev" ? (
      <ChevronLeft className="w-8 h-8 text-purple-400" />
    ) : (
      <ChevronRight className="w-8 h-8 text-purple-400" />
    )}
  </button>
);

const Highlights = () => {
  const settings = {
    dots: false, // Removed the dots
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <CustomArrow direction="prev" />,
    nextArrow: <CustomArrow direction="next" />,
  };

  const images = [
    {
      src: "https://res.cloudinary.com/dloe8x9e4/image/upload/v1739792038/DSCF1293_pr97s0.jpg",
      alt: "Alphabyte 1.0 Opening Ceremony",
    },
    {
      src: "https://res.cloudinary.com/dloe8x9e4/image/upload/v1739792481/IMG_6048_nwl80f.jpg",
      alt: "Participants Coding",
    },
    {
      src: "https://res.cloudinary.com/dloe8x9e4/image/upload/v1739792482/IMG_6138_jgcubg.jpg",
      alt: "Workshop Session",
    },
    {
      src: "https://res.cloudinary.com/dloe8x9e4/image/upload/v1739792482/IMG_6995_xptesq.jpg",
      alt: "",
    },
    {
      src: "https://res.cloudinary.com/dloe8x9e4/image/upload/v1739792481/IMG_6250_wz3036.jpg ",
      alt: "Our Team",
    },
  ];

  return (
    <div className="container pt-40 mx-auto px-4 relative">
      <h2 className="text-4xl md:text-5xl font-bold text-center text-white mb-10 animate__animated animate__fadeInDown">
        Alphabyte 1.0 Highlights
      </h2>
      <div className="max-w-4xl mx-auto relative">
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index} className="px-2">
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="w-full h-[600px] rounded-lg object-cover" // Changed from 400px to 600px
              />
              <p className="text-center text-gray-300 mt-4">{image.alt}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Highlights;
