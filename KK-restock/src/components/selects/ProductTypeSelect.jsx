
import ProductCarousel from "../carousels/ProductCarousel";
import AddProduct from "../forms/Addproduct";
import DeliveryDetails from '../../components/DeliveryDetails'
import Alert from "../../components/Alert"

function ProductTypeSelect() {
  
  return (
    <div className="">
      
      <div className="mt-1 ">
        <p className="text-center  text-black text-[12px] font-normal">
          Dealers in utility tools, carpentry, <br /> home tools
        </p>
      </div>
      <div className="  grid  grid-cols-2 gap-12 ">
        <ProductCarousel />
        <AddProduct />
      </div>
      <div className="flex">
      <DeliveryDetails/>
      <Alert/>
      </div>
      
    </div>
  );
}
export default ProductTypeSelect;
