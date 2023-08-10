
function Card() {
  return (
    <div>
      <div className=" float-left mb-12 bg-kkwhite rounded-md shadow-md">
        <div className="my-2">
          <img src="../../assets/images/Kampalakatale Logo-02.png"></img>
          <div className="px-0-4 text-center text-xs p-3">
            <h2> Kamu Marvin</h2>
            <p className="text-black ">Founder</p>
            <p>Some text that describes me</p>
            <p>jane@example.com</p>
            <div className="w-full inline-block border-none outline-none rounded-sm  bg-kkorange  text-sm p-1 mt-4 w-100">
            <button className="">Contact</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Card;
