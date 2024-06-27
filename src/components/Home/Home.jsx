import React, { useEffect, useState } from 'react';

const images = [
  '/image1.jpg',
  '/image2.jpg',
  '/image3.jpg',
];

const Home = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 10000); // 30000 milliseconds = 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      
     
      <div className=' flex '> 
        <div className='relative '> 
          <img className='  py-[0px] h-[650px] w-[1400px]' src={images[currentImage]} alt={`Slide ${currentImage + 1}`} />
        </div>
        <div className='absolute text-left ml-8p  py-[110px] text-white   text-opacity-70 '> 
            <p className='text-3xl'>DICOVER</p>
            <p className='2xl:text-12xl xl:text-9xl lg:text-9xl md:text-8xl sm:text-7xl text-6xl tracking-widest font-bold'>LIFE FOR A PAW MAGAZINE</p>
            <p className='leading-5 mt-9 tracking-tighter text-lg'>HUMANE SOCIETYS BIGGEST PROJECT REVOLVING <p>AROUND ANIMAL HEALTHCARE AND WALFARE...AND </p> WAHT ELSE .I NEED SOMETHING TO FILL UP THIS<p> BLANK SPACE.</p> </p>
            <p className='font-bold text-lg mt-3'>SEE MORE</p>
          </div>
          <div className='absolute  border-none py-[327px] px-[350px] bg-white bg-opacity-20'><p></p></div>


         
       
      </div>
     
    </div>
  )
}

export default Home