import React from 'react';

const UserBookingList = (props) => {

  console.log(props.order);
  const { _id, title, description, img, status, image } = props.order;

  return (
    <section>
      <div className="row">
        <div className="col-md-10 border">
          <div className='col-md-6 rounded mb-3'>
            <div className='card h-100'>
              <div className='card-body p-4'>
                <div className='row'>
                    <div className='col-md-12 d-flex justify-content-between'>
                        <div className='mb-3 mb-md-0'>

                          {image ? <img style={{ height: '60px' }} src={`data:image/png;base64,${image.img}`} alt="" />
                            :
                            <img className='img-fluid w-25' src={img} alt={title} />

                          }

                        </div>
                      <div>
                      <div className='mb-0'>
                        <button
                          className={
                            status == 'Pending'
                              ? 'status-btn btn btn-sm btn-danger'
                              : status == 'Done'
                                ? 'status-btn btn btn-sm btn-success'
                                : 'status-btn btn btn-sm btn-warning'
                          }
                        >
                          {status}
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className='col-md-12'>
                    <div className='d-flex justify-content-between mt-2'>
                      <div>
                        <h5>{title}</h5>
                        <p className='mb-3'>{description}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UserBookingList;