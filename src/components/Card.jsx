import { FcLike } from "react-icons/fc";
import { IoBagAddOutline } from "react-icons/io5";

function Card({ product }) {
  const { availabilityStatus, description, price, discountPercentage, images } =
    product;

  return (
    <div className="card bg-base-300 w-full shadow-lg relative">
      <figure className="w-full">
        <img className="w-[220px] h-[250px]" src={images[0]} alt="image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{availabilityStatus}</h2>
        <p className="w-[80%]">{description}</p>
        <h6>{price - (price % discountPercentage)}$</h6>
        <div className="card-actions justify-end">
          <button className="btn bg-transparent">{<IoBagAddOutline />}</button>
        </div>
      </div>

      <button className="btn btn-circle bg-transparent absolute right-2 top-2">
        <FcLike className="text-2xl" />
      </button>
    </div>
  );
}

export default Card;
