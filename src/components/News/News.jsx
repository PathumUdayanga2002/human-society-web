import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import { Link } from "react-router-dom";

const News = () => {
  const NextArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <IoIosArrowDroprightCircle
          style={{ color: "black", fontSize: "30px" }}
        />
      </div>
    );
  };

  const PrevArrow = (props) => {
    const { className, onClick } = props;
    return (
      <div className={className} onClick={onClick}>
        <IoIosArrowDropleftCircle
          style={{ color: "black", fontSize: "30px" }}
        />
      </div>
    );
  };

  var settings = {
    dots: true,
    infinite: true,
    autoplay: true, // Enable autoplay
    autoplaySpeed: 3000, // Adjust autoplay speed as needed
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768, // tablets
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 600, // large phones
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480, // small phones
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div id="news" className="bg-white py-10 font-poppins mb-5 mt-[100px]">
      <div className="flex flex-col items-center justify-center mb-5">
        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold font-inter">
            RECENT UPDATE
          </h1>
        </div>
        <p className="text-lg sm:text-xl md:text-2xl opacity-80 font-semibold font-inter mt-5 text-center">
          DISCOVER THE LATEST STORIES FROM THE HUMANE SOCIETY
        </p>
      </div>

      <div className="w-full px-12 sm:px-12 md:px-10 lg:px-20 xl:px-24">
        <div className="slider-container">
          <Slider {...settings}>
            {data.map((d) => (
              <div
                key={d.caption}
                className="flex flex-col px-4 py-3 justify-center items-center"
              >
                <div className="bg-white p-3 rounded-2xl border border-gray-300 shadow-md hover:bg-gray-200">
                  <div>
                    <img
                      src={d.img}
                      alt={d.caption}
                      className="w-full h-40 object-cover rounded-t-2xl"
                    />
                  </div>
                  <div>
                    <p className="px-3 py-2 font-bold text-center text-sm sm:text-lg mt-2 text-black">
                      {d.caption}
                    </p>
                  </div>
                  <div>
                    <p className="px-4 text-center text-sm text-gray-600">
                      {d.review}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>

        <div className="flex items-end justify-end mt-10">
          <Link to="/newspage" className="flex items-center gap-2">
            <span className="font-inter text-sm md:text-xl">CLICK FOR MORE</span>
            <IoArrowForwardCircleOutline className="text-2xl md:text-3xl" />
          </Link>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    img: `/nnews1.jpg`,
    caption: "BRINGING A JOY TO CHILDREN WITH HUMANE AWURUDU 2024",
    review: `MAXIMUM CONTENT LINES IS 4.`,
  },
  {
    img: `/nnews2.jpg`,
    caption: "ANNOUNCING THE WINNERS OF PAWS AND COLORS COMPETITION",
    review: `MAXIMUM CONTENT LINES IS 4.`,
  },
  {
    img: `/nnews3.jpg`,
    caption: `MARINE HARMONY PHASE I WAS COMPLETED SUCCESSFULLY`,
    review: `MAXIMUM CONTENT LINES IS 4.`,
  },
];

export default News;
