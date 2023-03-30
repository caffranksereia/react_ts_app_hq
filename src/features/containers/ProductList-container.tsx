import React, { useState, useEffect } from 'react';
import apiMarvel from '../../config/http';
import CharactersInterface from '../../classes/interface/Characters-interface';
import { ContainerImag, Imag } from '../../_assets/img-styled';
import {ContainerGrid} from '../../_assets/containerGrid-styled';
import {Button, Component } from '../../_assets/button-styled';
import { ContainerInfo } from '../../_assets/form-styled';
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
          {characters.map(
          character => {
            return(
               <p key={character.id}>

                <ContainerImag>
                    <Imag src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={`foto do ${character.name}`}  />

        <ContainerInfo>
            <p>{character.description}</p>
        </ContainerInfo>
          <Component>
         <Button> Comprar</Button>
      </Component>
    </ContainerImag>

                  </p>
                );
              })}

  </ContainerGrid>
  );
}
