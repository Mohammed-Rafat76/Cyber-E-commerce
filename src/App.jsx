import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainlayOut from "./MainlayOut";
import ProductPage from "./pages/ProductPage";
import { Toaster } from "react-hot-toast";
import CartPage from "./pages/CartPage";

export default function Hello() {
  return (
    <div className="w-full bg-white text-black ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainlayOut />}>
            <Route index element={<ProductPage />} />
            <Route path="product-details" element={<h1>Product Details</h1>} />
            <Route path="cart" element={<h1><CartPage/></h1>} />
            <Route path="About" element={<h1>About</h1>} />
            <Route path="Contact-Us" element={<h1>Contact Us</h1>} />
            <Route path="Blog" element={<h1>Blog</h1>} />
          </Route>
          <Route path="*" element={<h1>404 error</h1>} />
          <Route path="/login" element={<h1>Login Page</h1>} />
          <Route path="/register" element={<h1>Register Page</h1>} />
        </Routes>
      </BrowserRouter>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}
