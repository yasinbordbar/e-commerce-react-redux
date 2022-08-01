import { Link, useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import { getProduct } from "../services/ProductServices";
import AddToCart from "../components/AddToCart";

const EachProduct = () => {
  const navigate = useNavigate();
  const { productId } = useParams();

  const { data: product, isLoading } = useQuery<AxiosResponse>(
    ["product"],
    () => getProduct(productId),
    { cacheTime: 0 }
  );

  const handleNavigate = () => navigate("/");

  if (isLoading) {
    return <h1 className="text-center">loading...</h1>;
  }

  return (
    <div>
      <button className="back-button" onClick={handleNavigate}>
        Back to products
      </button>

      <div className="product-details">
        <AddToCart
          id={product?.data.id}
          title={product?.data.title}
          price={product?.data.price}
          description={product?.data.description}
        />

        <p className="bold">{product?.data.title}</p>
        <div className="text-center">
          <img src={product?.data.image} alt={product?.data.title} />
        </div>
        <p className="description">{product?.data.description}</p>

        <div className="row">
          <Link
            className="text-decoration-none"
            to={`/category/${product?.data.category}`}
          >
            <span className="product-category">{product?.data.category}</span>
          </Link>
          <p className="bold">${product?.data.price}</p>

          <p>
            {product?.data.rating.rate} / 5{" "}
            <span className="small">{product?.data.rating.count} vote</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default EachProduct;
