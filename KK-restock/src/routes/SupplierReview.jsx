import Issue from "../components/Issue";
import NavClientside from "../components/NavClientside";
import Products from "../components/cards/Products";

function SupplierReview() {
  const branches = [
    { name: "Entebbe", location: "Along Entebbe-Kampala Rd, Kitala Town" },
    { name: "Kisaasi", location: "Along Entebbe-Kampala Rd, Kitala Town" },
    { name: "Mutundwe", location: "Along Entebbe-Kampala Rd, Kitala Town" },
    { name: "Banda", location: "Along Entebbe-Kampala Rd, Kitala Town" },
  ];

  return (
    <div className="relative">
      <NavClientside />
      <div className="starrating flex justify-center w-full h-8 mb-4 ">
        <div className="stars">Stars</div>
      </div>
      {/* Branches */}
      <div className="branches  flex justify-evenly items-center  w-full h-8 ">
        {branches.map((branch, key) => (
          <p
            key={key}
            className={`  text-center 
               text-kkblack
          mx-4  hover:font-bold hover:text-kkorange  `}
          >
            {branch.name} Branch
          </p>
        ))}
      </div>

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
