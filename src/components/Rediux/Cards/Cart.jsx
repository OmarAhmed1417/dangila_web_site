import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrementCount, incrementCount, removeFromCart } from './cartSlice ';
import './Style/card.css'

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleIncrement = (id) => {
    dispatch(incrementCount(id));
  };

  const handleDecrement = (id) => {
    dispatch(decrementCount(id));
  };

  return (
    <div>
      <h2 className='text-3xl text-brown_color  from-neutral-900 text-center'>Cards</h2>
      <div className='Product mt-32'>
        <ul className='flex justify-center items-center flex-wrap list'>
          {cart.map(product => (
            <li key={product.id} className='flex flex-col justify-center item' style={{ width: '400px' }}>
              <div className='product_imge flex justify-center items-center'>
                <img src={product.img} alt={product.name} width="300" height="300" loading='lazy'/>
              </div>
              <div className='name text-left p-3'>
                <p className='font-semibold'>{product.name} ${product.price}</p>
                <p className='text-left font-serif'>{product.description}</p>
              </div>
              <div className='flex justify-center gap-4 pt-3 text-center items-center'>
                <div>
                  <button className='bg-brown_color text-white w-20 p-0' onClick={() => handleIncrement(product.id)}>+</button>
                </div>
                <div className='count text-black bg-test flex justify-center items-center text-center'>
                  <p>{product.count || 0}</p>
                </div>
                <div>
                  <button className='w-20  bg-test2 text-white add p-0' onClick={() => handleDecrement(product.id)}>-</button>
                </div>
              </div>
              <div className='flex justify-center text-center items-center mt-6'>
                <button className='w-20 bg-black text-white add p-1' onClick={() => handleRemoveFromCart(product.id)}>Remove</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Cart;
