// Product.js
import React from 'react';

const Product = ({ product }) => {
  const { title, description, imgURL, details, cost, members } = product;
  return (
    <div className="flex flex-col items-center">
      <h2 className="text-2xl font-bold mt-12">{title}</h2>
      <p>{description}</p>
      <img src={imgURL} alt={title} className="max-w-full mt-4" />
      <p className="mt-4 max-w-96">{details}</p>
      <p className="text-3xl mt-2">{cost}</p>
      <p className="mt-1">{`Up to ${members} people`}</p>
      <button className="text-blue-500 bg-white border border-solid border-blue-500 px-4 py-2 mt-4 hover:text-white hover:bg-blue-500 duration-300">Learn More</button>
    </div>
  );
};

export default Product;
