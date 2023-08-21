import "../../App.css";
import Alert1 from '../../components/alerts/Alert1'

const tableData = [
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

function ProductTable(props) {
  return (
    <div className="table1">
      <table>
        <tr>
          <th>Name</th>
          <th>Description</th>
          <th>Brand</th>
          <th>Packaging</th>
          <th>UnitWeight</th>
          <th>UnitDimensions</th>
          <th>UnitPrice</th>
          <th>WhosalePrice</th>
          <th>Edit</th>
          <th>Delete</th>
        </tr>
        {tableData.map((val, key) => {
          return (
            <tr key={key}>
              <td>{val.name}</td>
              <td>{val.description}</td>
              <td>{val.brand}</td>
              <td>{val.packaging}</td>
              <td>{val.unitWeight}</td>
              <td>{val.unitDimensions}</td>
              <td>{val.unitPrice}</td>
              <td>{val.whosalePrice}</td>
              <td>
                <button className="  bg-kkyellow hover:bg-kkorange p-2 border-none rounded-sm cursor-pointer">Edit</button>
              </td>
              <td>
                <button className=" bg-kkyellow p-2 border-none rounded-sm hover:bg-kkorange cursor-pointer">delete</button>
              </td>
            </tr>
          );
        })}
      </table>
      <div className="top-[42%] relative right-[11%] mt-4">
        <Alert1/>
      </div>

      <div className="absolute inline-block left-[50%] bottom-12 " >
        <div className=" w-[194px] h-[30px] justify-items-center mb-4  text-stone-400 text-3xl font-semibold">
          256 reviews
        </div>
        <div className="flex justify-center  gap-1">
        <svg
          viewBox="0 0 64 64"
          fill="currentColor"
          height="1em"
          width="1em"
          color="kk"
          {...props}
        >
          <path
            fill="orange"
            stroke="currentColor"
            strokeMiterlimit={10}
            strokeWidth={2}
            d="M32 47L12 62l8-24L2 24h22l8-23 8 23h22L44 38l8 24z"
          />
        </svg>
        <svg
          viewBox="0 0 64 64"
          fill="currentColor"
          height="1em"
          width="1em"
          color="kk"
          {...props}
        >
          <path
            fill="orange"
            stroke="currentColor"
            strokeMiterlimit={10}
            strokeWidth={2}
            d="M32 47L12 62l8-24L2 24h22l8-23 8 23h22L44 38l8 24z"
          />
        </svg>
        <svg
          viewBox="0 0 64 64"
          fill="currentColor"
          height="1em"
          width="1em"
          color="kk"
          {...props}
        >
          <path
            fill="orange"
            stroke="currentColor"
            strokeMiterlimit={10}
            strokeWidth={2}
            d="M32 47L12 62l8-24L2 24h22l8-23 8 23h22L44 38l8 24z"
          />
        </svg>
        <svg
          viewBox="0 0 64 64"
          fill="currentColor"
          height="1em"
          width="1em"
          color="kk"
          {...props}
        >
          <path
            fill="orange"
            stroke="currentColor"
            strokeMiterlimit={10}
            strokeWidth={2}
            d="M32 47L12 62l8-24L2 24h22l8-23 8 23h22L44 38l8 24z"
          />
        </svg>
        <svg
          viewBox="0 0 64 64"
          fill="currentColor"
          height="1em"
          width="1em"
          color="kk"
          {...props}
        >
          <path
            fill="gray"
            stroke="currentColor"
            strokeMiterlimit={10}
            strokeWidth={2}
            d="M32 47L12 62l8-24L2 24h22l8-23 8 23h22L44 38l8 24z"
          />
        </svg>
      </div>
      </div>
    </div>
  );
}

export default ProductTable;
