import React from 'react'

const Button = (props) => {
  return (
  
    <button className='bg-yellow-600 text-black font-[Poppins] py-1 px-4 rounded md:ml-2 hover:bg-black hover:b-yellow hover:text-white duration-500'>
      {props.children}
    </button>
   
  )
}

export default Button
