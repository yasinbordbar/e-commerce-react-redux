import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/slices/themeSlice";
import { RootState } from "../../redux/store";
import DarkModeToggle from "react-dark-mode-toggle";

const ThemeToggle = () => {
  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  return (
    <>
      <DarkModeToggle
        className="toggle"
        onChange={() => dispatch(toggleTheme())}
        checked={theme.darkTheme}
        size={80}
        speed={2}
      />
    </>
  );
};

export default ThemeToggle;
