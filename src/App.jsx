import { react, useEffect } from "react";
import { FaBeer } from "react-icons/fa";
import Header from "./Components/Header";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Cart from "./Components/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./layout/MainLayout"
import Signup from "./pages/Signup";
import NotFound from "./pages/NotFound";
import { fetchData } from "./features/product/ProductSlice";
import Categories from "./pages/Categories";
import Categorypage from "./pages/Categorypage";
import { useDispatch } from "react-redux";
import IndivisualProduct from "./pages/IndivisualProduct";
function App() {
  const dispatch = useDispatch();
  useEffect(() => {
      dispatch(fetchData());
    }, [dispatch]);
  return (
    <BrowserRouter>
      <MainLayout>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/categorypage/:category" element={<Categorypage/>} />
          <Route path="/product/:id" element={<IndivisualProduct />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
