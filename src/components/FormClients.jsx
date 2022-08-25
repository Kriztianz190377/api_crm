import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import Errors from './Errors';
import { renderMatches } from 'react-router-dom';

const FormClients = ({ title, client }) => {
  const navigate = useNavigate();
  const [selectRadio, setSelectRadio] = useState('');
  const [urgent, setUrgent] = useState(false);

  let newClientSchema = Yup.object().shape({
    picked: Yup.string().required('picked is a required field'),
    name: Yup.string()
      .min(3, 'The name is too short')
      .max(30, 'The name is too long')
      .required('name is a required field'),
    createdate: Yup.date().required('Date is required'),
    deliverydate: Yup.date().required('Date is required'),
    numberbox: Yup.number()
      .positive('Invalid number')
      .required('Number box is required'),
    material: Yup.string().required(),
    file: Yup.string().required('File is required'),
  });

  const handleSubmit = async (values) => {
    try {
      let response;
      if (client.id) {
        
        //edit client

        URL = `http://localhost:4000/clients/${client.id}`;
        response = await fetch(URL, {
          method: 'PUT',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json',
          },
        });
      } else {
        //New client
        URL = 'http://localhost:4000/clients';
        response = await fetch(URL, {
          method: 'POST',
          body: JSON.stringify(values),
          headers: {
            'Content-Type': 'application/json',
          },
        });
      }
      const result = await response.json();
      const { picked } = result;

      if (picked === 'removable') {
        navigate('/clients/showremovable');
      } else {
        navigate('/clients/showfixed');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      className="bg-white px-5 py-10 rounded-lg opacity-80 shadow
    w-4/5 m-auto"
    >
      <h2 className="text-gray-600 uppercase text-center text-2xl font-bold">
        {title}
      </h2>

      <Formik
        initialValues={{
          picked: client?.picked ?? '',
          name: client?.name ?? '',
          createdate: client?.createdate ?? '',
          deliverydate: client?.deliverydate ?? '',
          numberbox: client?.numberbox ?? '',
          material: client?.material ?? '',
          urgent: client?.urgent ?? '',
          file: client?.file ?? '',
          notes: client?.notes ?? '',
        }}
        enableReinitialize={true}
        onSubmit={async (values, { resetForm }) => {
          await handleSubmit(values);
          resetForm();
        }}
        validationSchema={newClientSchema}
      >
        {({ errors, touched }) => {
          return (
            <Form>
              <div
                id="my-radio-group"
                className="mb-4 w-full mt-5 m-auto  flex justify-evenly"
              >
                <div
                  className={
                    selectRadio === 'removable'
                      ? `bg-gray-300 duration-300 rounded-md pr-5`
                      : 'hover:bg-gray-300 duration-300 rounded-md pr-5'
                  }
                >
                  <label className="text-gray-800 mx-10" htmlFor="removable">
                    Removable:
                  </label>
                  <Field
                    name="picked"
                    id="removable"
                    type="radio"
                    value="removable"
                    onClick={(e) => setSelectRadio(e.target.value)}
                  />
                </div>

                <div
                  className={
                    selectRadio === 'fixed'
                      ? `bg-gray-300 duration-300 rounded-md pr-5`
                      : 'hover:bg-gray-300 duration-300 rounded-md pr-5'
                  }
                >
                  <label className="text-gray-800 mx-10" htmlFor="fixed">
                    Fixed:
                  </label>
                  <Field
                    name="picked"
                    id="fixed"
                    type="radio"
                    value="fixed"
                    onClick={(e) => setSelectRadio(e.target.value)}
                  />
                </div>
              </div>
              {errors.picked && touched.picked ? (
                <Errors>{errors.picked}</Errors>
              ) : null}

              <div className="mb-4">
                <label className="text-gray-800" htmlFor="name">
                  Name:
                </label>

                <Field
                  name="name"
                  id="name"
                  type="text"
                  placeholder="Client's Name"
                  className="w-full block rounded-lg bg-gray-300 mt-2 p-3 "
                />
                {errors.name && touched.name ? (
                  <Errors>{errors.name}</Errors>
                ) : null}
              </div>

              <div className="flex flex-wrap justify-between">
                <div className="mb-4 flex flex-col items-center">
                  <label className="text-gray-800" htmlFor="box">
                    Number Box:
                  </label>
                  <Field
                    name="numberbox"
                    id="numberbox"
                    type="number"
                    placeholder="Number Box:"
                    className=" block rounded-lg bg-gray-300 mt-2 p-3 "
                  />
                  {errors.numberbox && touched.numberbox ? (
                    <Errors>{errors.numberbox}</Errors>
                  ) : null}
                </div>
                <div className="mb-4 flex flex-col items-center">
                  <label className="text-gray-800" htmlFor="email">
                    Create Date:
                  </label>
                  <Field
                    name="createdate"
                    id="createdate"
                    type="date"
                    className=" block rounded-lg bg-gray-300 mt-2 p-3 "
                  />
                  {errors.createdate && touched.createdate ? (
                    <Errors>{errors.createdate}</Errors>
                  ) : null}
                </div>
                <div className="mb-4 flex flex-col items-center">
                  <label className="text-gray-800" htmlFor="email">
                    Delivery Date:
                  </label>
                  <Field
                    name="deliverydate"
                    id="deliverydate"
                    type="date"
                    placeholder="Delivery Date"
                    className=" block rounded-lg bg-gray-300 mt-2 p-3 "
                  />
                  {errors.deliverydate && touched.deliverydate ? (
                    <Errors>{errors.deliverydate}</Errors>
                  ) : null}
                </div>
              </div>

              <div id="my-radio-group" className="text-center">
                Material
                <div>
                  <div
                    role="group"
                    aria-labelledby="my-radio-group"
                    className="w-full flex flex-col justify-evenly rounded-lg bg-gray-300 mt-2 p-3 mb-5"
                  >
                    <div className="w-full flex justify-evenly ">
                      <label className="capitalize ">
                        <Field
                          className=" mx-3"
                          type="radio"
                          name="material"
                          value="flexible"
                        />
                        flexible
                      </label>
                      <label className="capitalize">
                        <Field
                          className=" mx-3"
                          type="radio"
                          name="material"
                          value=" hard"
                        />
                        hard
                      </label>
                    </div>

                    {errors.material && touched.material ? (
                      <Errors>{errors.material}</Errors>
                    ) : null}
                  </div>
                  <label
                    className={
                      urgent === true
                        ? `bg-gray-300 duration-300 rounded-md pr-5 `
                        : 'hover:bg-gray-300 duration-300 rounded-md pr-5 '
                    }
                  >
                    <Field
                      className="mx-3"
                      type="checkbox"
                      name="urgent"
                      value="false"
                      checked={urgent}
                      onClick={(e) => setUrgent(e.target.checked)}
                    />
                    urgent
                  </label>
                </div>
              </div>

              <div className="mb-4 ">
                <label className="text-gray-800" htmlFor="notes">
                  File:
                </label>
                <Field
                  name="file"
                  id="file"
                  type="file"
                  value=""
                  title="cambiar archivo"
                  className="w-full justify-center rounded-lg bg-gray-300 mt-2 p-3  "
                />
                {errors.file && touched.file ? (
                  <Errors>{errors.file}</Errors>
                ) : null}
              </div>
              <div className="mb-4">
                <label className="text-gray-800" htmlFor="notes">
                  Notes:
                </label>
                <Field
                  name="notes"
                  as="textarea"
                  id="notes"
                  type="notes"
                  className="w-full block rounded-lg bg-gray-300 mt-2 p-3 h-20 "
                />
                {errors.textarea && touched.textarea ? (
                  <Errors>{errors.textarea}</Errors>
                ) : null}
              </div>

              <input
                className="w-full bg-blue-800 hover:bg-blue-700 duration-300 
                rounded-md p-3 mt-5 
                text-xl font-bold text-white"
                type="submit"
                value={title}
              />
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

FormClients.defaultProps = {
  client: {},
};

export default FormClients;
