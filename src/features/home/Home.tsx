import React from 'react';
import Header from '../../components/header/Header';
import ProductList from '../containers/ProductList-container';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
* {
  margin:0;
  padding:0;
  box-sizing: border-box;
  outline:0;
  font-family: 'Marvel', sans-serif;
}
`
export default function Home() {
  return (
    <>
    <Header/>
    <GlobalStyle/>
    <ProductList />
    </>
  );
}
