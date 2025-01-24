import React from "react";
import { BiSolidSquare } from "react-icons/bi";
import professor from "../../assets/professor.jpg";
import timeline2 from "../../assets/timeline2.jpg";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const AboutUs = () => {
  return (
    <div className=" pt-12">
      <Navbar />
      <div id="about" className=" p-10 md:p-20 ">
        {/* link update. */}
        <div>
          <h1 className=" font-inter justify-center items-center flex  font-bold text-3xl uppercase md:text-4xl md:justify-start text-center">
            DISCOVER AND LEARN ABOUT THE HUMANE SOCIETY
          </h1>
        </div>
        <div className=" py-8 md:py-12 md:mt-5 flex justify-center md:flex md:justify-start md:items-start md:text-start flex-col items-center text-center">
          <h1 className=" font-inter   flex  font-bold text-xl md:text-2xl  uppercase text-green-500 ">
            <div className="mt-[3px] -ml-[1px]">
              <BiSolidSquare />
            </div>
            what is humane society of uok
          </h1>
          <p className=" py-3 md:text-xl font-inter  ">
            We envision a compassionate community where all the animals are
            valued and cared for, and undergraduates are empowered for positive
            change through collaborative projects.
          </p>
        </div>
        {/* swnior treasurer card */}
        <div className=" font-inter ">
          <h1 className="md:text-2xl md:text-start md:flex md:justify-start text-xl text-blue-500 font-bold flex justify-center text-center font-inter">
            <div className="mt-[3px] -ml-[1px]">
              <BiSolidSquare />
            </div>
            MESSAGE FROM OUR SENIOR TREASURER
          </h1>
          <div className="flex flex-col items-center text-center py-2 md:flex md:flex-row  md:gap-14 md:mt-5">
            {/* image */}
            <img
              className=" md:w-[200px] rounded-full w-32"
              src={professor}
              alt="treasor photo"
            />
            {/* text */}
            <div className="md:flex md:flex-col md:items-start md:text-start">
              <p className="py-3 md:text-xl font-inter">
                We envision a compassionate community where all <br /> the
                animals are valued and cared for, and undergraduates are
                <br /> empowered for positive change through collaborative
                projects.
              </p>
              <p className=" text-sm opacity-60 font-inter">
                -Medha gunarthna, senior lecturer, university of kelaniya
              </p>
            </div>
          </div>
        </div>
        {/* visoin */}
        <div className=" font-inter py-8 flex justify-center flex-col items-center text-center md:flex md:justify-start md:items-start md:text-start mt-5">
          <h1 className=" font-inter   flex  font-bold text-xl  uppercase text-green-500 md:text-2xl">
            <div className="mt-[3px] -ml-[1px]">
              <BiSolidSquare />
            </div>
            VISION
          </h1>
          <p className=" py-3 md:text-xl md:py-5 font-inter">
            We envision a compassionate community where all the animals are
            valued and cared for, and undergraduates are empowered for positive
            change through collaborative projects.
          </p>
        </div>
        {/* mission */}
        <div className=" font-inter  flex justify-center flex-col items-center text-center  md:flex md:justify-start md:items-start md:text-start mt-5">
          <h1 className=" text-xl text-blue-500 font-bold flex justify-center text-center py-4 md:text-2xl">
            {" "}
            <div className="mt-[3px] -ml-[1px]">
              <BiSolidSquare />
            </div>
            MISSION
          </h1>
          <p className=" py-3 md:text-xl ">
            The Humane Society of the University of Kelaniya strives to
            cultivate a kinder environment to the animals and to enhance their
            lives while enhancing the social skills and of the undergraduates.
            We achieve this by fostering a community of compassion through
            educational programmes, vaccination programmes and other animal
            welfare projects. Our mission extends further as we advocate for
            community outreach by providing volunteer opportunities in various
            projects.
          </p>
        </div>
        {/* timeline */}
        <div className=" py-5 flex justify-center flex-col items-center text-center  md:flex md:justify-start md:items-start md:text-start mt-5">
          <h1 className=" font-inter   flex  font-bold text-xl  uppercase text-green-500 md:text-2xl">
            <div className="mt-[3px] -ml-[1px]">
              <BiSolidSquare />
            </div>
            CURRENT PROJECT TIMELINE
          </h1>
          <div className="relative w-[280px] sm:w-[550px] md:w-[690px] lg:w-[900px] xl:w-[1200px] h-[500px] rounded-lg overflow-hidden shadow-lg group">
            {/* Image */}
            <img
              src={timeline2}
              alt="timeline image"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Fade Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-90 transition-all duration-500"></div>

            {/* Centered Text */}
            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
              <h1 className="text-white text-5xl font-bold">EXPLORE MORE</h1>
            </div>
          </div>

          {/* <img
            className=" w-80 flex items-center justify-center md:flex md:items-center md:justify-center md:w-[800px] mt-5 "
            src={timeline2}
            alt="timeline image"
          /> */}
          <p></p>
        </div>
        {/* committee */}
        <div className=" xl:flex xl:flex-row xl:justify-between  xl:items-center">
          <div>
            <h1 className=" text-xl text-blue-500 font-bold flex justify-center text-center py-4 md:justify-start md:text-start md:text-2xl md:mb-5 font-inter">
              <div className="mt-[5px] -ml-[1px]">
                <BiSolidSquare />
              </div>
              PRESENT AND PREVIOUS EXECUTIVE COMMITTEE
            </h1>
            {/* previous */}
            <h1 className=" font-inter flex  justify-center text-center py-2">
              {" "}
              PRESENT COMMITTEE
            </h1>
            <div className="relative group h-[700px] sm:h-[650px]">
              
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 rounded-xl"></div>
              
              {/* Centered Text */}
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h1 className="text-white text-2xl sm:text-4xl font-bold">EXECUTIVE COMMITTEE 24/25</h1>
              </div>

              <div className="grid grid-cols-3 border-2 p-2 rounded-xl gap-3 items-center bg-fuchsia-900/60 rounded-lg overflow-hidden shadow-lg">
                {committeeData.map((d) => (
                  <div className="flex flex-col gap-2 items-center justify-center text-center font-inter p-3 text-white">
                    <img
                      className=" border-solid border-4 border-pink-700 rounded-full w-16 h-16 "
                      src={d.image}
                      alt="avatar"
                    />
                    <p className=" font-bold text-[12px] md:text-[16px]">
                      {d.position}
                    </p>
                    <p className=" md:text-sm text-[10px]">{d.name}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* <div className="grid grid-cols-3 border-2 p-2 rounded-xl gap-3 items-center bg-fuchsia-900/60 rounded-lg overflow-hidden shadow-lg group">
              {committeeData.map((d) => (
                <div className="flex flex-col gap-2 items-center justify-center text-center font-inter p-3 text-white">
                  <img
                    className=" border-solid border-4 border-pink-700 rounded-full w-16 h-16 "
                    src={d.image}
                    alt="avatar"
                  />
                  <p className=" font-bold text-[12px] md:text-[16px]">
                    {d.position}
                  </p>
                  <p className=" md:text-sm text-[10px]">{d.name}</p>
                </div>
              ))}
              
            </div> */}
          </div>
          {/* previous */}
          <div className=" md:mt-16">
            <h1 className=" font-inter flex  justify-center text-center py-2 mt-5">
              {" "}
              PREVIOUS COMMITTEE
            </h1>
            <div className="relative group h-[700px] sm:h-[650px]">
              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-50 transition-all duration-500 rounded-xl"></div>
              
              {/* Centered Text */}
              <div
                className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <h1 className="text-white text-2xl sm:text-4xl font-bold">EXECUTIVE COMMITTEE 23/24</h1>
              </div>

              <div className="grid grid-cols-3  border-2 p-2 rounded-xl gap-3 items-center bg-fuchsia-900/60">
                {committeeData.map((d) => (
                  <div className="flex flex-col gap-2 items-center justify-center text-center font-inter p-3 text-white">
                    <img
                      className=" border-solid border-4 border-pink-600 rounded-full w-16 h-16 "
                      src={d.image}
                      alt="avatar"
                    />
                    <p className=" font-bold text-[12px] md:text-[16px]">
                      {d.position}
                    </p>
                    <p className=" md:text-sm text-[10px]">{d.name}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;

const committeeData = [
  {
    image: "avatar.png",
    position: "President ",
    name: "Kavindu Bandara",
  },
  {
    image: "avatar.png",
    position: "Vice President ",
    name: "Isiwara Perera",
  },
  {
    image: "avatar.png",
    position: "Vice President ",
    name: "Thulani Magedar",
  },
  {
    image: "avatar.png",
    position: "Secretary ",
    name: "Dileka Sithsirini",
  },
  {
    image: "avatar.png",
    position: "Vice Secretary ",
    name: "Danajani Silva",
  },
  {
    image: "avatar.png",
    position: "Junior Treasurer ",
    name: "Himashi Yashodara",
  },
  {
    image: "avatar.png",
    position: "Co-Editor ",
    name: "Harshana Rathnayaka",
  },
  {
    image: "avatar.png",
    position: "Co-Editor ",
    name: "Amidu Deshan",
  },
  {
    image: "avatar.png",
    position: "Coordinators ",
    name: "Dileka Sithsirini",
  },
  {
    image: "avatar.png",
    position: "Coordinators ",
    name: "Dileka Sithsirini",
  },
  {
    image: "avatar.png",
    position: "Coordinators ",
    name: "Dileka Sithsirini",
  },
  {
    image: "avatar.png",
    position: "Coordinators ",
    name: "Dileka Sithsirini",
  },
];
const coordinators = [
  {
    image: "avatar.png",
    name: "Himashi Yashodara",
  },
  {
    image: "avatar.png",
    name: "Harshana Rathnayaka",
  },
  {
    image: "avatar.png",
    name: "Amidu Deshan",
  },
  {
    image: "avatar.png",
    name: "Amidu Deshan",
  },
];
