import Container from 'react-bootstrap/Container';
import React from 'react';
import ItemList from './ItemList';

export const ItemListContainer = () => {
  return (
    <Container>
    <div>
      <ItemList />
    </div>
    </Container>
  );
};

export default ItemListContainer;
