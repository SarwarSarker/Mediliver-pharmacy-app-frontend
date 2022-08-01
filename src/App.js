import { useSelector } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import OrderSuccess from "./components/OrderSuccess";
import PlaceOrder from "./components/PlaceOrder";
import PrivateRoute from "./components/PrivateRoute";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductDetail from "./pages/ProductDetail";
import Register from "./pages/Register";

function App() {
  const { user } = useSelector((state) => state.auth);

  return (
    <>
      <BrowserRouter>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="products/:id" element={<ProductDetail />} />
          <Route path="cart" element={<Cart />} />
          <Route path="products" element={<Product />} />
          <Route
            path="checkout"
            element={
              <PrivateRoute user={user}>
                <Checkout />
              </PrivateRoute>
            }
          />
          <Route
            path="placeOrder"
            element={
              <PrivateRoute user={user}>
                <PlaceOrder />
              </PrivateRoute>
            }
          />
          <Route
            path="orderSuccess"
            element={
              <PrivateRoute user={user}>
                <OrderSuccess />
              </PrivateRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
