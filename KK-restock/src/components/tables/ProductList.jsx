import ShoppingCartNav from "../ShoppingCartNav";
import ProductTable from "./ProductTable";

function ProductList() {
  return (
    <div className="w-3/4 ">
      <div className="float-right mr-auto">
        <ShoppingCartNav />
      </div>
      <h2 className="text-black font-bold text-center ">PRODUCT LIST</h2>

      {/**Branches */}
      <div className="flex justify-evenly m-4 text-sm  ">
        <h3 className="font-bold">Entebbe Branch</h3>
        <h3>Kisoosi Branch</h3>
        <h3>Mutundwe Branch</h3>
        <h3>Masaka Branch</h3>
      </div>

      {/**Results */}
      <div className="m-10 ">
        <div className=" text-stone-400 text-[12px] font-extrabold">
          TOTAL PRODUCTS IN STOCK: 180
        </div>
        <div className="  text-stone-400 text-[12px] font-extrabold">
          TOTAL PRODUCTS: 18,000,000
        </div>
      </div>

      {/**Results */}
      <div className="mt-10">
        <ProductTable />
      </div>
    </div>
  );
}
export default ProductList;
