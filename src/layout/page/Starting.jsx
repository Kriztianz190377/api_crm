import React from 'react'
import { Link } from 'react-router-dom';

const Starting = () => {
  return (
    <div className="flex flex-col justify-center items-center text-blue-800 h-screen capitalize ">
      <h2 className="text-4xl font-extrabold mb-10">welcome user</h2>
      <p className="font-bold ">click on your respective department</p>

      <Link
        to="/clients"
        className="w-[10%] mt-10 text-center p-2 uppercase my-1 font-bold  
        bg-blue-600 rounded-md hover:bg-blue-700 duration-300 text-white block "
      >
       Star
      </Link>
    </div>
  );
}

export default Starting