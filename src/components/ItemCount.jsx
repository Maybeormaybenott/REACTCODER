import React, { useState } from 'react';


export const ItemCount = ({stock, initial, onAdd}) => {
  const [count, setCount] = useState(initial);

  const incrementar = () => {
    if (count< stock ) {
      setCount (count +1);
    }
  };

  const decrementar = () => {
    if (count > 0) {
      setCount(count -1);
    }
  };

  const handleAdd = () => {
    if(count > 0 && count <= stock) {
      onAdd(count);
    }
  };

  return (
     <div>
        <button className="m-3 btn btn-success" onClick={incrementar} disabled={count >= stock}>+</button>
        <span>{count}</span>
        <button className="m-3 btn btn-danger" onClick={decrementar} disabled={count === 0}>-</button>
        <button onClick={handleAdd} disabled={count === 0 || count > stock}>Agregar</button>
      </div>
    
  );
};

export default ItemCount;