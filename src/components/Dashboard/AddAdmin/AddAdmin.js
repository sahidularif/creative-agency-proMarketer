// import React, { useContext, useEffect } from 'react';
import { useContext, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router';
import { AdminContext, UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';
// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

const AddAdmin = () => {
  // Context from app.js
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const { register, handleSubmit, errors } = useForm();

  // handle Add admin 
  const onSubmit = (data) => {
    const newAdmin = { ...data };
    console.log('new ad', newAdmin);

    fetch('http://localhost:5500/addAdmin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newAdmin),
    })
      .then((res) => res.json())
      .then((data) => {

      });
  };



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
        <strong>Add Admin</strong>
          <div className='rounded bg-white my-4 mx-4 p-4'>
            <form onSubmit={handleSubmit(onSubmit)}>
              <span><strong>Temporary admin: </strong>programminghero001@gmail.com</span><br />
              <div className='row'>

                <div className='col-md-6 d-flex'>

                  <div className='form-group mr-3 w-100'>
                    <input
                      className='form-control'
                      name='email'
                      type='email'
                      placeholder='admin@domain.com'
                      ref={register({ required: true })}
                    />
                    {errors.email && <span className='error'>Email is required</span>}
                  </div>

                  <div className='text-left'>
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

export default AddAdmin;