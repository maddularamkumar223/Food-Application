import React, { useContext, useEffect, useState } from 'react'
import { Context } from '../contextapi/ContextApi'
import Nav from './Top'
import { Usercontext } from '../contextapi/Authcontextapi'


const Home = () => {

    let {foods}=useContext(Context)
    const { addToCart } = useContext(Usercontext);

  return (
    <div>
      <Nav/>
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {foods?.length >0 ? (
          foods.map((food) => (
            <div key={food.id} className="bg-white shadow-lg rounded-lg p-4 max-w-sm">
            <img src={food.img} alt={food.name} className="w-full h-48 object-cover rounded-md" />
            <h2 className="text-xl font-bold mt-2">{food.name}</h2>
            <p className="text-gray-600 mt-1">{food.dsc}</p>
            <div className="flex justify-between items-center mt-2">
              <span className="text-lg font-semibold">${food.price}</span>
              <span className="text-yellow-500">⭐ {food.rate}</span>
            </div>
            <p className="text-gray-500 text-sm mt-1">📍 {food.country}</p>
            <div className='p-2 text-center'>
            <button className="mt-3 bg-green-500 text-white px-8 py-2  rounded-md hover:bg-green-600" onClick={()=>addToCart(food)}>Add</button>
            </div>
          </div>
          ))
        ): (
          <p className="text-gray-500 text-lg text-center">No matching food found.</p>
        )}
      </div>
    </div>
    </div>
  )
}

export default Home