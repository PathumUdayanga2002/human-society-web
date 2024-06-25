import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { IoArrowForwardCircleOutline } from "react-icons/io5";
import Slider from "react-slick";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

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
          infinite: false,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 550,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };
  return (
    <div className=" bg-white py-10 font-poppins mb-5 mt-[100px]">
      <div className="flex flex-col items-center justify-center mb-5">
        <div>
          <h1 className=" font-inter text-3xl font-bold md:text-4xl">NEWS</h1>
        </div>
        <p className=" text-xl opacity-80 md:text-2xl font-semibold font-inter mt-5">
          Lorem ipsum dolor sit amet
        </p>
      </div>
      <div className=" font-poppins w-3/5 m-auto ">
        <div className=" slider-container ">
          <Slider {...settings}>
            {data.map((d) => (
              <div className=" flex flex-col px-5 py-3 justify-center items-center ">
                <div className=" bg-black py-5 rounded-lg ">
                  <div>
                    <img src={d.img} alt="image" />
                  </div>
                  <div>
                    <p className=" px-3 text-center text-sm mt-2 text-white">
                      {d.review}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="flex items-end justify-end mt-10 gap-4 flex-row">
          <div className="flex justify-center items-center flex-row gap-4">
            <div className=" font-inter text-sm md:text-xl">CLICK FOR MORE</div>
            <a href="/moreNews">
              <button className=" cursor-pointer border-none text-2xl  ">
                <div className=" md:text-3xl mt-2 ">
                  <IoArrowForwardCircleOutline />
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

const data = [
  {
    img: `/src/assets/dog1.jpg`,
    review: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,`,
  },
  {
    img: `/src/assets/dog1.jpg`,
    review: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,`,
  },
  {
    img: `/src/assets/dog1.jpg`,
    review: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,`,
  },
  {
    img: `/src/assets/dog1.jpg`,
    review: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,`,
  },
  {
    img: `/src/assets/dog1.jpg`,
    review: ` Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,`,
  },
];

export default News;
