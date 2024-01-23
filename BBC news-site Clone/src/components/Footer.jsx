
import React from 'react'

const Footer = () => {
  return (
    <div className='bg-black'>
        <hr className='mx-6' />
        <div >
            <ul className='flex p-4 gap-5 ml-3'>
                <li className='text-white font-bold hover:underline'><a href="">Terms Of Use</a></li>
                <li className='text-white font-bold hover:underline'><a href="">About the BBC</a></li>
                <li className='text-white font-bold hover:underline'><a href="">Privacy Policy</a></li>
                <li className='text-white font-bold hover:underline'><a href="">Cookies</a></li>
                <li className='text-white font-bold hover:underline'><a href="">Parental Guidelines</a></li>
            </ul>
        </div>
        <h3 className='text-white text-sm text-center'>Copyright © 2024 Saket Gupta. The BBC is not responsible for the content of external sites.</h3>
    </div>
  )
}

export default Footer
