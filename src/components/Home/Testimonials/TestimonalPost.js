import React from 'react';
import { Image } from 'react-bootstrap';

const TestimonalPost = (props) => {
    const { designation, name, description, image} = props.feedback;
    return (
        <div className="card shadow-sm">
            <div className="card-header d-flex  align-items-center">
                <Image roundedCircle  className="mx-3"  src={image} alt="" width="60" />
                <div>
                    <h6 className="text-primary">{name}</h6>
                    <p className="m-0">{designation}</p>
                </div>
            </div>
            <div className="card-body shadow">                
                <p className="card-text text-secondary mt-2">{description}</p>
            </div>

        </div>
    );
};

export default TestimonalPost;