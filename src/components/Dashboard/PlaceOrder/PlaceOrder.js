import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory, useParams } from 'react-router-dom';
import Topbar from '../Topbar/Topbar';
import Sidebar from '../Sidebar/Sidebar';
import { UserContext } from '../../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';
import { processOrder } from '../../../utilities/databaseManager';


const PlaceOrder = () => {

  const { _id } = useParams();
  const [serviceData, setServiceData] = useState([]);
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [orderData, setOrderData] = useState(null);


  // Find user clicked service from Api.
  useEffect(() => {
    fetch(`http://localhost:5500/services/${_id}`)
      .then((res) => res.json())
      .then((data) => setServiceData(data));
  }, [_id]);

  const { register, handleSubmit, errors } = useForm();

  const onSubmit = data => {
    setOrderData(data);
  };
  let history = useHistory();
  function handleUserService() {
    history.push('/bookingList');
  }
  const handlePaymentSuccess = paymentId => {

    const newService = { ...orderData };
    newService.paymentId = paymentId;
    newService.orderTime = new Date();
    newService.status = 'Pending';

    fetch('http://localhost:5500/placeOrder', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newService)
    })
      .then(res => res.json())
      .then(data => {
        if (data) {
          processOrder();
          handleUserService();
          // alert('your order placed successfully');
        }
      })
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
          <div className='rounded my-4 mx-4'>
            <form onSubmit={handleSubmit(onSubmit)} className='client-form'>
              <div className='row'>
                <div className='col-md-6 p-4'>
                  <div className='form-group'>
                    <label for='name'>Your name</label>
                    <input
                      className='form-control'
                      defaultValue={loggedInUser.name}
                      name='name'
                      type='text'
                      placeholder='Your Name'
                      ref={register({ required: true })}
                    />
                    {errors.name && <span className='error'>Name is required</span>}
                  </div>
                  <div className='form-group'>
                    <label for='email'>Your email</label>
                    <input
                      className='form-control'
                      name='email'
                      type='text'
                      defaultValue={loggedInUser.email}
                      ref={register({ required: true })}
                    />
                    {errors.email && <span className='error'>Email is required</span>}
                  </div>
                  <div className='form-group'>
                    <label for='title'>Service title</label>
                    <input
                      className='form-control'
                      name='title'
                      type='text'
                      defaultValue={serviceData.title}
                      ref={register({ required: true })}
                    />
                    {errors.title && <span className='error'>Title is required</span>}
                  </div>
                  <div className='form-group'>
                    <label for='name'>Order description</label>
                    <textarea
                      className='form-control'
                      name='description'
                      placeholder='Description'
                      rows='4'
                      ref={register({ required: true })}
                    ></textarea>

                    {errors.description && (
                      <span className='error'>Description is required</span>
                    )}
                  </div>

                  <div className='row'>
                    <div className='col-md-6'>
                      <div className='form-group'>
                        <label for='name'>Your service charged will be:</label>
                        <input
                          className='form-control'
                          name='price'
                          type='text'
                          defaultValue={serviceData.price}
                          ref={register({ required: true })}
                        />
                        {errors.price && (
                          <span className='error'>Price is required</span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className='text-left'>
                    <button type='submit' className='btn btn-danger'>
                      Pay
                    </button>
                  </div>

                </div>
              </div>

            </form>
          </div>
          {/* Stripe Payment */}
          <div className="row">
            <div className="col-md-6">
              <h5>Card information:</h5>
              <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaceOrder;