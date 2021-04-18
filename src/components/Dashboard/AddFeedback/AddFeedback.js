// import React, { useContext } from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';
import Topbar from '../Topbar/Topbar';


const AddFeedback = () => {

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);


    // handle Add Review:
    const onSubmit = (data) => {
        const newFeedback = { ...data };
        newFeedback.email = loggedInUser.email;
        newFeedback.image = loggedInUser.email
          && loggedInUser.picture;         

        fetch('https://cryptic-escarpment-88718.herokuapp.com/addReview', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newFeedback),
        })
            .then((res) => res.json())
            .then((data) => console.log(data));
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
                    <div className='rounded my-4 mx-4'>
                        <form onSubmit={handleSubmit(onSubmit)} className='client-form'>
                            <div className='row'>
                                <div className='col-md-6 p-4'>
                                    <div className='form-group'>
                                        <input
                                            className='form-control'
                                            defaultValue=""
                                            name='name'
                                            type='text'
                                            placeholder='Your Name'
                                            ref={register({ required: true })}
                                        />
                                        {errors.name && <span className='error'>Name is required</span>}
                                    </div>
                                    <div className='form-group'>
                                        <input
                                            className='form-control'
                                            name='designation'
                                            type='text'
                                            placeholder='Company’s name, Designation'
                                            ref={register({ required: true })}
                                        />
                                        {errors.designation && (
                                            <span className='error'>Company’s name, Designation</span>
                                        )}
                                    </div>

                                    <div className='form-group'>
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

                                    <div className='text-left'>
                                        <button type='submit' className='btn btn-danger'>
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

export default AddFeedback;