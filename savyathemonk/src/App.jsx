import { useState } from 'react'
import { BrowserRouter } from "react-router-dom";
import { Navbar, Hero, About, Donate, Contact, Footer } from './components';
import './App.css'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./index.css";

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
    <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
    <div className=''>
      <Navbar/>
      <Hero/>
      <About/>
      <Donate/>
      <Contact/>
      <Footer/>
    </div>
    </BrowserRouter>
  );
}

export default App
