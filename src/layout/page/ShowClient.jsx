import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Spinners from '../../components/spinner/Spinners';

const ShowClient = () => {
  const [client, setClient] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    setLoading(!loading);

    const getClientAPI = async () => {
      try {
        URL = `${import.meta.env.VITE_API_URL}/clients/${id}`;
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

  const {
    picked,
    name,
    createdate,
    deliverydate,
    numberbox,
    material,
    urgent,
    file,
    notes,
  } = client;

  return loading ? (
    <Spinners />
  ) : Object.keys(client).length === 0 ? (
    <p>No hay resultados</p>
  ) : (
    <div>
      <h2 className=" text-blue-900 text-4xl font-bold">
        Client: <span className="uppercase block mt-5">{name}</span>
      </h2>
      <p className="mt-3 pb-10">Information</p>

      <p className=" my-3 capitalize text-2xl">
        <span className="text-3xl uppercase font-bold  "> create date : </span>
        {createdate}
      </p>
      <p className=" my-3 capitalize text-2xl">
        <span className="text-3xl uppercase font-bold  "> delivery date: </span>{' '}
        {deliverydate}
      </p>
      <p className=" my-3 capitalize text-2xl">
        <span className="text-3xl uppercase font-bold  "> number box : </span>
        {numberbox}
      </p>
      <p className=" my-3 capitalize text-2xl">
        <span className="text-3xl uppercase font-bold  "> material : </span>
        {material}
      </p>
      <p className=" my-3 capitalize text-2xl">
        <span className="text-3xl uppercase font-bold  ">urgent :</span>
        {urgent ? ' Urgent' : ' Pas Urgent'}
      </p>
      <p className=" my-3 capitalize text-2xl">
        <span className="text-3xl uppercase font-bold  "> file : </span>
        {file}
      </p>
      {notes && (
        <p className=" my-3 capitalize text-2xl">
          <span className="text-3xl uppercase font-bold  "> notes : </span>
          {notes}
        </p>
      )}

      <p className=" my-3 capitalize text-2xl">
        <span className="text-3xl uppercase font-bold  "> department : </span>
        {picked}
      </p>
      <div className="flex justify-evenly">
        <Link
          to="/clients"
          className="w-[20%] text-center p-2 uppercase my-10 font-bold  
        bg-blue-600 rounded-md hover:bg-blue-700 duration-300 text-white block "
        >
          Back Star
        </Link>

        {picked === 'removable' ? (
          <Link
            to="/clients/showremovable"
            className="w-[20%] text-center p-2 uppercase my-10 font-bold  
        bg-blue-600 rounded-md hover:bg-blue-700 duration-300 text-white block "
          >
            removable -- prosthesis
          </Link>
        ) : (
          <Link
            to="/clients/showfixed"
            className="w-[20%] text-center p-2 uppercase my-10 font-bold  
        bg-blue-600 rounded-md hover:bg-blue-700 duration-300 text-white block "
          >
            fixed -- prosthesis
          </Link>
        )}
      </div>
    </div>
  );
};

export default ShowClient;
