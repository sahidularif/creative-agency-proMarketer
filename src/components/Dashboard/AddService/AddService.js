import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import Topbar from '../Topbar/Topbar';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
  const [serviceInfo, setServiceInfo] = useState({});
  const [file, setFile] = useState(null);
  const handleBlur = (e) => {
    const newService = { ...serviceInfo };
    newService[e.target.name] = e.target.value;
    setServiceInfo(newService);
  };

  const handleFileChange = (e) => {
    const newFile = e.target.files[0];
    setFile(newFile);
  };

  const onSubmit = () => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', serviceInfo.title);
    formData.append('description', serviceInfo.description);
    formData.append('price', serviceInfo.price);

    fetch('https://cryptic-escarpment-88718.herokuapp.com/addService', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // React hook form for validation and error message
  const { register, handleSubmit, errors } = useForm();

  return (
    <section>
      <div className="row d-block">
        <div className="col-md-12">
          <Topbar />
        </div>
      </div>
      <div className="row">
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10 border">
        <strong>Add Service</strong>
          <div className='bg-white rounded my-4 p-4 mx-4'>
            <form onSubmit={handleSubmit(onSubmit)} className='event-form'>
              <div className='row'>
                <div className='col-md-6'>
                  <div className='form-group'>
                    <label for='title'>Service Title</label>
                    <input
                      className='form-control'
                      onBlur={handleBlur}
                      name='title'
                      type='text'
                      placeholder='Event title'
                      ref={register({ required: true })}
                    />
                    {errors.title && <span className='error'>Title is required</span>}
                  </div>
                  <div className='form-group'>
                    <label for='description'>Description</label>
                    <textarea
                      className='form-control'
                      onBlur={handleBlur}
                      name='description'
                      placeholder='Description'
                      rows='5'
                      ref={register({ required: true })}
                    ></textarea>

                    {errors.description && (
                      <span className='error'>Description is required</span>
                    )}
                  </div>
                  <div className='form-group'>
                    <label for='price'>Price</label>
                    <input
                      className='form-control'
                      onBlur={handleBlur}
                      name='price'
                      type='text'
                      placeholder='$Price'
                      ref={register({ required: true })}
                    />
                    {errors.price && <span className='error'>Price is required</span>}
                  </div>
                </div>

                <div className='col-md-6'>
                  <label htmlFor='imageUpload'>Icon</label>
                  <div class='form-group'>
                    <label
                      htmlFor='imageUpload'
                      className='file-upload btn btn-outline-success btn-block w-50'
                    >
                      <FontAwesomeIcon
                        icon={faUpload}
                        className='mr-2'
                      ></FontAwesomeIcon>

                      <input
                        onChange={handleFileChange}
                        id='imageUpload'
                        name='imageUpload'
                        type='file'
                        ref={register({ required: true })}
                      />
                      {errors.imageUpload && (
                        <span className='error'>Icon is required</span>
                      )}
                    </label>
                  </div>
                </div>
              </div>
              <div className='row'>
                <div className='col-md-12'>
                  <div class='text-right'>
                    <button type='submit' className='btn btn-success'>
                      Submit
              </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddService;