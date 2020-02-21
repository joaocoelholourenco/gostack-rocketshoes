import React from 'react';
import { MdAddShoppingCart } from 'react-icons/md';

import { ProductList } from './styles';

function Product() {
  return (
    <li>
    <img
      src="https://static.netshoes.com.br/produtos/tenis-nike-revolution-5-masculino/26/HZM-1731-026/HZM-1731-026_zoom2.jpg?ims=326x"
      alt="tenis" />
    <strong>Tenis Nike Revolution</strong>
    <span>R$199,99</span>
    <button type="button">
      <div>
        <MdAddShoppingCart size={16} color="#fff" /> 3
      </div>
      <span>ADICIONAR AO CARRINHO</span>
    </button>
  </li>
  );
}

export default function Home() {
  return (
    <ProductList>
      <Product />
      <Product />
      <Product />
      <Product />
    </ProductList>
  );
}
