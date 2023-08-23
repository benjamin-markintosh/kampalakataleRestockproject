import DisplayRatingStars from "./DisplayRatingStars";
import { useState } from "react";
import ProductCarousel from "../components/carousels/ProductCarousel";
import AddProduct from "../components/forms/Addproduct";
import DeliveryDetails from "../components/DeliveryDetails";

import Issue from "./Issue";

function ProductTitleDetails() {
  const productBrands = ["Hima", "Tororo"];

  const [selectedBrand, setSelectedBrand] = useState("");

  const handleSelect = (event) => {
    setSelectedBrand(event.target.value);
  };

  return (
    <div className="w-full ">
      <div className="">
        <h1 className=" text-kkblack text-xl md:text-2xl mt-4 mb-2  font-bold">
          CEMENT
        </h1>
      </div>

      <div className="flex justify-center mb-4">
        <div>
          <p className="text-md md:text-xl font-semibold pb-2">
            Product Rating
          </p>
          <DisplayRatingStars Stars={2} starWidth={6} starHeight={6} />
        </div>
      </div>
      <div>
        <div className="flex justify-center items-center space-x-2">
          <label className="text-gray-600 text-sm md:text-md">
            Select Brand:
          </label>
          <select
            value={selectedBrand}
            onChange={handleSelect}
            className=" border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            <option className="" value="">
              Select Brand
            </option>
            {productBrands.map((brand, index) => (
              <option className="px-2 py-2 text-md" key={index} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className=" ">
        <p className="text-center py-4 text-black text-sm font-normal">
          Dealers in utility tools, carpentry, home tools
        </p>
        <h2 className="font-semibold pb-2">Add to cart</h2>
      </div>
      <div className=" flex flex-col  md:grid  md:grid-cols-2 gap-12 ">
        <ProductCarousel />
        <AddProduct />
      </div>
      <div className="flex">
        <DeliveryDetails />
        <Issue />
      </div>
    </div>
  );
}
export default ProductTitleDetails;
