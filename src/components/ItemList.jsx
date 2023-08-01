import React, { useEffect, useState } from 'react';
import Item from './Item';
import arrayProducts from '../json/arrayProducts.json';

const ItemList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setProducts(arrayProducts);
    };

    fetchProducts();
  }, []);

  return (
    <div>
      <h2>Productos</h2>
      {products.map((product) => (
        <Item 
        key={product.id} 
        producto={{
          productoNombre: product.nombre,
          productoPrecio: product.precio,
          productoImg: product.imagen
        }}
        />
      ))}
    </div>
  );

      }
export default ItemList;
