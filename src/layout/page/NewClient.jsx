import React from 'react';
import FormClients from '../../components/FormClients';



const NewClient = () => {
  const client={}
  return (
    <>
      <h1 className=" text-blue-900 text-4xl font-bold">New Client </h1>
      <p className="mt-3 pb-10">Enter client information</p>

      <FormClients title="Add client"  />
    </>
  );
};

export default NewClient;
