import React from "react";
import { useState, useEffect } from "react";
import { Location } from "../interfaces/locationInterfaces";
import { locationApi } from "../api/locationApi";

export const useLocationPaginated = () => {

    const [location, setlocation] = useState<Location[]>([]);

    const loadLocation = async() => {
       const { data } = await locationApi.get<({results : Location[]})>("/")
        setlocation(data.results);

    }

    useEffect(()=>{
        loadLocation();
    }, [])

    return {location}
}