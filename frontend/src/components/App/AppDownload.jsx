import React from 'react'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='bg-gray-100 text-gray-800 p-10 text-center rounded-lg shadow-lg' id='app-download'>
        <p className='text-lg mb-5'>For Better Experience download <br /> CallBasket App</p>
        <div className="flex justify-center gap-5">
            <img src={assets.play_store} alt="" className="w-36 h-auto transform transition-transform duration-300 hover:scale-105" />
            <img src={assets.app_store} alt="" className="w-36 h-auto transform transition-transform duration-300 hover:scale-105" />
        </div>
    </div>
  )
}

export default AppDownload