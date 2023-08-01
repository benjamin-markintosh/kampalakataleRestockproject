function Landing() {
  return (
    <>
      <div className="w-100 min-h-12 bg-kkblack ">
        <div className="nav flex flex-wrap flex-row">
          <div className="text-kkyellow p-3 flex-1">
            <span className="text-kkwhite ">Kampala</span>Katale
          </div>
          <div className="menu text-kkwhite ">
            <ul className="flex flex-row flex-wrap p-3">
              <a href="">
                <li>Home</li>
              </a>
              <a href="">
                <li>Home</li>
              </a>
              <a href="">
                <li>Home</li>
              </a>
              <a href="">
                <li>Home</li>
              </a>
            </ul>
          </div>
        </div>
      </div>

      <div className="body-section">
        <div className="ryt"></div>
        <div className="lft">
          <div className="content">
            <div className="lyttxt">
              <p className="lyttxt">Are you a Retailer or a Wholeseller?</p>
            </div>
            <div className="boldtxt">
              <h2 className="boldtxt">Katale with us...</h2>
            </div>
            <div className="btn">
              <button className="">REGISTER NOW</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
