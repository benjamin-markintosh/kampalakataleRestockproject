function LogoBlack() {
  return (
    <div>
      <div className="flex gap-x-2 md:gap-x-4  items-center">
        <img
          src="./src/assets/images/KampalakataleLogo-01.png"
          className={`cursor-pointer duration-500 w-10 sm:w-14`}
          alt="Kampala Katale"
        />
        <div
          className={`text-kkyellow  origin-left font-bold font-medium text-base sm:text-xl duration-300 `}
        >
          <span className="text-kkblack ">Kampala </span>Katale
        </div>
      </div>
    </div>
  );
}

export default LogoBlack;
