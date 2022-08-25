import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import LOGO from '../assets/TechAlliage.gif';


const Layout = () => {

 const location=useLocation();
 const URLPresent=location.pathname

  return (
    <div
      className="min-h-screen 
    md:flex "
    >
      <div
        className="bg-lime-100  
         md:w-4/12
        lg:w-2/12
      "
      >
        <div
          className="flex justify-evenly items-center pt-5
        md:flex-col 
        "
        >
          <img
            className="w-[20%]  
          lg:w-[50%] 
          md:w-[80%] md:m-auto"
            src={LOGO}
            alt="/"
            sizes=""
            srcSet=""
          />
          <div
            className="text-2xl 
          md:pt-10 md:text-3xl
          text-center text-blue-800 font-bold
          "
          >
            Management <span className="md:block "> Clients</span>
          </div>
        </div>

        <nav className="md:pt-20 md:px-10">
          <Link
            className={`${
              URLPresent === '/clients/'
                ? 'text-blue-500'
                : 'text-blue-800'
            }
            block md:pt-10 text-xl font-bold uppercase hover:text-blue-500 duration-300`}
            to="/clients"
          >
            New Client
          </Link>
          <Link
            className={`${
              URLPresent === '/clients/showremovable'
                ? 'text-blue-500'
                : 'text-blue-800'
            }
            block md:pt-10 text-xl font-bold uppercase hover:text-blue-500 duration-300`}
            to="/clients/showremovable"
          >
            removable p.
          </Link>

          <Link
            className={`${
              URLPresent === '/clients/showfixed'
                ? 'text-blue-500'
                : 'text-blue-800'
            }
            block md:pt-10 text-xl font-bold uppercase hover:text-blue-500 duration-300`}
            to="/clients/showfixed"
          >
            fixed p.
          </Link>
          <Link
            className={`${
              URLPresent === '/clients/machining'
                ? 'text-blue-500'
                : 'text-blue-800'
            }
            block md:pt-10 text-xl font-bold uppercase hover:text-blue-500 duration-300`}
            to="/clients/machining"
          >
            machining
          </Link>
        </nav>
      </div>

      <div
        className="img p-10 overflow-scroll
       md:w-8/12 md:h-screen
      lg:w-10/12
      "
      >
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
