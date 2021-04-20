import React from 'react';

const Category = (props) => {
    const {img, title, description} = props.category;
    return (
        <div className="col-md-4 text-center">

        <img src={img} className="w-25 d-inline-block p img-fluid m-0" alt="name" />
        <h5>{title}</h5>
        <p>
          {description}
        </p>
      </div>
    );
};

export default Category;