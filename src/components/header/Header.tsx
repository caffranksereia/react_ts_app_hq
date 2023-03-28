import React, { Component } from 'react';
import { Title, Div, Divul } from '../../_assets/header-styled';
import styled from 'styled-components';

const ShoppingCart = styled.div`
 padding: 0.5em;
  margin-top: 20px;
  border: none;
  border-radius: 3px;
  width: 150px;
  font-size: 20px;
  font-family: "Bangers",  cursive;
  color:#F0E771;
`;


export default class Header extends Component {
  render() {
    return (
      <Div>
        <Title>My Hero</Title>
        <Divul>
          <ShoppingCart onClick={()=>alert("its works")}>
            Shopping Cart
          </ShoppingCart>
        </Divul>
      </Div>
    );
  }
}
