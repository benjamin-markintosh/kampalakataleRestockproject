import Branches from "../components/Branches";
import DisplayRatingStars from "../components/DisplayRatingStars";
import Issue from "../components/Issue";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
const API_URL = "http://localhost:1337";

function SupplierReview() {
  const { supplierId } = useParams();

  const [products, setProducts] = useState([]);
  const [supplierName, setSupplierName] = useState(""); // Declare the variable for Suppliers name
  const [supplierAddress, setSupplierAddress] = useState(""); // Declare the variable for Suppliers name
  const [supplierRating, setSupplierRating] = useState(""); // Declare the variable for Suppliers rating
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    console.log(supplierId);

    // Fetch the supplier name using the supplier Id
    axios
      .get(`${API_URL}/api/suppliers/${supplierId}`) // Adjust the API endpoint based on your API
      .then((response) => {
        console.log(response.data.data.attributes.supplier_name);
        setSupplierName(response.data.data.attributes.supplier_name);
        setSupplierAddress(response.data.data.attributes.supplier_address);
        setSupplierRating(response.data.data.attributes.supplier_rating);
      })
      .catch((error) => {
        console.error("Error fetching category name:", error);
      });

    // Fetch products related to the selected supplier
    axios
      .get(`${API_URL}/api/products?populate=suppliers`)
      .then((response) => {
        console.log(response.data.data);

        const filteredProducts = response.data.data.filter((product) => {
          //      return supplier.attributes.category.data.id == supplierId;
          return product.attributes.suppliers.data.some(
            (sup) => sup.id === parseInt(supplierId)
          );
        });

        console.log(filteredProducts);
        setProducts(filteredProducts);
        setLoading(false);
      })

      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, [supplierId]);

  return (
    <div className="relative ">
      <div className="starrating flex justify-center w-full h-8 mb-4 ">
        <div className="stars my-4 b-4 ">
          <p className="text-xl font-semibold ">{supplierName}</p>
          <p className="text-md font-base ">Rated</p>

          <div className="w-full flex justify-center">
            <DisplayRatingStars
              Stars={supplierRating}
              starWidth={6}
              starHeight={6}
            />
          </div>
          {console.log(supplierRating)}
        </div>
      </div>

      <div className="branch mt-20">
        <Branches />
      </div>

      {/* Description */}
      <div className="desc flex justify-evenly items-center text-kkblack my-4">
        {supplierAddress}
      </div>
      {/* Products */}

      {loading ? (
        <div className="flex w-full h-96 justify-center items-center  ">
          <div>
            <p>Loading...</p>
          </div>
        </div>
      ) : products.length === 0 ? (
        <div className="flex w-full h-96 justify-center items-center font-bold text-4xl text-kkblack/25 ">
          <p>There are no products yet.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 mx-2 md:mx-8 gap-6 pt-4">
          {products.map((item, index) => (
            <Link to={`/product-description/${item.id}`} key={index}>
              <div className="border shadow-lg rounded-lg hover:scale-105 duration-300">
                <img
                  src={item.attributes.header_image}
                  alt={item.attributes.product_name}
                  className="w-full h-[200px] object-cover rounded-t-lg"
                />
                <div className="flex justify-between px-2 pt-2">
                  <p className="font-bold text-left">
                    {item.attributes.product_name}
                  </p>
                  <p className="font-semibold">
                    <span className="bg-orange-500 text-white p-1 rounded-full">
                      {item.attributes.product_unit_price}
                    </span>
                    <> </>Ugx
                  </p>
                </div>
                <div className="px-2">
                  <p className="font-base text-left">
                    {item.attributes.product_desc}
                  </p>
                </div>
                <div className="px-2">
                  <p className="font-base text-left">
                    {item.attributes.supplier_tel}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* issue button */}

      <Issue />
    </div>
  );
}

export default SupplierReview;
