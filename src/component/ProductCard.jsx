import toast from "react-hot-toast";
import { userCart } from "../store";

export default function ProductCard({ product }) {
  const { addToCart } = userCart();
  return (
    <div className="px-4 py-6 bg-[#F6F6F6] flex flex-col gap-4 rounded-[6px]">
      <img
        src={product.image}
        className="w-full object-contain h-[160px] bg-white rounded-[6px]"
        alt=""
      />
      <h1 className="font-medium text-[16px] text-[#121212]">
        {product.title}
      </h1>
      <p className="font-semibold text-[#282828] text-[16px]">
        ${product.price}
      </p>
      <button
        onClick={() => (
          addToCart({ ...product, qty: 1 }),
          toast.success("Added to cart!")
        )}
        className="btn btn-neutral w-full"
      >
        Add to cart
      </button>
    </div>
  );
}
