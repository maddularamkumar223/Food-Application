import React, { useContext, useState } from 'react'
import { Menu, X } from "lucide-react";
import { Usercontext } from '../contextapi/Authcontextapi';
import { Link } from 'react-router-dom';

const Mini = () => {
    const [isOpen, setIsOpen] = useState(false);

    let {auth,handleLogout}=useContext(Usercontext)
  return (
        <nav className="bg-white shadow-md py-4">
      <div className="container mx-auto flex justify-between items-center px-4">
        {/* Logo */}
        <h1 className="text-5xl font-bold text-red-500">ZestyBites</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <Link to="/" className="text-lg font-semibold hover:text-red-500">
            Home
          </Link>
          <Link to="/cart" className="text-lg font-semibold hover:text-red-500">
            Cart
          </Link>
          
          {auth ? <button onClick={handleLogout}><Link to="/signup" className="text-lg font-semibold hover:text-red-500" >
            logout
          </Link>
          </button>
          :<div>
          <Link to="/login" className="text-lg font-semibold p-5 hover:text-red-500">
            login
          </Link>
          <Link to="/signup" className="text-lg font-semibold hover:text-red-500">
            signup
          </Link>
          </div>
}

          
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-4 bg-white">
         <Link to="/" className="text-lg font-semibold hover:text-red-500">
            Home
          </Link>
          <Link to="/cart" className="text-lg font-semibold hover:text-red-500">
            Cart
          </Link>
          
          {auth ? <button>
            <Link to="/signup" className="text-lg font-semibold hover:text-red-500">
            logout
          </Link>
          </button>
          :<div className='flex flex-col'>
          <Link to="/login" className="text-lg font-semibold p-1 hover:text-red-500 ">
            login
          </Link>
          <Link to="/signup" className="text-lg font-semibold p-1 hover:text-red-500 ">
            signup
          </Link>
          </div>
}
        </div>
      )}
    </nav>
  )
}

export default Mini