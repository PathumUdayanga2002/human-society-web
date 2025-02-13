import React, { useEffect, useState } from 'react';

const images = [
  '/image1.jpg',
  '/image2.jpg',
  '/image3.jpg',
  '/image4.jpg',
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 10000); // 10000 milliseconds = 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div id='home' className='relative h-[650px] mt-14 font-inter'>
      <img className='w-full h-full object-cover' src={images[currentImage]} alt={`Slide ${currentImage + 1}`} />
      <div className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-30'>
        <div className='text-left text-white text-opacity-90 p-4 md:p-8'>
          <p className='text-xl md:text-3xl font-inter'>DISCOVER</p>
          <p className='2xl:text-12xl xl:text-9xl lg:text-9xl md:text-8xl sm:text-7xl text-4xl font-bold tracking-widest font-inter'>LIFE FOR A PAW MAGAZINE</p>
          <p className='mt-4 text-sm md:text-xl leading-relaxed font-inter'>
            HUMANE SOCIETY'S BIGGEST PROJECT REVOLVING AROUND ANIMAL HEALTHCARE AND WELFARE... 
            <br />AND WHAT ELSE. I NEED SOMETHING TO FILL UP THIS BLANK SPACE.
          </p>
          <p className='font-bold text-base mt-3'>SEE MORE</p>
        </div>
        <div className='absolute left-0 top-0 border-none py-[325px] xl:px-[350px] lg:px-[280px] bg-white bg-opacity-20'></div>
        
        {/* Diamond indicators */}
        <div className='absolute bottom-6 right-12 flex space-x-6'>
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-4 h-4 transform rotate-45 border-2 border-white ${currentImage === index ? 'bg-white' : 'bg-transparent'}`}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
