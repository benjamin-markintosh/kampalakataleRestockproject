import NavAdmin from "../components/NavAdmin";
import ProductList from "../components/tables/ProductList";


 function ProductTableList() {
  return (
    <div className="flex w-full">
      <NavAdmin/>
      
      <ProductList/>
    </div>
  )
}
export default ProductTableList;