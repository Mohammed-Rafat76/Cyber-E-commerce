import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { domain } from "../store";

export default function ProductDetailes() {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  useEffect(() => {
    const endPoint = "/api/products/" + params.documentId + "?populate=*";
    const url = domain + endPoint;
    axios
      .get(url)
      .then((res) => {
        let final = res.data.data;
        const colores = final.Colores;
        const finalcolore = colores?.split("\n");
        console.log(finalcolore);
        setProduct(final);
      })
      .catch((err) => {
        navigate("*");
        console.log(err);
      });
  }, []);
  return (
    <div className="w-full h-full p-4">
      <table className="table w-full">
        <tbody>
          <tr>
            <th>Product image</th>
            <td>
              <img className="w-[300px] h-[300px]" src={domain + product?.img?.url} alt="" />
            </td>
          </tr>
          <tr>
            <th>Product Name</th>
            <td>{product.name}</td>
          </tr>
          <tr>
            <th>Product price</th>
            <td>{product.price}</td>
          </tr>
          <tr>
            <th>Available color</th>
            <td>{product.Colores}</td>
          </tr>
          <tr>
            <th>Additional data</th>
            <td>
              <ul>
                <li>battary 90%</li>
                <li>45 W</li>
              </ul>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
