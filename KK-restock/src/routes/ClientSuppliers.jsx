import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
const API_URL = "http://localhost:1337";

function SuppliersByCategory() {
  const { categoryId } = useParams();
  const [suppliers, setSuppliers] = useState([]);
  const [categoryName, setCategoryName] = useState(""); // Declare the variable for category name
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log(categoryId);

    // Fetch the category name using the categoryId
    axios
      .get(`${API_URL}/api/categories/${categoryId}`) // Adjust the API endpoint based on your API
      .then((response) => {
        console.log(response.data.data.attributes.name);
        setCategoryName(response.data.data.attributes.name);
      })
      .catch((error) => {
        console.error("Error fetching category name:", error);
      });

    // Fetch suppliers related to the selected category
    axios
      .get(`${API_URL}/api/suppliers?populate=category`)
      .then((response) => {
        console.log(response.data.data);
        const filteredSuppliers = response.data.data.filter((supplier) => {
          return supplier.attributes.category.data.id === parseInt(categoryId);
        });

        console.log(filteredSuppliers);
        setSuppliers(filteredSuppliers);
        setLoading(false);
      })

      .catch((error) => {
        console.error("Error fetching suppliers:", error);
      });
  }, [categoryId]);

  return (
    <div>
      <div className="max-w-[1640px] m-auto px-4 py-12">
        <h1 className="text-kkorange font-bold text-4xl text-center">
          {categoryName} Suppliers
        </h1>

        {/* Filter Row */}

        {/* Display category */}

        {loading ? (
          <div className="flex w-full h-96 justify-center items-center  ">
            <div>
              <p>Loading...</p>
            </div>
          </div>
        ) : suppliers.length === 0 ? (
          <div className="flex w-full h-96 justify-center items-center font-bold text-4xl text-kkblack/25 ">
            <div>
              <p>There are no products yet.</p>
            </div>
          </div>
        ) : (
          <div>
            {suppliers.map((item, index) => (
              <Link
                to={`/supplier-page/${item.id}`}
                className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4"
                key={index}
              >
                <div className="border shadow-lg rounded-lg hover:scale-105 duration-300">
                  <img
                    src={item.attributes.image}
                    alt={item.attributes.supplier_name}
                    className="w-full h-[200px] object-cover rounded-t-lg"
                  />
                  <div className="flex justify-between px-2 pt-2">
                    <p className="font-bold">{item.attributes.supplier_name}</p>
                    <p>
                      <span className="bg-orange-500 text-white p-1 rounded-full">
                        {item.attributes.supplier_address}
                      </span>
                    </p>
                  </div>
                  <div className="px-2">
                    <p className="font-base text-left">
                      {item.attributes.supplier_email}
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
      </div>
    </div>
  );
}

export default SuppliersByCategory;
