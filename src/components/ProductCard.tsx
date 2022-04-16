import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { addItem, deleteItem } from "../redux/slices/cartSlice";
import { IProduct } from "../interfaces/interfaces";
import { cutText } from "../utils/cutText";

import AddToCart from "./AddToCart";

const ProductCard = ({
  id,
  category,
  title,
  image,
  description,
  price,
  rating,
}: IProduct) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleNavigate = () => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="product">
      <Link className="text-decoration-none" to={`/category/${category}`}>
        <span className="category">{category}</span>
      </Link>

      <p className="title">{title}</p>
      <div className="text-center">
        <img src={image} alt={title} />
      </div>

      <p> {cutText(description, 75) + " ..."} </p>

      <div className="row">
        <p className="price">${price}</p>
        <p>
          {rating?.rate} / 5 <span className="small">{rating?.count} vote</span>
        </p>
      </div>

      <div className="row">
        <AddToCart
          id={id}
          title={title}
          description={description}
          price={price}
        />
        <button onClick={handleNavigate}>Details</button>
      </div>
    </div>
  );
};

export default ProductCard;
