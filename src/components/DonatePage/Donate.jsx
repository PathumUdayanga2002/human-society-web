import React from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const DonationCard = () => {
  return (
    <div className="min-h-screen flex flex-col py-[50px] ">
      <Navbar />

      <main className="flex-grow py-16 bg-gray-50">
        <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6">
            <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Donate</h2>

            <div className="space-y-6">
              <div className="text-center">
                <label className="block text-gray-600 text-sm mb-1">Card Holder Name</label>
                <div className="text-xl font-semibold text-gray-900">HUMANE SOCIETY</div>
              </div>

              <div className="text-center">
                <label className="block text-gray-600 text-sm mb-1">Card Number</label>
                <div className="text-xl font-semibold text-gray-900">055-2-001-1-0028705</div>
              </div>

              <button 
                className=" w-full bg-blue-600 text-white font-medium py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
                aria-label="Donate now"
              >
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </main>

      <div className='mt-3 -mb-[100px]'><Footer /></div>  
    </div>
  );
};

export default DonationCard;
