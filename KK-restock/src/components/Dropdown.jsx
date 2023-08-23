import { useState } from "react";





const DropdownInput = ({ selectItems }) => {
  const [selectedBrand, setSelectedBrand] = useState("");

  const handleBrandChange = (event) => {
    setSelectedBrand(event.target.value);
  };

  return (
    <div className="flex items-center space-x-4">
      <label className="font-semibold">Select Brand:</label>
      <select
        className="border rounded-md p-2 focus:outline-none focus:border-blue-500"
        value={selectedBrand}
        onChange={handleBrandChange}
      >
        <option value="">Select...</option>
        {selectItems.map((brand, index) => (
          <option key={index} value={brand}>
            {brand}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownInput;
