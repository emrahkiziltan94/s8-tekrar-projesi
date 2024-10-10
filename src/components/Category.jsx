import Card from './Card';
import { useEffect, useState } from 'react';

export default function Category(props) {
  const { productList, changeTitle } = props;

  return (
    <>
      {' '}
      {productList &&
        productList.map((product, index) => (
          <Card
            key={index}
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            changeTitle={changeTitle}
          />
        ))}{' '}
    </>
  );
}
