import WhiteLogo from "../assets/images/KampalakataleLogo-06.png";

function LogoWhite() {
  return (
    <div>
      <div className="flex gap-x-4 items-center">
        <img
          src={WhiteLogo}
          className={`cursor-pointer duration-500 w-14`}
          alt="Kampala Katale"
        />
        <div
          className={`text-kkyellow  origin-left font-bold font-medium text-xl duration-300 `}
        >
          <span className="text-kkwhite ">Kampala </span>Katale
        </div>
      </div>
    </div>
  );
}

export default LogoWhite;
