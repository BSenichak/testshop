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
  },[theme]);
  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: "",
        autoDisplay: false
      },
      "google_translate_element"
    );
  };
  useEffect(() => {
    var d = new Date();
    d.setTime(d.getTime() + (60*60*1000));
    var expires = `expires=${d.toUTCString()}`;
    document.cookie = `SameSite=Secure; ${expires}`;
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);
    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);
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
