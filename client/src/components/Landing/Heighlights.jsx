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

const Heighlights = () => {
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
      src: "https://plus.unsplash.com/premium_photo-1739016808747-f96b411ed186?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxfHx8ZW58MHx8fHx8",
      alt: "Alphabyte 1.0 Opening Ceremony",
    },
    {
      src: "https://images.unsplash.com/photo-1739372425274-d41281e72c5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
      alt: "Participants Coding",
    },
    {
      src: "https://images.unsplash.com/photo-1739367889567-d63734f6df95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw2fHx8ZW58MHx8fHx8",
      alt: "Workshop Session",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1739131476773-02a75eb96d5d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
      alt: "Prize Distribution",
    },
    {
      src: "https://images.unsplash.com/photo-1739436114273-f894053b2429?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxMHx8fGVufDB8fHx8fA%3D%3D",
      alt: "Winning Team",
    },
  ];

  return (
    <div className="container pt-40 mx-auto px-4  relative">
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
                className="w-full h-[400px] object-cover rounded-lg"
              />
              <p className="text-center text-gray-300 mt-4">{image.alt}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Heighlights;
