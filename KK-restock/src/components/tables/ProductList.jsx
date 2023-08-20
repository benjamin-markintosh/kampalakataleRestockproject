import Branches from "../Branches";
import ShoppingCartNav from "../ShoppingCartNav";
import ProductTable from "./ProductTable";

function ProductList() {
  return (
    <div className="w-3/4 mt-8">
      <div className="float-right mr-auto">
        <ShoppingCartNav />
      </div>
      <h2 className="text-black font-bold text-center mt-4">PRODUCT LIST</h2>

      {/**Branches */}
      <div className="mt-4">
        <Branches />
      </div>

      {/**Results */}
      <div className="flex justify-end">
        {" "}
        <div className=" mt-4 -mb-6 ">
          <div className=" text-stone-400 text-[12px] font-extrabold">
            TOTAL PRODUCTS IN STOCK: 180
          </div>
          <div className="  text-kkorange text-[12px] font-extrabold">
            TOTAL PRODUCTS: 18,000,000
          </div>
        </div>
      </div>

      {/**Results */}
      <div className="">
        <ProductTable />
      </div>
    </div>
  );
}
export default ProductList;
