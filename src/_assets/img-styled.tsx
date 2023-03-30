import styled from 'styled-components';

export const Imag = styled.img.attrs(props =>({
  src:props.src,
}))`
height: 300px;
width: 100%;
border-radius: 3px;
`;

export const ContainerImag = styled.div`
display: flex;
height: 300px;
width: 600px;
border-radius: 3px;
background: yellow;
`
