import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import { getCategoryProducts, getProducts } from "../services/ProductServices";
import ProductCard from "../components/ProductCard";
import { useParams } from "react-router-dom";
import { addItem, deleteItem } from "../redux/slices/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { IProduct } from "../interfaces/interfaces";
import { RootState } from "../redux/store";

const Products = () => {
  const { categoryTitle } = useParams();
  const handler = categoryTitle
    ? () => getCategoryProducts(categoryTitle)
    : getProducts;
  const { data: products, isLoading } = useQuery<AxiosResponse>(
    ["products", categoryTitle],
    handler
  );

  if (isLoading) {
    return <h1 className="text-center">loading...</h1>;
  }

  return (
    <>
      <h1 className="text-center">
        List of {categoryTitle ? categoryTitle : "All products"}
      </h1>

      <div className="products">
        {products?.data.map((product: IProduct) => (
          <ProductCard
            key={product.id}
            id={product.id}
            category={product.category}
            title={product.title}
            image={product.image}
            description={product.description}
            price={product.price}
            rating={product.rating}
          />
        ))}
      </div>
    </>
  );
};

export default Products;
