import { FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";
const Service = ({ service }) => {
    const { _id, service_id, title, img, price, description } = service;
    return (
        <div className="card w-96 bg-gray-100 mt-10 border shadow-xl p-4">
            <figure><img className="rounded-lg" src={img} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
               <div className="flex justify-between items-center text-red-500">
               <div><p className="card-title text-xl ">Price : {price}$</p></div>
               <div>
                <Link to={`/checkout/${_id}`}>
                <button className="btn btn-secondary">Book Now<FaArrowRight></FaArrowRight></button>
                </Link>
               </div>
               </div>
            </div>
        </div>
    );
};

export default Service;