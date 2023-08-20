import Branches from "../components/Branches";
import Issue from "../components/Issue";
import NavClientside from "../components/NavClientside";
import Products from "../components/cards/Products";

function SupplierReview() {
  return (
    <div className="relative">
      <NavClientside />
      <div className="starrating flex justify-center w-full h-8 mb-4 ">
        <div className="stars">Stars</div>
      </div>
      <Branches />

      {/* Description */}
      <div className="desc flex justify-evenly items-center text-kkblack my-4">
        This is the description section of the business.
      </div>
      {/* Products */}

      <Products />

      {/* issue button */}

      <Issue />
    </div>
  );
}

export default SupplierReview;
