import React from 'react'

const Errors = ({children}) => {
  return (
    <div className="text-center rounded-md my-4 bg-red-600 p-3 text-white font-bold uppercase ">
      *** {children} ***
    </div>
  );
}

export default Errors