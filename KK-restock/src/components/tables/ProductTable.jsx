import "../../App.css";
import Alert from "../../components/alerts/Alert";
import RatingStars from "../RatingStars";

const Product = [
  {
    name: "cement",
    description: "A building material",
    brand: "Hima",
    packaging: "Paper Bag",
    unitWeight: "100",
    unitDimensions: "Kg",
    unitPrice: "100000",
    whosalePrice: "100000",
  },
  {
    name: "cement",
    description: "A building material",
    brand: "Hima",
    packaging: "Paper Bag",
    unitWeight: "100",
    unitDimensions: "Kg",
    unitPrice: "100000",
    whosalePrice: "100000",
  },
  {
    name: "cement",
    description: "A building material",
    brand: "Hima",
    packaging: "Paper Bag",
    unitWeight: "100",
    unitDimensions: "Kg",
    unitPrice: "100000",
    whosalePrice: "100000",
  },
  // Add more objects as needed
];

function ProductTable() {
  return (
    <div className="table1">
      <table className="w-full table-fixed shadow-md">
        <thead>
          <tr>
            <th className="w-1/6">Name</th>
            <th className="hidden md:table-cell w-1/6">Description</th>
            <th className="w-1/6">Brand</th>
            <th className="w-1/6">Packaging</th>
            <th className="w-1/6">Unit Weight</th>
            <th className="hidden md:table-cell w-1/6">Unit Dimensions</th>
            <th className="hidden md:table-cell w-1/6">Unit Price</th>
            <th className="hidden md:table-cell w-1/6">Wholesale Price</th>
            <th className="w-1/6">Edit</th>
            <th className="w-1/6">Delete</th>
          </tr>
        </thead>
        <tbody>
          {Product.map((val, key) => {
            return (
              <tr key={key}>
                <td className="w-1/6">{val.name}</td>
                <td className="hidden md:table-cell w-1/6">
                  {val.description}
                </td>
                <td className="w-1/6">{val.brand}</td>
                <td className="w-1/6">{val.packaging}</td>
                <td className="w-1/6">{val.unitWeight}</td>
                <td className="hidden md:table-cell w-1/6">
                  {val.unitDimensions}
                </td>
                <td className="hidden md:table-cell w-1/6">{val.unitPrice}</td>
                <td className="hidden md:table-cell w-1/6">
                  {val.whosalePrice}
                </td>
                <td className="w-1/6">
                  <button className="bg-kkyellow hover:bg-kkorange p-2 border-none rounded-sm cursor-pointer">
                    Edit
                  </button>
                </td>
                <td className="w-1/6">
                  <button className="bg-kkyellow p-2 border-none rounded-sm hover:bg-kkorange cursor-pointer">
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <div className="top-[42%] relative right-[11%] mt-4">
        <Alert />
      </div>

      <div className="absolute inline-block left-[50%] bottom-12 ">
        <div className=" w-[194px] h-[30px] justify-items-center mb-4  text-stone-400 text-3xl font-semibold">
          256 reviews
        </div>
        <div>
          <RatingStars />
        </div>
      </div>
    </div>
  );
}

export default ProductTable;
