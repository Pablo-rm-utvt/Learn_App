import { useState } from "react"

export const useCounter=()=>{

    const [count, setcount]=useState(10)

    const incrementar=(valor:number)=>{
        setcount(count+valor);
    };

    const decrementar=(valor:number)=>{
        (count<=0)? setcount(count-0):setcount(count-valor);  
        //si el contador (tiene valor cualquiera) es igual o menor que 0 no se va a restar nada
        //pero si el contador es mayor a 0 va a restar de 1 en 1
    };
    const reiniciar=()=>{
       setcount(10)
    }


    return{
        //propiedades
        count,

        //funciones

        incrementar,decrementar,reiniciar

    }
}