import Team from '../components/Team'

function AboutDetails() {
  return (
    <div className='border-box'>
      <div className="pt-12 text-center  bg-slate-600">
        <h1 className="text-2xl text-kkwhite font-bold">About Us </h1>
        <p className="p-2 text-yellow-100">
          Layisi is a National tech company that is established in the central
          region of kampala district in uganda .
        </p>
        <p className="p-2 text-yellow-100">
          It is specialised in e-commerce,retail, wholesale, internet and
          technology. <br />
          It also allows you to source products from National suppliers all from
          the convenience of your mobiles, as well as find suppliers from all
          over the country.
        </p>
      </div>
      <div className='mt-16'>
        <Team/>
      </div>
    </div>
  );
}
export default AboutDetails;
