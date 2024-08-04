import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const NewsPage = () => {
  const [currentPage, setCurrentPage] = useState(1); // State to track current page

  // Sample data for news segments (replace with actual data)
  const newsSegments = [
    { id: 1, title: 'News Segment 1', content: 'Sed ut perspiciatis,unde omnis iste natuserror sit voluptatem ditaut fugit, sed quia' },
    { id: 2, title: 'News Segment 2', content: 'Sed ut perspiciatis,unde omnis iste natuserror sit voluptatem ditaut fugit, sed quia' },
    { id: 3, title: 'News Segment 3', content: 'Sed ut perspiciatis,unde omnis iste natuserror sit voluptatem ditaut fugit, sed quia' },
    { id: 4, title: 'News Segment 4', content: 'Sed ut perspiciatis,unde omnis iste natuserror sit voluptatem ditaut fugit, sed quia' },
    { id: 5, title: 'News Segment 5', content: 'Sed ut perspiciatis,unde omnis iste natuserror sit voluptatem ditaut fugit, sed quia' },
    { id: 6, title: 'News Segment 6', content: 'Sed ut perspiciatis,unde omnis iste natuserror sit voluptatem ditaut fugit, sed quia' },
    { id: 7, title: 'News Segment 7', content: 'Sed ut perspiciatis,unde omnis iste natuserror sit voluptatem ditaut fugit, sed quia' },
    { id: 8, title: 'News Segment 8', content: 'Sed ut perspiciatis,unde omnis iste natuserror sit voluptatem ditaut fugit, sed quia' },
    { id: 9, title: 'News Segment 9', content: 'Sed ut perspiciatis,unde omnis iste natuserror sit voluptatem ditaut fugit, sed quia' },
    { id: 10, title: 'News Segment 10', content: 'Sed ut perspiciatis,unde omnis iste natuserror sit voluptatem ditaut fugit, sed quia' },
  ];

  // Pagination configuration
  const segmentsPerPage = 5;
  const indexOfLastSegment = currentPage * segmentsPerPage;
  const indexOfFirstSegment = indexOfLastSegment - segmentsPerPage;
  const currentSegments = newsSegments.slice(indexOfFirstSegment, indexOfLastSegment);

  // Function to handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Navbar />
      <h1 className='font-bold text-center pt-[100px] pb-[50px] sm:text-3xl md:text-4xl lg: text-4xl'>Discover the Latest Stories from the Humane Society</h1>
      <div className="items-center md:px-[100px] lg: px-[10px] xl:px-[450px]">
        {currentSegments.map(segment => (
          <div key={segment.id} className="flex items-center border-black-100 border-2 bg-white rounded-[20px] sm: h-[250px] w-[500px] mb-[40px] lg:h-[300px] w-[600px] mb-[50px] transition duration-300 ease-in-out transform hover:scale-105">
            <div className="p-4 ">
              {/* Replace with your image */}
              <img src={`/src/assets/news/news${segment.id}.jpg`} className="ml-[10px] rounded-[20px] sm: h-[200px] w-[350px] lg: h-[250px] w-[450px]" alt="News Image" />
            </div>
            <div className="p-[50px]">
              <p className="text-black font-bold mb-[20px] sm:text-3xl md:text-3xl lg: text-xl">{segment.title}</p>
              <p className="text-sm text-gray-600">{segment.content}</p>
            </div>
          </div>
        ))}
        
        {/* Pagination buttons */}
        <div className="flex justify-center mt-4">
          {Array.from({ length: Math.ceil(newsSegments.length / segmentsPerPage) }, (_, index) => (
            <button
              key={index}
              className={`px-7 mb-[60px] text-2xl rounded-md ${currentPage === index + 1 ? 'text-gray font-bold' : 'text-black-700'}`}
              onClick={() => paginate(index + 1)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NewsPage;
