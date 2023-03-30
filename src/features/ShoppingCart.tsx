import React from 'react';
import { Container } from '../_assets/container-styled';
import ShoppingCartContainer from './containers/ShoppingCart-container';
import Header from '../components/header/Header';

export default function ShoppingCart() {
  return (
    <Container>
      <Header/>
      <ShoppingCartContainer/>
    </Container>
  );
}
