import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DiscoverMore = () => {
  const [formData, setFormData] = useState({
    fname: '',
    lname: '',
    email: '',
    country: ''
  });

  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const scriptURL = 'https://script.google.com/macros/s/AKfycbyzMB7vmgXgTWc0iiPvueysvb3rxzQ44oO1DCjbyyv-0rGYyU2f6DRY5VrFE2Bbcpd78Q/exec';
    const form = new FormData();

    form.append('fname', formData.fname);
    form.append('lname', formData.lname);
    form.append('email', formData.email);
    form.append('country', formData.country);

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: form
      });
      const result = await response.json();

      if (result.result === 'success') {
        setStatus('Success! Your form has been submitted.');
        setFormData({
          fname: '',
          lname: '',
          email: '',
          country: ''
        });
      } else {
        setStatus('Error! ' + result.error);
      }
    } catch (error) {
      setStatus('Error! ' + error.message);
    }
  };

  return (
    <div className='bg-blue-500 text-white h-full py-10 flex flex-col justify-center items-center'>
      <div className='text-center mb-8'>
        <p className='text-4xl md:text-6xl font-bold font-alata'>DISCOVER MORE</p>
        <p className='mt-2 font-alata'>GET THE LATEST NEWS AND MOST URGENT CALLS TO ACTION BY SIGNING UP TO RECEIVE EMAIL ALERTS.</p>
      </div>
      <form className='w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 px-4' onSubmit={handleSubmit}>
        <div className='flex flex-col'>
          <label className='font-alata'>FIRST NAME</label>
          <input
            type="text"
            name="fname"
            required
            value={formData.fname}
            onChange={handleChange}
            className='text-black py-2 px-4 rounded'
          />
        </div>
        <div className='flex flex-col'>
          <label className='font-alata'>LAST NAME</label>
          <input
            type="text"
            name="lname"
            required
            value={formData.lname}
            onChange={handleChange}
            className='text-black py-2 px-4 rounded'
          />
        </div>
        <div className='flex flex-col'>
          <label className='font-alata'>EMAIL ADDRESS</label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className='text-black py-2 px-4 rounded'
          />
        </div>
        <div className='flex flex-col'>
          <label className='font-alata'>COUNTRY</label>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className='text-black py-2 px-4 rounded'
          />
        </div>
        <div className='col-span-1 md:col-span-2 flex items-center'>
          <input
            type="checkbox"
            name="checkbox"
            value={formData.checkbox}
            onChange={handleChange}
            className='text-black mr-2'
          />
          <label className='text-xs font-alata'>
            CHECK THIS BOX IF YOU WOULD LIKE TO RECEIVE, OR CONTINUE TO RECEIVE, PERIODIC UPDATES AND ACTION ALERTS FROM HUMANE SOCIETY UNIVERSITY OF KELANIYA VIA EMAIL. YOU MAY UNSUBSCRIBE AT ANY TIME.
          </label>
        </div>
        <div className='col-span-1 md:col-span-2 flex justify-center'>
          <button
            type="submit"
            className='bg-green-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded font-alata'
          >
            SIGN UP
          </button>
        </div>
      </form>
      {status && <p className="mt-4 text-center">{status}</p>}

    
     
      
     
    </div>
  );
};

export default DiscoverMore;
