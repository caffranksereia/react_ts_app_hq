import React, { useState, useEffect } from 'react';
import apiMarvel from '../../config/http';
import CharactersInterface from '../../classes/interface/Characters-interface';
import { ContainerImag } from '../../_assets/img-styled';
import { ContainerInfo } from '../../_assets/form-styled';
import {ContainerGrid} from '../../_assets/containerGrid-styled';
import ButtonComponents from '../../components/button/Button';
export default function ProductList() {
  const [characters, setCharacters] = useState<CharactersInterface[]>([]);

  useEffect(() => {
    apiMarvel
      .get('comics')
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
  <ContainerGrid>
    <ButtonComponents/>
         {characters.map(
          character => {
            return(
               <p key={character.id}>

                <ContainerImag src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={`foto do ${character.name}`}  />
                  <ButtonComponents/>
                {/* <ContainerInfo>
                  <p>Descricao:</p> {character.description}
                </ContainerInfo> */}
                  </p>
                );
              })}

  </ContainerGrid>
  );
}
