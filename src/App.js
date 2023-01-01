import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "./store/theme/themeActions";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import { Route, Routes } from "react-router-dom";
import Start from "./components/Start/Start";

function App() {
  const theme = useSelector((strore) => strore.theme.theme);
  const dispatch = useDispatch();
  useEffect(() => {
    document.body.setAttribute("theme", theme);
  });
  return (
    <div className="Wrapper" onLoad={localStorage.getItem("theme")&&(()=>dispatch(setTheme(localStorage.getItem("theme"))))}>
      <Header />
      <Routes>
        <Route path="/" element={<Start/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
