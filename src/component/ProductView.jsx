import { useState } from "react";
import ProductCard from "./ProductCard";
import { useEffect } from "react";
import axios from "axios";

export default function ProductView() {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => {
        
        setProduct(res.data)
      })
      .catch((err) => {
        console.log(err)
      });
  });
  return (
    <div className=" grow grid grid-cols-2 lg:grid-cols-3 gap-4">
      {product.map((el) => (
        <ProductCard key={el.id} product={el} />
      ))}
    </div>
  );
}
