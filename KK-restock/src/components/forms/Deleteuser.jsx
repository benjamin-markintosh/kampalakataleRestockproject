function Deleteuser() {
  const profileInfo = {
    Firstname: "Mugumya",
    Lastname: "Benjamin",
    Email: "benjaminokiza@gmail.com",
    Tel: "0770840163",
    Address: "Ntinda-Kampala",
    Tin: "099090939N",
    WorkTel: "0770840163",
    BusinessAddress: "Kampala",
    BusinessDesc:
      "We Deal in Importation and Exportation of Tech Appliances straight fro certified and Authorised Manufacturers",
  };
  return (
    <div className=" w-3/4 justify-center items-center ">
      <div className="w-full  flex justify-center pt-8">
        <div className="profilepic w-32 h-32 justify-center flex bg-red-200/20">
          <h2 className="text-center font-bold text-kkblack/50 flex items-center">
            Profile Photo
          </h2>
        </div>
      </div>
      <form className=" w-auto   items-center  px-10 pb-8 pt-2 lg:px-32">
        <h1 className=" text-center font-bold  px-4 py-4">Edit Profile</h1>
        <div className="names flex justify-between gap-4 py-2">
          <label className="label" htmlFor="Firstname">
            Firstname
          </label>
          <input
            value={profileInfo.Firstname}
            type="text"
            name="Firstname"
            className="inputTextInactive "
            id="Firstname"
          />
          <label className="label" htmlFor="Lastname">
            Lastname
          </label>
          <input
            value={profileInfo.Lastname}
            type="text"
            name="Lastname"
            className="inputTextInactive"
            id="Lastname"
          />
        </div>
        <div className="email-title flex justify-between gap-4 py-4">
          <label className="label" htmlFor="Email">
            Email
          </label>
          <input
            value={profileInfo.Email}
            type="text"
            name="Email"
            className="inputTextInactive"
            id="Email"
          />
          <label className="label" htmlFor="Tel">
            Tel
          </label>
          <input
            value={profileInfo.Tel}
            type="text"
            name="Tel"
            className="inputTextInactive"
            id="Tel"
          />
        </div>
        <div className="busiiness flex justify-between gap-4 py-2">
          <label className="label" htmlFor="Address">
            Address
          </label>
          <input
            value={profileInfo.Address}
            type="text"
            name="Address"
            className="inputTextInactive"
            id="Address"
          />
        </div>
        <div>
          <h1 className=" text-center font-bold  px-4 py-6">
            Business Details
          </h1>
        </div>
        <div className="tin-worktel flex justify-between gap-4 py-2">
          <label className="label" htmlFor="Tin">
            Tin
          </label>
          <input
            value={profileInfo.Tin}
            type="text"
            name="Tin"
            className="inputTextInactive"
            id="Tin"
          />
          <label className="label" htmlFor="WorkTel">
            Work Tel
          </label>
          <input
            value={profileInfo.WorkTel}
            type="text"
            name="WorkTel"
            className="inputTextInactive"
            id="WorkTel"
          />
        </div>
        <div className="busiiness address flex justify-between gap-4 py-4">
          <label className="label" htmlFor="BusinessAddress">
            Business Address
          </label>
          <input
            value={profileInfo.BusinessAddress}
            type="text"
            name="BusinessAddress"
            className="inputTextInactive"
            id="BusinessAddress"
          />
        </div>
        <div className="flex justify-between gap-4 py-2">
          <label className="label" htmlFor="BusinessDesc">
            Business Description
          </label>
          <textarea
            value={profileInfo.BusinessDesc}
            type="text"
            name="BusinessDesc"
            className="flex-1 rounded-lg text-kkblack/50  border-none ring-2 ring-kkblack/25 cursor-not-allowed"
            id="BusinessDesc"
            rows="2"
          ></textarea>
        </div>
        <div className="button flex justify-center pt-2">
          <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-4 rounded-full w-64">
            Delete Profile
          </button>
        </div>
      </form>
    </div>
  );
}

export default Deleteuser;
