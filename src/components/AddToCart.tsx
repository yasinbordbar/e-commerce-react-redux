import RemoveIcon from "@material-ui/icons/Remove";
import AddIcon from "@material-ui/icons/Add";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { IProduct } from "../interfaces/interfaces";
import { addItem, deleteItem } from "../redux/slices/cartSlice";

const AddToCart = ({ id, title, price, description }: IProduct) => {
  const dispatch = useDispatch();

  const items = useSelector((state: RootState) => state.cart.value);
  const found = items.find((element) => element.product.id === id);
  const product = { id, title, price, description };
  const handleAdd = (product: IProduct) => dispatch(addItem(product));
  const handleDelete = (product: IProduct) => dispatch(deleteItem(product));

  return (
    <>
      {found ? (
        <div className="text-center">
          <button className="mx-1" onClick={() => handleDelete(product)}>
            <RemoveIcon />
          </button>
          <span className="mx-1">{found && found.count}</span>
          <button className="mx-1" onClick={() => handleAdd(product)}>
            <AddIcon />
          </button>
        </div>
      ) : (
        <button onClick={() => handleAdd(product)}>Add to Shopping Cart</button>
      )}
    </>
  );
};

export default AddToCart;
