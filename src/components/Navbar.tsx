import ThemeToggle from "./navbar/ThemeToggle";
import ShoppingCart from "./navbar/ShoppingCart";
import CategoriesMenu from "./navbar/CategoriesMenu";
import { ToastProvider } from "react-toast-notifications";

const Navbar = () => {
  return (
    <ToastProvider placement={"top-center"}>
      <div className="navbar">
        <ShoppingCart />
        <CategoriesMenu />
        <ThemeToggle />
      </div>
    </ToastProvider>
  );
};

export default Navbar;
