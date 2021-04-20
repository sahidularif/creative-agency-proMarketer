import React from 'react';
import { Image } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

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
                <p className="card-text text-secondary">{description}</p>
                <span className="text-warning">
                <FontAwesomeIcon className="icon active-icon" icon={faStar} />
                <FontAwesomeIcon className="icon active-icon" icon={faStar} />
                <FontAwesomeIcon className="icon active-icon" icon={faStar} />
                <FontAwesomeIcon className="icon active-icon" icon={faStar} />
                <FontAwesomeIcon className="icon active-icon" icon={faStar} />
                </span>
            </div>


        </div>
    );
};

export default TestimonalPost;