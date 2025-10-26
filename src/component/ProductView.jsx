import { useState } from "react";
import ProductCard from "./ProductCard";
import { useEffect } from "react";
import axios from "axios";
import { domain, selectCats } from "../store/index";
import Pagination from "./Pagination";
export default function ProductView() {
  const [product, setProduct] = useState([]);
  const { value } = selectCats();
  const [view, setView] = useState([]);
  useEffect(() => {
    let endPoint = "/api/products?populate=*";
    let url = domain + endPoint;
    axios
      .get(url)
      .then((res) => {
        setProduct(res.data.data);
        setView(res.data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  useEffect(() => {
    if (value) {
      let endPoint = `/api/categories/${value.documentId}`;
      let url = domain + endPoint;
      axios
        .get(url, {
          params: {
            populate: {
              products: {
                populate: "*",
              },
            },
          },
        })
        .then((res) => {
          // setProduct(res.data.data)
          setView(res.data.data.products);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setView(product);
    }
  }, [value]);
  return (
    <div className="w-full">
      <h1 className="text-[#6C6C6C] mb-[24px]">Available Products: {view.length}</h1>
      <div className=" grow grid grid-cols-2 lg:grid-cols-3 gap-4 ">
      {view.length ? (
        view.map((el) => <ProductCard key={el.id} product={el} />)
      ) : (
        <h1>There is no product here yet</h1>
      )}
    </div>
    <div className="w-full flex justify-center">
     <Pagination/>
    </div>
    </div>
  );
}
