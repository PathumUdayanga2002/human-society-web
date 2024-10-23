import React, { useEffect } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { SlArrowLeftCircle } from "react-icons/sl";
import { Link } from 'react-router-dom';

const MeetExcoPage = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <div className='py-20 md:py-24 font-poppins'>
      <Navbar />
      <Link to='/backhome'>
        <button className="cursor-pointer border-none text-xl md:text-2xl mb-4 md:mb-8">
          <div className="flex justify-left items-center md:text-3xl mt-2 ml-2">
            <SlArrowLeftCircle />
            <p className='ml-2'>GO BACK</p>
          </div>
        </button>
      </Link>

      <div className='text-center mb-8 md:mb-12'>
        <p className='text-3xl md:text-5xl font-bold font-inter'>Meet the Team behind the Humane Society 24/25</p>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-4 items-center justify-items-center text-center'>
        {teamMembers.map(member => (
          <div key={member.position}>
            <img src={member.image} className='h-56 w-56 rounded-full border-8 border-blue-500 object-cover' alt={member.name} />
            <p className='text-xl md:text-xl lg:text-2xl font-bold mt-4'>{member.position}</p>
            <p className='text-xl md:text-xl lg:text-2xl font-bold mt-0'>{member.profession}</p>
            <p className='text-lg md:text-base'>{member.name}</p>
          </div>
        ))}
      </div>

      <div className='text-left my-8 md:my-12'>
        <p className='text-3xl md:text-5xl font-bold ml-4 font-inter'>MARKETING SUBCOMMITTEE</p>
      </div>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-4 items-center justify-items-center text-center'>
        {marketingSubcommittee.map(member => (
          <div key={member.position}>
            <img src={member.image} className='h-56 w-56 rounded-full border-8 border-blue-500 object-cover' alt={member.name} />
            <p className='text-xl md:text-xl lg:text-2xl font-bold mt-4'>{member.position}</p>
            <p className='text-base md:text-lg lg:text-lg font-bold mt-0'>{member.profession}</p>
            <p className='text-lg md:text-base'>{member.name}</p>
          </div>
        ))}
      </div>

      <div className='text-left my-8 md:my-12'>
        <p className='text-3xl md:text-5xl font-bold ml-4 font-inter'>HR SUBCOMMITTEE</p>
      </div>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-4 items-center justify-items-center text-center'>
        {hrSubcommittee.map(member => (
          <div key={member.position}>
            <img src={member.image} className='h-56 w-56 rounded-full border-8 border-blue-500 object-cover' alt={member.name} />
            <p className='text-xl md:text-xl lg:text-2xl font-bold mt-4'>{member.position}</p>
            <p className='text-lg md:text-lg lg:text-lg font-bold mt-0'>{member.profession}</p>
            <p className='text-lg md:text-base'>{member.name}</p>
          </div>
        ))}
      </div>

      <div className='text-left my-8 md:my-12'>
        <p className='text-3xl md:text-5xl font-bold ml-4 font-inter'>FINANCE SUBCOMMITTEE</p>
      </div>
      
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-y-8 gap-x-4 items-center justify-items-center text-center'>
        {financeSubcommittee.map(member => (
          <div key={member.position}>
            <img src={member.image} className='h-56 w-56 rounded-full border-8 border-blue-500 object-cover' alt={member.name} />
            <p className='text-xl md:text-xl lg:text-2xl font-bold mt-4'>{member.position}</p>
            <p className='text-base md:text-base lg:text-base font-bold  mt-0'>{member.profession}</p>
            <p className='text-lg md:text-base'>{member.name}</p>
          </div>
        ))}
      </div>

      <div className='mt-12 -mb-[100px]'>
        <Footer />
      </div>
    </div>
  );
};

