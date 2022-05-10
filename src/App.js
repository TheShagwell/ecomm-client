import { BrowserRouter as BrowserRouter, Routes, Route, } from "react-router-dom";
import { Home } from "./components/Dashboard";
import { Products, UploadProduct } from "./components/Products";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/products/add" element={<UploadProduct />} />
        <Route exact path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>

  );
}

export default App;
