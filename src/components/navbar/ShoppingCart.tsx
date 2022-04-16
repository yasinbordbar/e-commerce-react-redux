import { RootState } from "../../redux/store";
import { useDispatch, useSelector } from "react-redux";
import { useToasts } from "react-toast-notifications";
import { addItem, deleteItem, resetCart } from "../../redux/slices/cartSlice";
import { useState } from "react";
import Modal from "react-modal";
import { ICartItem, IProduct } from "../../interfaces/interfaces";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";

function App() {
  const { addToast } = useToasts();
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) => state.cart.value);
  const count = items.reduce((a: number, b: ICartItem) => a + b.count, 0);

  const handleShowModal = () => {
    if (count > 0) {
      openModal();
    }
  };

  const handleBuy = () => {
    addToast("Thank you for your purchase!", { appearance: "success" });
    dispatch(resetCart());
    closeModal();
  };

  const handleDelete = (item: IProduct) => {
    dispatch(deleteItem(item));
    if (count === 1) {
      closeModal();
    }
  };

  const handleAdd = (item: IProduct) => {
    dispatch(addItem(item));
  };

  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      minWidth: "500px",
      width: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "1px solid goldenrod",
      padding: "30px",
      boxShadow: "1px 2px #e3e1e1",
      borderRadius: "8px",
    },
  };

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="shopping-cart">
      <button onClick={handleShowModal}>
        <ShoppingCartIcon />
        <span className="counter bold">{count}</span>
      </button>

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        ariaHideApp={false}
      >
        <h2 className="text-center">Are you sure to buy?</h2>
        <div className="mt-5">
          {" "}
          {items.map((item: ICartItem, index: number) => (
            <div key={item.product.id}>
              <p className="font-18">
                {index + 1}- {item.product.title}{" "}
                <span className="bold">(*{item.count})</span>{" "}
              </p>

              <div className="text-center">
                <button
                  className="mx-1"
                  onClick={() => handleDelete(item.product)}
                >
                  <RemoveIcon />
                </button>
                <button
                  className="mx-1"
                  onClick={() => handleAdd(item.product)}
                >
                  <AddIcon />
                </button>

                {!(index === items.length - 1) && <hr />}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-5">
          <button className="font-20" onClick={handleBuy}>
            Yes, Buy All!
          </button>
        </div>
      </Modal>
    </div>
  );
}

export default App;
