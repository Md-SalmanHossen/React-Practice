import React from 'react';
import Home from './pages/Home';
import Product from './pages/Product';
import Contact from './pages/Contact';
import About from './pages/About';

const App = () => {
  return (

    <div>
      <Home />
      <Product/>
      <Contact/>
      <About/>
      <h1 className='text-center bg-indigo-800 p-4 font-semibold text-3xl text-white'>Router practice</h1>

    </div>
  );
};

export default App;