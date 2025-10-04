import CategoryFillters from "../component/CategoryFillters";
import ProductView from "../component/ProductView";


export default function ProductPage() {
  return (
    <div className="w-full flex justify-center items-center py-10">
        <div className="container flex gap-8 items-start mx-auto max-w-screen-xl">
            <CategoryFillters/>
            <ProductView/>
        </div>
    </div>
  )
}
