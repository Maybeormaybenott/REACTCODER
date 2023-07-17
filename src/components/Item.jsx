import React from 'react';
import Container from 'react-bootstrap/Container';
import { ItemCount } from './ItemCount';

const Item = ({ producto: {productoNombre, productoPrecio, productoImg}}) => {
  const handleAddToCart = (count) => {
    console.log(`Agrego ${count} al carrito`);
  };

  return (
    <Container className='container-sm'>
      <div className='container-sm producto'>
        <h1 className='producto-titulo'>{productoNombre}</h1>
        <div className='producto-info'>
          <h2 className='producto-precio'>${productoPrecio}</h2>
          <div className='producto-img'>
            <img src={productoImg} alt={productoNombre} />
          </div>
          <ItemCount stock={10} initial={1} onAdd={handleAddToCart} />
        </div>
      </div>
    </Container>
  );
};

export default Item;
