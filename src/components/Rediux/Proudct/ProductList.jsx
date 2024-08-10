import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { addToCart, decrementCount } from '../Cards/cartSlice ';
import './styleproduct/Productlist.css'

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get('/back/data.json')
      .then(response => setProducts(response.data))
      .catch(error => console.error('Error fetching the products:', error));
  }, []);

  const handleAddToCart = (product) => {
    const updatedProduct = { ...product, count: (product.count || 0) + 1 };
    const updatedProducts = products.map(p => 
      p.id === product.id ? updatedProduct : p
    );
    setProducts(updatedProducts);
    dispatch(addToCart(updatedProduct)); 
  };

  const handleRemoveFromCart = (product) => {
    if (product.count >= 1) {
      const updatedProduct = { ...product, count: product.count - 1 };
      const updatedProducts = products.map(p => 
        p.id === product.id ? updatedProduct : p
      );
      setProducts(updatedProducts);
      dispatch(decrementCount(product.id)); 
      }
  };

  return (
    <div>
      <div className='Our'>

           <h2 className='text-3xl text-brown_color from-neutral-900 text-center'>Products List</h2>
      </div>
  
      <div className='Product mt-6'>
      <ul className='flex justify-center flex-wrap  items-center list '>
        {products.map(product => (
          <li key={product.id} className='flex flex-col justify-center flex-wrap item' >







            




            <div className='product_imge flex justify-center items-center '>
            <img src={product.img} alt={product.name} width="300" height="300" loading='lazy'/>
            </div>

            <div className=' name  text-left p-3'>
            <p className='font-semibold  '>{product.name}  ${product.price}</p>
            <p className='text-left font-serif'>{product.desciption} </p>
            </div>
            <div className='flex justify-center gap-4 pt-3 text-center items-center'>
              <div>
            <button className='p-2 bg-brown_color text-white' onClick={() => handleAddToCart(product)}>Add to Cart</button>
              </div>


            <div className='count text-black bg-test flex justify-center items-center text-center'>
            <p> {product.count || 0}</p>
            </div>


            <div>
            <button className='p-2 bg-test2 text-white add' onClick={() => handleRemoveFromCart(product)}>Remove from Cart</button>
            </div>


            </div>



          </li>
        ))}
      </ul>
      </div>
    </div>
  );
};

export default ProductList;