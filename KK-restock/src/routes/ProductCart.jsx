import { BsFillCartFill } from "react-icons/bs";
import CartItem from "./CartItem";

function ProductCart() {
  return (
    <div className="my-4 ">
      <div className="flex justify-center items-center gap-8">
        <BsFillCartFill size={40} />
        <p className="text-4xl font-bold">My Cart</p>
      </div>
      <div className="my-4 mx-4 flex  items-center justify-between w-full">
        <div className="  text-xl font-bold">
          Please check out the availability if items before checkout
        </div>
        <div className="">
          <p className="mr-8  text-xl font-bold">
            <span className="px-4 py-2 mr-4 border border-kkblack rounded-full ">
              20,000,000
            </span>
            UGX
          </p>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
      ß ProductCart
    </div>
  );
}

export default ProductCart;
