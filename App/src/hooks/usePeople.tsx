import React, { useState, useEffect } from 'react'
import { peopleApi } from '../api/peopleApi'
import { People } from '../interfaces/peopleInterfaces'

export const usePeople = () => {

  const [people, setPeople] = useState<People[]>([])

  const loadPeople = async (page: number) => {
    const baseUrl = `https://jsonplaceholder.typicode.com/users`;
    console.log(baseUrl);
    try{
    const { data } = await peopleApi.get<People[]>(
      baseUrl
    )
    setPeople(data)}
    catch(error){
      console.log(error);
    }
  }


  useEffect(() => {
    loadPeople(1)
  }, [])

  return { people }

}
