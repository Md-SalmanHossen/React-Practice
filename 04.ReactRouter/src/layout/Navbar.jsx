import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <header className='bg-gray-800 text-white shadow-md'>
        <div className='container mx-auto flex justify-between p-4 items-center'>
          <div className='text-lg font-bold'>
            <Link to="/">MyApp</Link>
          </div>

          <nav className='md:flex space-x-4'>
            <ul className='flex space-x-4'>
              <li><Link className='hover:bg-gray-400 hover:p-1 hover:rounded-lg ease-in duration-300' to="/">Home</Link> </li>
              <li><Link className='hover:bg-gray-400 hover:p-1 hover:rounded-lg ease-in duration-300' to="/products">Products</Link></li>
              <li><Link className='hover:bg-gray-400 hover:p-1 hover:rounded-lg ease-in duration-300' to="/contact">Contacts</Link></li>
              <li><Link className='hover:bg-gray-400 hover:p-1 hover:rounded-lg ease-in duration-300' to="/about">About</Link></li>
            </ul>
          </nav>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default Navbar;
