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
      <h1 className='font-bold text-5xl flex justify-center pt-[100px] pb-[50px]'>Discover the Latest Stories from the Humane Society</h1>
      <div className="mx-auto px-[250px]">
        {currentSegments.map(segment => (
          <div key={segment.id} className="flex items-center border-black-100 border-2 bg-white rounded-[20px] mb-[80px] h-[500px] transition duration-300 ease-in-out transform hover:scale-105">
            <div className="p-4">
              {/* Replace with your image */}
              <img src={`/src/assets/news/news${segment.id}.jpg`} className="ml-[10px] h-[450px] w-[500px] rounded-[20px]" alt="News Image" />
            </div>
            <div className="p-[50px]">
              <p className="text-4xl text-black font-bold mb-[20px]">{segment.title}</p>
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
