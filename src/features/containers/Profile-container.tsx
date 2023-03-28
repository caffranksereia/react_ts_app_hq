import React, {useEffect, useState} from 'react';
import Img from '../../components/img/Img';
import Form from '../../components/form/Form';
import { Container } from '../../_assets/container-styled';
import { ContainerImag } from '../../_assets/img-styled';
import apiMarvel from '../../config/http';
import CharactersInterface from '../../classes/interface/Characters-interface';

export default function ProfileCharacteres() {

  const [characters, setCharacters] = useState<CharactersInterface[]>([]);

  useEffect(() => {
    apiMarvel
      .get('comics/')
      .then((response) => {
        console.log(response.data.data.results);
        setCharacters(response.data.data.results);
        console.log(response.data.data.results);
        console.log(characters);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <>
      <Container>

      </Container>
    </>


  );
}
