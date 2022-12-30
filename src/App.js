import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

function App() {
  const theme = useSelector(strore=>strore.theme.theme)
  useEffect(()=>{
    document.body.setAttribute("theme", theme)
  })
  return (
    <div className="Wrapper">
      <Header/>
      <main></main>
      <Footer/>
    </div>
  );
}

export default App;
