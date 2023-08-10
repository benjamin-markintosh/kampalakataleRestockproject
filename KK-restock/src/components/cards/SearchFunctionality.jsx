// import { useState } from "react";
// import  "./data";

// const data =  data.map()
// const Search = ({ data }) => {
//   const [query, setQuery] = useState("");

//   const filteredData = data.filter((item) =>
//     item.toLowerCase().includes(query.toLowerCase())
//   );

//   return (
//     <div>
//       <input
//         type="text"
//         placeholder="Search..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         className="border p-2 rounded"
//       />

//       <ul className="mt-2">
//         {filteredData.map((item) => (
//           <li key={item} className="border-b p-2">
//             {item}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// const App = () => {
//   const siteData = [
//     "Home",
//     "About Us",
//     "Services",
//     "Products",
//     "Contact Us",
//     // Add more pages or items
//   ];

//   return (
//     <div>
//       <h1>Website Search</h1>
//       <Search data={siteData} />
//     </div>
//   );
// };

// export default App;
