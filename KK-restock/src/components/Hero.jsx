function Hero() {
  return (
    <div className="max-w-[1640px] mx-auto shadow-lg px-4 pb-4">
      <div className="max-h-[500px] relative">
        {/* Overlay */}
        <div className="absolute w-full h-full text-gray-200 max-h-[500px] bg-black/40 flex flex-col justify-center">
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            Re<span className="text-orange-500">Stocking</span>
          </h1>
          <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            {" "}
            <span className="text-kkyellow">Made</span> Easy
          </h1>
        </div>
        <img
          className="w-full max-h-[500px] object-cover bg-kkblack"
          src="https://www.ford.ca/cmslibs/content/dam/vdm_ford/live/en_ca/ford/nameplate/transitcommercial/2023/collections/_360/oxford-white/tccv_23_xlt_ext_360_oxfordwhite_01.jpg"
          alt="/"
        />
      </div>
    </div>
  );
}

export default Hero;
