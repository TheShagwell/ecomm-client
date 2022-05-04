import { useEffect, useState } from "react";
import UploadProduct from "./components/Products/UploadProducts";

function App() {
  const [products, setProducts] = useState(false)

  useEffect(() => {
    getProducts()
  }, [])

  function getProducts() {
    fetch('http://localhost:8080/products').then(res => {
      return res.text()
    }).then(data => {
      setProducts(data)
    })
  }
  return (
    <div>
      {products ? products : 'There are no products here'}
      <UploadProduct />
    </div>
  );
}

export default App;
