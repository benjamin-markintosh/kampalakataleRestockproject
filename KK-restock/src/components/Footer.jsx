
 function Footer() {
  return (
    <div>
      <footer className="">
        <div className='p-5 bg-gray-800 text-kkwhite'>
          <div className='max-w-5xl mx-auto h-25'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
              <div className='mb-5'>
                <h4 className='text-2xl pb-4'>Company</h4>
                <p className='text-gray-500'>
                  A1245 kampala Road <br/>
                  Kakajjo house, PB 2454254 <br/>
                  Uganda <br/>
                  <strong>Phone:</strong>+256 772 601 3256 <br/>
                  <strong>Email:</strong>+info@example.com <br/>
                </p>
              </div>

              <div className='mb-5'>
                <h4 className='pb-4'>About Kampala Katale Uganda</h4>
                <ul className='text-gray-500'>
                  <li className='pb-2 hover:text-kkyellow'><a href='#'></a>Home</li>
                  <li className='pb-2 hover:text-kkyellow'><a href='#'></a>Kampala Katale Careers</li>
                  <li className='pb-2 hover:text-kkyellow'><a href='#'></a>About</li>
                  <li className='pb-2 hover:text-kkyellow'><a href='#'></a>Terms of services</li>
                  <li className='pb-2 hover:text-kkyellow'><a href='#'></a>Privacy policy</li>
                </ul>
              </div>

              <div className='mb-5'>
                <h4 className='pb-4'>Useful Links</h4>
                <ul className='text-gray-500'>
                  <li className='pb-2 hover:text-kkyellow'>How to buy on Kampala Katale</li>
                  <li className='pb-2 hover:text-kkyellow'>Payment Methods</li>
                  <li className='pb-2 hover:text-kkyellow'>Delivery</li>
                  <li className='pb-2 hover:text-kkyellow'>Delivery Timelines</li>
                  <li className='pb-2 hover:text-kkyellow'>Report a Product</li>
                  <li className='pb-2 hover:text-kkyellow'>Return Process</li>
                  <li className='pb-2 hover:text-kkyellow'>Jumia Payment Information Guidelines</li>
                </ul>
              </div>

              <div className='mb-5'>
                <h4 className='pb-2'>Join our Newsletter</h4>
                <p className='text-gray-500 pb-2'>join 23,000+ others and never miss out on new tips, tutorials, and more</p>
                <form className='flex flex-row flex-wrap'>
                  <input type="text" className='text-gray-500 w-2/3 p-2 focus:border-kkyellow'placeholder='email@example.com'/>
                  <button className='p-2 w-1/3 bg-kkyellow hover:bg-yellow-600'>Subscribe</button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className='w-full bg-gray-900 text-gray-500 px-10'>
          <div>
            <div className='text-center'>
                <div>
                  Copyright <strong><span>Kampala Katale</span></strong>. All Rights Reserved
                </div>
                <div>
                  Designed by <a href='' className='text-yellow-500'>Fortis</a>
                </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
export default Footer;