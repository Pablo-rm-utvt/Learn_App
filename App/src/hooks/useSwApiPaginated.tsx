import React from 'react'
import { useEffect, useState } from 'react'
import { Personaje } from '../interfaces/swInterfaces'
import { swApi } from '../api/swApi';


export const useSwApiPaginated = () => {

    const [personaje, setpersonaje] = useState<Personaje[]>([]);

    const loadPersonajes= async (page: number) =>{

        const BaseUrl="https://swapi.info/api/people";
        try{
            const {data}= await swApi.get<{results: Personaje[]}>(
                BaseUrl
            )
            setpersonaje(data.results);
        }
        catch(error){
                console.log(error);
            }
    }


   useEffect(() => {
    loadPersonajes(1);
  }, [])



  return {personaje}
}
