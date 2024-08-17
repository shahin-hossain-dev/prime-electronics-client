import React from "react";
import moment from "moment";

const ProductCard = ({ product }) => {
  // console.log(product);
  const { img, name, description, price, dateAndTime } = product;

  return (
    <div className="border p-4 border-slate-100">
      <div className="card card-compact rounded-md bg-base-100 hover:shadow-xl hover:scale-110 duration-300">
        <figure>
          <img src={img} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-secondary">{name}</h2>
          <p className="text-xl font-medium text-primary">Price: ${price}</p>
          <p>Pub: {moment(dateAndTime).format("DD-MM-YYYY, h:mm a")}</p>
          <div className="card-actions justify-end mt-auto">
            <button className="btn btn-primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
