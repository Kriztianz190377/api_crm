import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FormClients from '../../components/FormClients';

const EditClient = () => {
  const [client, setClient] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(!loading);

    const getClientAPI = async () => {
      try {
        URL = `http://localhost:4000/clients/${id}`;
        const response = await fetch(URL);
        const result = await response.json();
        setClient(result);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    getClientAPI();
  }, []);
  console.log(client?.name);
  return (
    <>
      <h1 className=" text-blue-900 text-4xl font-bold">Edit Client </h1>
      <p className="mt-3 pb-10">Use this form to modify client</p>

      {client?.name ? (
        <FormClients title="Edit client" client={client} />
      ) : (
        <div className="flex justify-center items-center h-[60%]">
          <p className="text-4xl  text-blue-800 p-5 rounded-md
           font-bold bg-red-400">Invalid client id </p>
        </div>
      )}
    </>
  );
};

export default EditClient;
