import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const NewsPage = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const newsSegments = [
    { id: 1, title: 'News Segment 1', content: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.' },
    { id: 2, title: 'News Segment 2', content: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.' },
    { id: 3, title: 'News Segment 3', content: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.' },
    { id: 4, title: 'News Segment 4', content: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.' },
    { id: 5, title: 'News Segment 5', content: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.' },
    { id: 6, title: 'News Segment 6', content: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.' },
    { id: 7, title: 'News Segment 7', content: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.' },
    { id: 8, title: 'News Segment 8', content: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.' },
    { id: 9, title: 'News Segment 9', content: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.' },
    { id: 10, title: 'News Segment 10', content: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.' },
  ];

  const segmentsPerPage = 5;
  const indexOfLastSegment = currentPage * segmentsPerPage;
  const indexOfFirstSegment = indexOfLastSegment - segmentsPerPage;
  const currentSegments = newsSegments.slice(indexOfFirstSegment, indexOfLastSegment);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <Navbar />
      <h1 className="font-bold text-center pt-24 pb-12 text-2xl md:text-3xl lg:text-4xl font-inter">Discover the Latest Stories from the Humane Society</h1>
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        {currentSegments.map(segment => (
          <div key={segment.id} className="flex flex-col lg:flex-row items-center border-black-100 border-2 bg-white rounded-2xl mb-10 transition duration-300 ease-in-out transform hover:scale-105">
            <div className="flex-shrink-0 p-4 w-full lg:w-1/2">
              <img src={`news${segment.id}.jpg`} className="rounded-2xl w-full h-auto object-cover" alt="News" />
            </div>
            <div className="p-6 w-full lg:w-1/2">
              <p className="text-black font-bold mb-4 text-lg sm:text-xl md:text-2xl lg:text-3xl">{segment.title}</p>
              <p className="text-sm text-gray-600">{segment.content}</p>
            </div>
          </div>
        ))}

        <div className="flex justify-center mt-4 mb-8">
          {Array.from({ length: Math.ceil(newsSegments.length / segmentsPerPage) }, (_, index) => (
            <button
              key={index}
              className={`px-4 py-2 mx-1 rounded-md ${currentPage === index + 1 ? 'bg-gray-700 text-white' : 'bg-gray-200 text-gray-700'}`}
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
