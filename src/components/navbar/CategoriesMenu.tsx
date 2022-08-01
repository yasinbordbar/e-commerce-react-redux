import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { AxiosResponse } from "axios";
import { getCategories } from "../../services/ProductServices";

const CategoriesMenu = () => {
  const { data: categories } = useQuery<AxiosResponse>(
    ["categories"],
    getCategories
  );

  return (
    <>
      <Link className="text-decoration-none" to={`/`}>
        <p className="menu-item">All products</p>
      </Link>
      {categories?.data.map((category: string, index: number) => (
        <Link
          key={index}
          className="text-decoration-none"
          to={`/category/${category}`}
        >
          <p className="menu-item">{category}</p>
        </Link>
      ))}
    </>
  );
};

export default CategoriesMenu;
