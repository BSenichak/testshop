import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "./store/theme/themeActions";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  const theme = useSelector((strore) => strore.theme.theme);
  const dispatch = useDispatch();
  useEffect(() => {
    document.body.setAttribute("theme", theme);
  });
  return (
    <div className="Wrapper" onLoad={localStorage.getItem("theme")&&(()=>dispatch(setTheme(localStorage.getItem("theme"))))}>
      <Header />
      <main></main>
      <Footer />
    </div>
  );
}

export default App;
