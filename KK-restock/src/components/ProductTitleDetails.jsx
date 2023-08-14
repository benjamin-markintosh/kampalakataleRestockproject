import ProductTypeSelect from "./selects/ProductTypeSelect";
import ShoppingCartNav from "./ShoppingCartNav";

function ProductTitleDetails(props) {
  return (
    <div className=" ">
      <div className="flex justify-between">
        <h1 className=" ml-[510px] text-black text-[25px] mb-0  font-bold">
          CEMENT
        </h1>
        <div className="mt-5 mr-5">
          <ShoppingCartNav />
        </div>
      </div>

      <div className="flex justify-center gap-1">
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
      <di>
        <ProductTypeSelect />
      </di>
    </div>
  );
}
export default ProductTitleDetails;
