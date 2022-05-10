import { BrowserRouter as BrowserRouter, Routes, Route, } from "react-router-dom";
import { Home } from "./components/Dashboard";
import { Products, UploadProduct } from "./components/Products";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products/add" element={<UploadProduct />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
