import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "http://localhost:1337";

function ProductCategoriescard() {
  const [categories2, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await axios.get(`${API_URL}/api/categories`);
        console.log(response.data.data);
        setCategories(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchCategories();
  }, []);

  // const category = [
  //   {
  //     name: "Hardwares",
  //     desc: "All Hardware equipment in one place",
  //     image:
  //       "https://i.pinimg.com/564x/a2/fc/77/a2fc772329272b29cf1b328196b28851.jpg",
  //   },
  //   {
  //     name: "Books and Stationery",
  //     desc: "All Factories and Companies in one place",
  //     image:
  //       "https://i.pinimg.com/564x/1b/3c/8c/1b3c8c984399af318a80b0336aea9592.jpg",
  //   },
  //   {
  //     name: "Electronics",
  //     desc: "For all your Glocery Restocks ",
  //     image:
  //       "https://i.pinimg.com/564x/a8/ca/0f/a8ca0fd6894db828c12767afb4f3e2f1.jpg",
  //   },
  //   {
  //     name: "Food and Beverages",
  //     desc: "All Hardware equipment in one place",
  //     image:
  //       "https://i.pinimg.com/564x/a2/fc/77/a2fc772329272b29cf1b328196b28851.jpg",
  //   },
  //   {
  //     name: "Electrical and Lightings",
  //     desc: "All Factories and Companies in one place",
  //     image:
  //       "https://i.pinimg.com/564x/1b/3c/8c/1b3c8c984399af318a80b0336aea9592.jpg",
  //   },
  //   {
  //     name: "Clothing and Apparel",
  //     desc: "For all your Glocery Restocks ",
  //     image:
  //       "https://i.pinimg.com/564x/a8/ca/0f/a8ca0fd6894db828c12767afb4f3e2f1.jpg",
  //   },
  // ];

  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12  grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 duration-500 shadow-2xl gap-6">
      {categories2.map((category, index) => (
        <div key={index} className="rounded-xl relative">
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold h-full/2 text-xl md:text-2xl px-2 pt-4">
              {category.attributes.name}
              {console.log(category.id)}
            </p>
            <p className="px-2 mt-2 text-left h-1/2 text-sm w-24 md:w-full ">
              {/* {console.log(category.attributes.category_desc)} */}
              {category.attributes.desc}
            </p>
            <Link to={`/suppliers/${category.id}`}>
              <button className=" mx-2 absolute bottom-2 md:bottom-4 bg-kkblack text-md md:text-md text-kkwhite items-center  px-2 rounded-full cursor-pointer hover:text-kkblack hover:bg-kkyellow py-2">
                View Now
              </button>
            </Link>
          </div>
          {/* <div className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"></div> */}
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src={category.attributes.image}
            alt="/"
          />
        </div>
      ))}
    </div>
  );
}

export default ProductCategoriescard;

// {/* Card */}
// <div className="rounded-xl relative">
// {/* Overlay */}
// <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
//   <p className="font-bold text-2xl px-2 pt-4">Name</p>
//   <p className="px-2">Description</p>
//   <button className=" mx-2 absolute bottom-4 bg-kkblack text-kkwhite items-center  px-2 rounded-full cursor-pointer hover:text-kkblack hover:bg-kkyellow py-2">
//     View Now
//   </button>
// </div>
// <img
//   className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
//   src=Image
//   alt="/"
// />
// </div>
