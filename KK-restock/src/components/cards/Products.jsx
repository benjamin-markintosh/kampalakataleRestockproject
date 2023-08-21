import { useState } from "react";
import { data } from "./data";

const Products = () => {
  //   console.log(data);
  const [suppliers, setSuppliers] = useState(data);

  //   Filter Type burgers/pizza/etc
  const filterCategory = (category) => {
    setSuppliers(
      data.filter((suppliers) => {
        return suppliers.category === category;
      })
    );
  };

  //   Filter by price
  const filterLocation = (price) => {
    setSuppliers(
      data.filter((item) => {
        return item.price === price;
      })
    );
  };

  return (
    <div className="max-w-[1640px] m-auto px-4 py-12">
      <h1 className="text-kkorange font-bold text-xl ">Products</h1>
      {/* Filter Row */}
      <div className="flex flex-col lg:flex-row justify-between">
        {/* Fliter Type */}
        <div>
          <p className="font-bold text-gray-700">Filter Category</p>
          <div className="flex justfiy-between flex-wrap">
            <button
              onClick={() => setSuppliers(data)}
              className="m-1 border-kkorange text-kkorange hover:bg-kkorange hover:text-white"
            >
              All
            </button>
            <button
              onClick={() => filterCategory("hardwares")}
              className="m-1 border-kkorange text-kkorange hover:bg-kkorange hover:text-white"
            >
              Hardwares
            </button>
            <button
              onClick={() => filterCategory("groceries")}
              className="m-1 border-kkorange text-kkorange hover:bg-kkorange hover:text-white"
            >
              Groceries
            </button>
            <button
              onClick={() => filterCategory("manufacturers")}
              className="m-1 border-kkorange text-kkorange hover:bg-kkorange hover:text-white"
            >
              Manufacturers
            </button>
          </div>
        </div>

        {/* Filter Price */}
        <div>
          <p className="font-bold text-gray-700">Filter Price</p>
          <div className="flex justify-between max-w-[390px] w-full">
            <button
              onClick={() => filterLocation("Kampala")}
              className="m-1 border-kkorange text-kkorange hover:bg-kkorange hover:text-white"
            >
              Kampala
            </button>
            <button
              onClick={() => filterLocation("Mbarara")}
              className="m-1 border-kkorange text-kkorange hover:bg-kkorange hover:text-white"
            >
              Mbarara
            </button>
            <button
              onClick={() => filterLocation("Gulu")}
              className="m-1 border-kkorange text-kkorange hover:bg-kkorange hover:text-white"
            >
              Gulu
            </button>
            <button
              onClick={() => filterLocation("Masaka")}
              className="m-1 border-kkorange text-kkorange hover:bg-kkorange hover:text-white"
            >
              Masaka
            </button>
          </div>
        </div>
      </div>
      {/* Display category */}

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4">
        {suppliers.map((item, index) => (
          <div
            key={index}
            className="border shadow-lg grid  rounded-lg hover:scale-105 duration-300"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[200px] object-cover rounded-t-lg"
            />
            <div className="content px-2 py-4">
              <div className="nameandstatus flex  ">
                <div className="name flex-1 font-bold">{item.name}</div>
                <div className="status text-green-500">Instock</div>
              </div>
              <div className="nameandstatus flex  ">
                <div className="grid">
                  <div className="unit grid font-bold">
                    <span>Unit Pack:</span> 25kg
                  </div>
                  <div className=" desc ">
                    <p>Decrription will be g here</p>
                  </div>
                </div>

                <div className="price grid  text-3xl text-right">
                  250k Ugx
                  <span className="text-base text-right">300k ugx</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
