import React, { useState } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { newsSegments } from '../../data/NewsPage';

const NewsPage = () => {

 
  const [currentPage, setCurrentPage] = useState(1);
 

  // const newsSegments = [
  //   { id: 1, title: "BRINGING A JOY TO CHILDREN WITH HUMANE AWURUDU 2024", content: `Humane අවුරුදු '24 organized by the Humane Society of University of Kelaniya to support a children's home and offer care to those who need it most.`, link: 'https://www.facebook.com/humaneUok/posts/pfbid02PXsThxjcg62BHhXo64WTAqcbjcQZ5MKzFdWmWvuc4PZFN5bioUViLeeera6AExMhl' },
  //   { id: 2, title: "ANNOUNCING THE WINNERS OF PAWS AND COLORS COMPETITION", content: `A huge congratulations to Nadeesha Kulasekara, the Winner - Essay/ Article/ Short Stories (English)  `, link: 'https://www.facebook.com/humaneUok/posts/pfbid02RSHKirmmFm35VXgYsPKf7joptNEGRvcbCxhVzNpZKHZgJf9X3fz7qUiq7HQpgzafl' },
  //   { id: 3, title: `MARINE HARMONY PHASE I WAS COMPLETED SUCCESSFULLY`, content: `The first phase of Project Marine Harmony, organized by the Humane Society of the University of Kelaniya, has been Successfully Completed! `, link: 'https://www.facebook.com/humaneUok/posts/pfbid032Lvn6tAUTZfBzkuXouheA61xXCQkcNx1e1LppbqU2tn4DPNGhX7rVAtaq4wr2xoRl' },
  //    ];

  const segmentsPerPage = 3;
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
            <a href={segment.link} target="_blank" rel="noopener noreferrer" className="flex-shrink-0 p-4 w-full lg:w-1/2">
              <img src={`nnews${segment.id}.jpg`} className="rounded-2xl w-full h-auto object-cover" alt="News" />
            </a>
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
