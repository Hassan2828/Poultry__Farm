import React, { useEffect, useState } from "react";
import BannerChickens_final from './assets/BannerChickens_final.jpg';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import image1 from './assets/images1.jpg'
import image2 from './assets/images2.jpg'; 
import image3 from './assets/images3.jpg';
import image4 from './assets/images4.jpg';
import image5 from './assets/images5.jpg';
import Header from "./components/Header/Header.js";
import Footer from './components/Footer/Footer.js'
import Home from './pages/Home/Home.js'
import Login from './pages/Login/Login.js'
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import Eggs from "./pages/Eggs/Eggs.js"
import Rooster from "./pages/Rooster/Rooster.js";
import CategorySlider from "./components/CategorySlider/CategorySlider.js";
import Chick from './pages/Chick/Chick.js'
import Poultry from "./pages/Poultry/Poultry.js";
import Cock from "./pages/Cock/Cock.js";
import Cart from "./pages/Cart/Cart.js";
import SingleProduct from "./pages/single product/SingleProduct.js";
import Register from "./pages/Register/Register.js";
import './responsive.css';

const App = () => {
  const slides = [
    {src : 'image1.jpg', buttonColor : 'red', path : '/about'},
    {src : 'image2.jpg', buttonColor : 'blue', path : '/contact'},
    {src : 'image3.jpg', buttonColor : 'green', path : '/eggs'}
  ];

  const imageArray = [BannerChickens_final, image2, image3, image4, image5];
  const location = useLocation();
  const navigate = useNavigate();
  const [show, setShow] = useState(true);

//   useEffect(()=>{
//     console.log('Paht name', location.pathname);
//     if(location.pathname.toLowerCase() == '/login' || location.pathname.toLowerCase() == ''){
//       setShow(false);
//     }
//     else
//     {
//       setShow(true);
//     }
//   },[location])

  useEffect(()=>{
    console.log("hello", show);
  },[show])

//   let user = localStorage.getItem("user");
//   useEffect(()=>{
//     console.log("App.js", user);
//     if(!user){
//       navigate('/login');
//     }else{
//       console.log("User Login");
//     }
//   },[])
// if(user){
return(
  <>
  <Header />
  <ToastContainer />
   <CategorySlider />z

  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register />} />
    <Route path="/carts" element={<Cart />} />
    <Route path="/eggs" element={<Eggs />} />
    <Route path="/chick" element={<Chick />} />
    <Route path="/poultry" element={<Poultry />} />
    <Route path="/chick" element={<Chick />} />
    <Route path="/cock" element={<Cock />} />
    <Route path="/rooster" element={<Rooster />} />
    <Route path="/rooster/:id" element={<SingleProduct />} />
  </Routes>
<Footer />
  </>
)
}
// else{
//   return(
//     <>
//     <Routes>
//       <Route path="/login" element={<Login />} />
//       <Route path="/register" element={<Register />} />
//     </Routes>
//     </>
//   )
// }
// }
export default App;