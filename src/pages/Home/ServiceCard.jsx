import { Link } from "react-router-dom";

const ServiceCard = ({ service }) => {
  const { _id, price, img, title } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl mx-auto">
      <figure>
        <img src={img} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="text-red-600 font-bold">Price : ${price}</p>
        <div className="card-actions ">
          <Link to={`/checkout/${_id}`} className="btn btn-primary">
            Buy Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
