import React from 'react';
import { Outlet } from 'react-router-dom';

const LogIn = () => {
  return (
    <>     
      <div
        className="img w-full p-10 overflow-scroll
        md:h-full      
      "
      >
        <Outlet />
      </div>
    </>
  );
};

export default LogIn;
