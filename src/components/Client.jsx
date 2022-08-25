import React from 'react';
import {useNavigate} from 'react-router-dom'

const Client = ({ client, handleDelete }) => {
  const navigate = useNavigate();

  const {
    name,
    numberbox,
    createdate,
    deliverydate,
    material,
    urgent,
    file,
    notes,
    id,
  } = client;
  return (
    <tr className="text-sm text-center">
      <td className="p-3 border-2">{name}</td>
      <td className="p-3 border-2">{numberbox}</td>
      <td className="p-3 border-2 text-left">
        <p>
          <span className="text-base uppercase font-bold">Create: </span>
          {createdate}
        </p>
        <p>
          <span className="text-base uppercase font-bold">Delivery:</span>{' '}
          {deliverydate}
        </p>
      </td>

      <td className="p-3 border-2  uppercase">{material}</td>
      <td
        className={
          urgent
            ? `p-3 border-2  uppercase text-red-900 font-bold`
            : 'p-3 border-2  uppercase '
        }
      >
        {urgent ? 'Urgent' : 'Pas Urgent'}
      </td>
      <td className="p-3 border-2 w-[12.5%] ">{file}</td>
      <td className="p-3 border-2  ">{notes}</td>
      <td className="p-3 border-2  ">
        <button
          type="button"
          className="w-full  rounded-sm uppercase font-bold my-1 px-3
        bg-lime-100 hover:bg-lime-200 duration-300 text-black block"
          onClick={() => navigate(`/clients/${id}`)}
        >
          Show
        </button>
        <button
          type="button"
          className="w-full m rounded-sm uppercase my-1 px-3 font-bold  
        bg-blue-600 hover:bg-blue-700 duration-300 text-white block "
          onClick={() => navigate(`/clients/edit/${id}`)}
        >
          Edit
        </button>
        <button
          type="button"
          className="w-full rounded-sm uppercase font-bold px-3 my-1
        bg-red-600 hover:bg-red-700 duration-300 text-white block "
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default Client;
