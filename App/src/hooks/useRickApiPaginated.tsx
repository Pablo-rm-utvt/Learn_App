import React from 'react'
import { useState, useEffect } from 'react'
import { rickApi } from '../api/rickApi'
import { Result } from '../interfaces/rickInterfaces'

export const useRickApiPaginated = () => {

  const [Character, setCharacter] = useState<Result[]>([])

  const loadCharacter= async (page: number) => {
      const baseUrl = `https://rickandmortyapi.com/api/character`;
      console.log(baseUrl);
      try{
          const { data } = await rickApi.get<{results : Result[]}>(
              baseUrl
          )
          setCharacter(data.results)}
          catch(error){
            console.log(error);
      }
  }

   useEffect(() => {
    loadCharacter(1);
  }, [])
    
  return {
    Character
  }
}
