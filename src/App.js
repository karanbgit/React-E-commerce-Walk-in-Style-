import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import './assets/css/style.css'
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import About from './components/About';
import Women from './components/Women';
import Home from './components/Home';
import Men from './components/Men';
import Contact from './components/Contact';
import Cart from './components/Cart';
import AllProducts from './components/AllProducts';
import ProductDetail from './components/ProductDetail';
import CheckOutPage from './components/CheckOutPage';
import AdminLogin from './components/AdminLogin';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import AddProducts from './components/AddProducts';
import LogoutPage from './components/LogoutPage';

function App() {
  return (
    <div className="App">

      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/productdetail"} element={<ProductDetail />}></Route>
          <Route path={"/men"} element={<Men />}></Route>
          <Route path={"/women"} element={<Women />}></Route>
          <Route path={"/allproducts"} element={<AllProducts />}></Route>
          <Route path={"/about"} element={<About />}></Route>
          <Route path={"/contact"} element={<Contact />}></Route>
          <Route path={"/cart"} element={<Cart />}></Route>
          <Route path={"/checkoutpage"} element={<CheckOutPage />}></Route>
          <Route path={"/login"} element={<AdminLogin />}></Route>


          <Route path={"/admin"} element={<Sidebar />}>
            <Route index element={<Dashboard />} />
            <Route path={"/admin/products"} element={<Products />} />
            <Route path={"/admin/addproducts"} element={<AddProducts />} />
            <Route path={"/admin/logout"} element={<LogoutPage />} />

          </Route>
        </Routes>
        <Footer />
      </BrowserRouter>


    </div>
  );
}

export default App;
