import styled from 'styled-components';

export const ContainerImag = styled.img.attrs(props =>({
  src:props.src,
}))`
height: 400px;
width: 350px;
paddin:4em;
margin: 80px;
border-radius: 3px;
background: yellow;
`;