const teamMembers = [
  { position: 'PRESIDENT', name: 'THULANI MAGEDAR', image: 'Thulanimagedara.jpg' },
  { position: 'SECRETARY', name: 'INDUSHA THENNAKOON', image: 'women.jpg' },
  { position: 'JUNIOR TREASURER', name: 'MADHUSHIKA DISSANAYAKE', image: 'women.jpg' },
  { position: '1ST VICE PRESIDENT', name: 'HARSHANA RATHNAYAKA', image: 'man.jpg' },
  { position: 'VICE PRESIDENT', name: 'CHAMINDU JAYAHANSA', image: 'Chamindu.jpg' },
  { position: 'VICE PRESIDENT', name: 'SRIMAL RANDIKA', image: 'man.jpg' },
  { position: 'ASSISTANT SECRETARY', name: 'PARAMUDITHA MANATHUNGA', image: 'women.jpg' },
  { position: 'A.JUNIOR TREASURER', name: 'HIMASHI YASHODHARA', image: 'women.jpg' },
  { position: 'SENIOR EDITOR', name: 'THURUNU MARASINGHE', image: 'ThurunuYM.webp' },
  { position: 'SENIOR EDITOR', name: 'RASAL DASANAYAKE', image: 'man.jpg' },
  { position: 'JUNIOR EDITOR', name: 'THISUN GUNATHILAKA', image: 'Thisun.jpg' },
  { position: 'JUNIOR EDITOR', name: 'CHAMOD JAYAWEERA', image: 'man.jpg' },
  { position: 'COORDINATOR', name: 'AMIDU DESHAN', image: 'AmiduDeshan.jpg' },
  { position: 'COORDINATOR', name: 'HARSHINI LIYANAARACHCHI', image: 'HashiniTharushika.jpg' },
  { position: 'COORDINATOR', name: 'ANUSHA MADHUWANTHI', image: 'AnushaMadhuwanthi.jpg' },
  { position: 'COORDINATOR', name: 'CHIRATH UMAYANGA', image: 'Chirath.jpg' },
];

const marketingSubcommittee = [
  { position: 'DIRECTOR', name: 'DILEKA SITHSIRINI', image: 'women.jpg' },
  { position: 'MANAGER ', profession:'(DESIGNING)', name: 'DHANITHA KOLONNAGE', image: 'man.jpg' },
  { position: 'MANAGER ', profession:'(CONTENT WRITING)', name: 'MADUSHI HASANTHIKA', image: 'women.jpg' },
  { position: 'MANAGER ', profession:'(PHOTOGRAPHY)', name: 'METHARA WANIGASINGHE', image: 'women.jpg' },
  { position: 'MANAGER ', profession:'(PUBLIC RELATIONS)', name: 'NADEESHA KULASEKARA', image: 'women.jpg' },
  { position: 'MANAGER ', profession:'(ANNOUNCING & DUBBING)', name: 'AVINDYA DEVINDI', image: 'women.jpg' },
];

const hrSubcommittee = [
  { position: 'DIRECTOR', name: 'DANANJI SILVA', image: 'women.jpg' },
  { position: 'MANAGER ', profession:'(MEMBER RELATIONS)', name: 'DINISHA KODITHUWAKKU', image: 'women.jpg' },
  { position: 'MANAGER ',profession:'(MEMBER RELATIONS)', name: 'ANJANA NETHMINI', image: 'women.jpg' },
  { position: 'MANAGER ',profession:'(PROJECT MANAGEMENT)', name: 'THAMAL NADEESHA', image: 'women.jpg' },
  { position: 'MANAGER ',profession:'(PROJECT MANAGEMENT)', name: 'NADUNI HERATH', image: 'women.jpg' },
];

const financeSubcommittee = [
  { position: 'DIRECTOR', name: 'ISURUNI DIAS', image: 'women.jpg' },
  { position: 'MANAGER ', profession:'(ER & FUNDRAISING)', name: 'THERESHA LAKSHMI', image: 'women.jpg' },
  { position: 'MANAGER ', profession:'(PARTNERSHIP DEVELOPMENT)', name: 'ACHINI UDAYANGANI', image: 'women.jpg' },
];

export default MeetExcoPage;
