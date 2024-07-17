import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import MeetExcoPage from './components/MeetExcoPage/MeetExcoPage.jsx'
import NewsPage from './components/NewsPage/NewsPage.jsx'
import AboutUs from './components/AboutUs/AboutUs.jsx'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { ImOffice } from 'react-icons/im'

const Router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,

  },
  {
    path: "/meetexcopage",
    element: <MeetExcoPage/>,
  },
  {
    path: "/newspage",
    element: <NewsPage/>,
  },
  {
    path: "/backhome",
    element: <App/>,
  },
  {
    path: "/about",
    element: <AboutUs/>,
  },
  
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={Router}/>
  </React.StrictMode>,
)
