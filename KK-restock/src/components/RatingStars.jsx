import { useState } from "react";

const RatingStars = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [selectedRating, setSelectedRating] = useState(0);

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(-1);
  };

  const handleRatingClick = (index) => {
    setSelectedRating(index + 1);
  };

  return (
    <div className="flex items-center space-x-1">
      {[0, 1, 2, 3, 4].map((index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={
            index <= (hoveredIndex !== -1 ? hoveredIndex : selectedRating - 1)
              ? "#FF7A00"
              : "gray"
          }
          className="w-6 h-6 cursor-pointer"
          onMouseEnter={() => handleMouseEnter(index)}
          onMouseLeave={handleMouseLeave}
          onClick={() => handleRatingClick(index)}
        >
          <path
            fillRule="evenodd"
            d="M14.472 8.684l5.372-.785a1 1 0 01.555 1.705l-3.876 3.774.915 5.333a1 1 0 01-1.45 1.054L10 16.316l-4.517 2.223a1 1 0 01-1.45-1.054l.915-5.333-3.876-3.774a1 1 0 01.555-1.705l5.372-.785 2.394-4.84a1 1 0 011.788 0l2.394 4.84z"
            clipRule="evenodd"
          />
        </svg>
      ))}

      <span className="text-gray-600 ml-1">
        {selectedRating > 0 ? `You rated ${selectedRating} stars` : "No rating"}
      </span>
    </div>
  );
};

export default RatingStars;
