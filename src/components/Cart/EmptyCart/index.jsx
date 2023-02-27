import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

const EmptyCart = () => {
  const navigate = useNavigate();
  return (
    <div className='emptyCart'>
      
      <h1>Your cart is empty...</h1>
      <button onClick={() => navigate('/home')}>
        <i className='fas fa-long-arrow-alt-left'></i> Shop Now
      </button>
    </div>
  );
};

export default EmptyCart;




