import PropTypes from "prop-types";

const DisplayRatingStars = ({ Stars, starWidth, starHeight }) => {
  const selectedRating = Stars;
  DisplayRatingStars.propTypes = {
    Stars: PropTypes.number.isRequired,
    starWidth: PropTypes.number.isRequired, // Define the prop validation for starWidth
    starHeight: PropTypes.number.isRequired, // Define the prop validation for starHeight
  };
  return (
    <div className="flex items-center space-x-1">
      {[0, 1, 2, 3, 4].map((index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill={index <= selectedRating - 1 ? "#FF7A00" : "gray"}
          className={`w-${starWidth} h-${starHeight}`}
        >
          <path
            fillRule="evenodd"
            d="M14.472 8.684l5.372-.785a1 1 0 01.555 1.705l-3.876 3.774.915 5.333a1 1 0 01-1.45 1.054L10 16.316l-4.517 2.223a1 1 0 01-1.45-1.054l.915-5.333-3.876-3.774a1 1 0 01.555-1.705l5.372-.785 2.394-4.84a1 1 0 011.788 0l2.394 4.84z"
            clipRule="evenodd"
          />
        </svg>
      ))}

      {/* <span className="text-gray-600 ml-1">
        {selectedRating > 0 ? `Rated ${selectedRating} stars` : "No rating"}
      </span> */}
    </div>
  );
};

export default DisplayRatingStars;
