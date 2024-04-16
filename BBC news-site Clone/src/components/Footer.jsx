
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black'>
        <hr className='mx-6' />
        <div >
            <ul className='flex p-4 gap-5 ml-3'>
                <li className='text-white text-[9px] md:text-[18px] font-bold hover:underline'><a href="">Terms Of Use</a></li>
                <li className='text-white font-bold  text-[9px] md:text-[18px] hover:underline'><a href="">About the BBC</a></li>
                <li className='text-white font-bold  text-[9px] md:text-[18px] hover:underline'><a href="">Privacy Policy</a></li>
                <li className='text-white font-bold  text-[9px] md:text-[18px] hover:underline'><a href="">Cookies</a></li>
                <li className='text-white font-bold  text-[9px] md:text-[18px] hover:underline'><a href="">Parental Guidelines</a></li>
            </ul>
        </div>
        <h3 className='text-white text-[9px] px-5 md:text-sm text-center'>Copyright © 2024 Saket Gupta.</h3>
        <p className='text-white text-[9px] text-center md:text-sm'> The BBC is not responsible for the content of external sites.</p>
    </div>
  )
}

export default Footer
