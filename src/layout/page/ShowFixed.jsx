import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Client from '../../components/Client';

const ShowFixed = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    const getRemovableCl = async () => {
      try {
        URL = `${import.meta.env.VITE_API_URL}/clients`;
        const response = await fetch(URL);
        const result = await response.json();
        const removable = result.filter(
          (removableClients) => removableClients.picked === 'fixed'
        );
        setClients(removable);
      } catch (error) {
        console.log(error);
      }
    };
    getRemovableCl();
  }, []);
  const handleDelete = async (id) => {
    const confirmation = confirm('Do you want to delete this client?');

    if (confirmation) {
      try {
        URL = `${import.meta.env.VITE_API_URL}/${id}`;
        const response = await fetch(URL, {
          method: 'DELETE',
        });
        await response.json();

        const arrayClients = clients.filter((client) => client.id !== id);

        setClients(arrayClients);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <>
      <h1 className=" text-blue-900 text-4xl font-bold">
        Client Fixed Prosthesis
      </h1>
      <p className="mt-3 pb-10">Manage your clients</p>
      <Link
        to="/clients"
        className="w-[10%] text-center p-2 uppercase my-1 font-bold  
        bg-blue-600 rounded-md hover:bg-blue-700 duration-300 text-white block "
      >
        Back Star
      </Link>

      <table className="w-full mt-5 table-auto shadow bg-white opacity-80">
        <thead className="bg-lime-100">
          <tr>
            <th className="border-r-2 border-white text-xs  w-1/9 p-2">Name</th>
            <th className="border-r-2 border-white text-xs  w-1/9 p-2">
              Number Box
            </th>
            <th className="border-r-2 border-white text-xs  w-1/9 p-2">
              Create date
            </th>

            <th className="border-r-2 border-white text-xs  w-1/9 p-2">
              Material
            </th>
            <th className="border-r-2 border-white text-xs  w-1/9 p-2">
              Urgent
            </th>

            <th className="border-r-2 border-white text-xs  w-1/9 p-2">File</th>
            <th className="border-r-2 border-white text-xs  w-1/9 p-2">
              Notes
            </th>
            <th className="border-r-2 border-white text-xs  w-1/9 p-2">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {clients.map(client => (
            <Client
              key={client.id}
              client={client}
              handleDelete={handleDelete}
            />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default ShowFixed;
