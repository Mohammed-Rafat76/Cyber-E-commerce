import { userCart } from "../store";

export default function CartPage() {
  const { value: cartProduct } = userCart();
  return (
    <div className="flex justify-center py-9">
        <div className="flex flex-col gap-4 w-[80%] ">
      {cartProduct.map((el) => (
        <div className="card bg-amber-50 w-[20%] shadow-sm ">
          <figure>
            <img src={el.image} alt="Shoes" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{el.title}</h2>
            <p>{el.price}</p>
          </div>
        </div>
      ))}
        </div>
    </div>
  );
}
