import React from 'react';

const TestimonalPost = (props) => {
    const { title, description, author, authorImg, date } = props.post;
    return (
        <div className="card shadow-sm">
            <div className="card-header d-flex  align-items-center">
                <img className="mx-3" src={authorImg} alt="" width="60" />
                <div>
                    <h6 className="text-primary">{author}</h6>
                    <p className="m-0">{date}</p>
                </div>
            </div>
            <div className="card-body">
                
                <p className="card-text text-secondary mt-2">{description}</p>
            </div>

        </div>
    );
};

export default TestimonalPost;