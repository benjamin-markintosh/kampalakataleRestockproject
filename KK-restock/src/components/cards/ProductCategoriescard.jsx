function ProductCategoriescard() {
  const categoryData = [
    {
      name: "Hardwares",
      desc: "All Hardware equipment in one place",
      image:
        "https://i.pinimg.com/564x/a2/fc/77/a2fc772329272b29cf1b328196b28851.jpg",
    },
    {
      name: "Books and Stationery",
      desc: "All Factories and Companies in one place",
      image:
        "https://i.pinimg.com/564x/1b/3c/8c/1b3c8c984399af318a80b0336aea9592.jpg",
    },
    {
      name: "Electronics",
      desc: "For all your Glocery Restocks ",
      image:
        "https://i.pinimg.com/564x/a8/ca/0f/a8ca0fd6894db828c12767afb4f3e2f1.jpg",
    },
    {
      name: "Food and Beverage Products",
      desc: "All Hardware equipment in one place",
      image:
        "https://i.pinimg.com/564x/a2/fc/77/a2fc772329272b29cf1b328196b28851.jpg",
    },
    {
      name: "Electrical and Lightings",
      desc: "All Factories and Companies in one place",
      image:
        "https://i.pinimg.com/564x/1b/3c/8c/1b3c8c984399af318a80b0336aea9592.jpg",
    },
    {
      name: "Clothing and Apparel",
      desc: "For all your Glocery Restocks ",
      image:
        "https://i.pinimg.com/564x/a8/ca/0f/a8ca0fd6894db828c12767afb4f3e2f1.jpg",
    },
  ];

  return (
    <div className="max-w-[1640px] mx-auto p-4 py-12  grid md:grid-cols-3 lg:grid-cols-6 duration-500 shadow-2xl gap-6">
      {categoryData.map((categoryData, index) => (
        <div key={index} className="rounded-xl relative">
          <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
            <p className="font-bold text-2xl px-2 pt-4">{categoryData.name}</p>
            <p className="px-2">{categoryData.desc}</p>
            <button className=" mx-2 absolute bottom-4 bg-kkblack text-kkwhite items-center  px-2 rounded-full cursor-pointer hover:text-kkblack hover:bg-kkyellow py-2">
              View Now
            </button>
          </div>
          <img
            className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
            src={categoryData.image}
            alt="/"
          />
        </div>
      ))}
    </div>
  );
}

export default ProductCategoriescard;

// {/* Card */}
// <div className="rounded-xl relative">
// {/* Overlay */}
// <div className="absolute w-full h-full bg-black/50 rounded-xl text-white">
//   <p className="font-bold text-2xl px-2 pt-4">Name</p>
//   <p className="px-2">Description</p>
//   <button className=" mx-2 absolute bottom-4 bg-kkblack text-kkwhite items-center  px-2 rounded-full cursor-pointer hover:text-kkblack hover:bg-kkyellow py-2">
//     View Now
//   </button>
// </div>
// <img
//   className="max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl"
//   src=Image
//   alt="/"
// />
// </div>
