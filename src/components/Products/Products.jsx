import { useEffect, useState } from "react";

const Products = () => {
  const [products, setProducts] = useState(false)

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = () => {
    fetch('http://localhost:8080/products').then(res => {
      return res.text()
    }).then(data => {
      setProducts(data)
    })
  }

  return (
    <div>
      {products ? products : 'There are no products here'}
    </div>
  );
}

export default Products;
