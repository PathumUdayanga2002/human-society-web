import React from "react";
import { Link } from "react-router-dom";

const AboutUsHome = () => {
    return (
        <div>
            <div className=" bg-black">
                <h1 className="text-white text-5xl text-center font-bold py-12 font-inter">OUR MISSION AND VISION</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 text-white gap-4 px-4">
                    <div className="flex justify-center">
                        <img src="blackDog.jpg" alt="Black Dog" className="w-full h-auto md:max-w-md"/>
                    </div>
                    <div className="md:col-span-2 font-alata px-4">
                        <h2 className="text-green-500 text-3xl font-alata ">VISION</h2>
                        <p className="capitalize py-4 font-alata">We envision a compassionate community where all the animals are valued and cared for, and undergraduates are empowered for positive change through collaborative projects.</p>

                        <h2 className="text-green-500 text-3xl py-8 font-alata ">MISSION</h2>
                        <p className="capitalize py-4 font-alata">The Humane Society of the University of Kelaniya strives to cultivate a kinder environment to the animals and to enhance their lives while enhancing the social skills and of the undergraduates. We achieve this by fostering a community of compassion through educational programmes, vaccination programmes and other animal welfare projects. Our mission extends further as we advocate for community outreach by providing volunteer opportunities in various projects.</p>
                    </div>
                    
                    <div className="col-span-3 flex justify-center mt-4 lg:mb-[30px] lg:ml-[700px]">
                        <Link to='/about'> 
                            <div className="text-white">Learn More...</div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutUsHome;
