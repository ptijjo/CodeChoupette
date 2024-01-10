import React from 'react';
import Slide from '../components/Slide';
import { products } from '../assets/data/Data';



const Products: React.FC = () => {



  return (

    <div className='products'>
      <Slide diapo={products}/>
    </div>


  )
};

export default Products
