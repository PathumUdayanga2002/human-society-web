import React from 'react'


const MeetExco = () => {
  return (
    <div>
      <div class="relative h-[850px] min-w-full bg-[url('/src/assets/thor.jpg')] bg-cover bg-center min-h-{300px} sm:min-h-[300px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px] flex">
          <img class="absolute h-[850px] w-full sm:min-h-[300px] md:min-h-[600px] lg:min-h-[700px] xl:min-h-[800px]" src='/src/assets/textback.png'/>
          <div className='relative text-left text-white text-opacity-90 p-4 md:p-8 max-w-[600px]'>
            <p className='mt-5 text-center font-bold text-5xl md:text-6xl sm:text-6xl mt-[100px] lg:text-6xl xl:text-6xl leading-relaxed'>MEET THE EXCO</p>
            <p className='mt-5 justify-center text-xl md:text-2xl sm:text-2xl lg:text-2xl xl:text-2xl leading-relaxed'>
            Welcome to the Executive Committee page! Our team of dedicated leaders is committed to guiding our organization towards success with vision, integrity, and innovation. Get to know the faces behind our strategic decisions and daily operations.
            </p>
            <Link to='/meetexcopage'>{/*link update */}
            <a href='#' className='mt-8 flex justify-center items-center'>
              <p className='ml-3 text-2xl md:text-3xl sm:text-3xl Slg:text-3xl xl:text-2xl'>EXPLORE MORE</p>
              <svg className='ml-[20px] w-[40px] h-[40px]' fill="#ffffff" height="70px" width="70px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490.4 490.4" xml:space="preserve" stroke="#ffffff"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M245.2,490.4c135.2,0,245.2-110,245.2-245.2S380.4,0,245.2,0S0,110,0,245.2S110,490.4,245.2,490.4z M245.2,24.5 c121.7,0,220.7,99,220.7,220.7s-99,220.7-220.7,220.7s-220.7-99-220.7-220.7S123.5,24.5,245.2,24.5z"></path> <path d="M138.7,257.5h183.4l-48,48c-4.8,4.8-4.8,12.5,0,17.3c2.4,2.4,5.5,3.6,8.7,3.6s6.3-1.2,8.7-3.6l68.9-68.9 c4.8-4.8,4.8-12.5,0-17.3l-68.9-68.9c-4.8-4.8-12.5-4.8-17.3,0s-4.8,12.5,0,17.3l48,48H138.7c-6.8,0-12.3,5.5-12.3,12.3 C126.4,252.1,131.9,257.5,138.7,257.5z"></path> </g> </g> </g></svg>
            </a>
          </div>
      </div>
    </div>
  )
}

export default MeetExco