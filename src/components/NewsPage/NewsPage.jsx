import React from 'react' /* when we clicked the news section in home page, open news page */
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const NewsPage = () => {
  return (
    <div >
        <Navbar/>
        <h1 className=' flex justify-center py-[100px]'>News Page</h1>
        <Footer/>
    </div>
  )
}

export default NewsPage