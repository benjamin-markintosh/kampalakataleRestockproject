function Branches() {
  const branches = [
    { name: "Entebbe", location: "Along Entebbe-Kampala Rd, Kitala Town" },
    { name: "Kisaasi", location: "Along Entebbe-Kampala Rd, Kitala Town" },
    { name: "Mutundwe", location: "Along Entebbe-Kampala Rd, Kitala Town" },
    { name: "Banda", location: "Along Entebbe-Kampala Rd, Kitala Town" },
  ];

  return (
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
  );
}

export default Branches;
