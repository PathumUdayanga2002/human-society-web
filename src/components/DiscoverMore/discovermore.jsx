import React, { useState } from 'react';

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
          country: '',
          
        });
      } else {
        setStatus('Error! ' + result.error);
      }
    } catch (error) {
      setStatus('Error! ' + error.message);
    }
  };

  return (
    <div className='bg-blue-500 text-white  h-[550px] flex flex-col justify-center items-center'>
      <div className='text-center mb-8'>
        <p className='text-6xl font-bold '>DISCOVER MORE</p>
        <p>GET THE LATEST NEWS AND MOST URGENT CALLS TO ACTION BY SIGNING UP TO RECEIVE EMAIL ALERTS. </p>
      </div>
      <form className='grid grid-cols-2 gap-6' onSubmit={handleSubmit}>
        <div>
          <p>FIRST NAME</p>
          <input
            type="text"
            name="fname"
            required
            value={formData.fname}
            onChange={handleChange}
            className='text-black py-4 px-32 rounded'
          />
        </div>
        <div>
          <p>LAST NAME</p>
          <input
            type="text"
            name="lname"
            required
            value={formData.lname}
            onChange={handleChange}
            className='text-black py-4 px-32 rounded'
          />
        </div>
        <div>
          <p>EMAIL ADDRESS</p>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            className='text-black py-4 px-32 rounded'
          />
        </div>
        <div>
          <p>COUNTRY</p>
          <input
            type="text"
            name="country"
            value={formData.country}
            onChange={handleChange}
            className='text-black py-4 px-32 rounded'
          />

        </div>
        <div className='col-span-2 text-center'>
        <input
            type="checkbox"
            name="checkbox"
            value={formData.checkbox}
            onChange={handleChange}
            className='text-black '
          />
          <label className='text-xs text-center' >  CHECK THIS BOX IF YOU WOULD LIKE TO RECEIVE, OR CONTINUE TO RECEIVE, PREIODIC UPDATES AND ACTION<p> ALERTS FROM HUMANE SOCIETY UNIVERSITY OF KELANIAYA VIA EMAIL.YOU MAY UNSUBSCRIBE AT ANY TIME.</p></label>
        </div>

        <div className='col-span-2 text-left text-2xl'>
          <button
            type="submit"
            className='bg-green-500 hover:bg-blue-700 text-white font-bold py-4 px-11 rounded'
          >
            Send
          </button>
        </div>
      </form>
      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  );
}

export default DiscoverMore;
