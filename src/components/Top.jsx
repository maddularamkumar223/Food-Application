import React, { useContext } from 'react'
import { Context } from '../contextapi/ContextApi';

const Nav = () => {

  let {search,handlechange}=useContext(Context)
  
  return (
    <div className="h-3/4 bg-gray-800">
      {/* Hero Section (Zomato Image) */}
      <div className="w-full h-96 bg-cover bg-center flex items-center justify-center" style={{backgroundImage: "url('https://b.zmtcdn.com/web_assets/81f3ff974d82520780078ba1cfbd453a1583259680.png')",}} >
      <div className='flex flex-col items-center justify-center'>
      <h1 className="text-white text-7xl font-bold bg-opacity-100 px-4 py-2 rounded-lg">
      ZestyBites
      </h1>
      <div className='text-gray-400 text-xl font-bold'>Discover the best food & place your order.....</div>
      {/* Search Bar */}
      <div className="flex justify-center  py-6">
        <input
          type="text"
          placeholder="Search you dish. . . . . ."
          className="sm:w-48 md:w-64 lg:w-[600px] p-3 bg-white text-black border rounded-lg shadow-sm focus:outline-none"
          value={search}
          onChange={handlechange}
        />
      </div>
      </div>
      </div>
      

      

      
    </div>
  )
}

export default Nav