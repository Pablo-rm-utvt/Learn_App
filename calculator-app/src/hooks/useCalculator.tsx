import { useEffect, useRef, useState } from "react"

enum Operator {
    sumar="+",
    restar='-',
    dividir='/',
    multiplicar="x"
}



export const useCalculator =()=>{
    const [formula, setformula] = useState("0");

    const [number, setnumber] = useState("0");

    const [previus, setprevius] = useState("0");

    const lastOperation = useRef<Operator>(undefined);

    useEffect(()=>{
         const result=calculateResul();
            setprevius(`${result}`)
    },[formula])


    useEffect(() => {
        if(lastOperation.current){
            const firstFormula=formula.split(' ').at(0);
            setformula(`${firstFormula} ${lastOperation.current} ${number}`)
        } else{
            setformula(number)
        }
    }, [number])

    const calculateResul=()=>{
        const[firstValue, operation, secondValue]=formula.split(' ')

        const num1= Number(firstValue);
        const num2= Number(secondValue);

        if (isNaN(num2)) return num1;

        switch (operation){
            case Operator.sumar:
                return num1+num2;
            case Operator.restar:
                return num1-num2;
            case Operator.multiplicar:
                return num1*num2;
            case Operator.dividir:
                return num1/num2;
            default:
                throw new Error("Operación no valida")
        }
    }

    const clearBox =()=>{
        setformula("0");
        setnumber("0");
        setprevius("0");
        lastOperation.current=undefined;
    }


    const changeding=()=>{
        if (number.includes("-")){
            return setnumber(number.replace("-",""))
        }
        return setnumber("-"+number)
    }

    const deletelast=()=>{

        let negative="";
        let temp=number;
        if (number.includes("-")){
            negative="-";
            temp=number.substring(1);
        }
        if (temp.length>1){
            setnumber(negative+temp.slice(0,-1));
        }else{
            setnumber("0");
        }
    }

    const setLastNumber=()=>{
        if (number.endsWith(".")){
            number.slice(0,-1)
        }
        setprevius(number)
        setnumber("0")
    }

    const divideOperation=()=>{
        setLastNumber()
        lastOperation.current=Operator.dividir
    }

    const SumaOperation=()=>{
        setLastNumber()
        lastOperation.current=Operator.sumar
    }
    const restOperation=()=>{
        setLastNumber()
        lastOperation.current=Operator.restar
    }
    const multOperation=()=>{
        setLastNumber()
        lastOperation.current=Operator.multiplicar
    }


    const buildNumber = (numberString: string)=>{
        if (number.includes('.') && numberString === '.') return;
        if (number.startsWith('0') || number.startsWith('-0')) {
            if (numberString === '.') {
                return setnumber(number + numberString);
            }
            if (numberString === '0' && number.includes('.')) {
                return setnumber(number + numberString);
            }
            if (numberString !== '0' && !number.includes('.')) {
                return setnumber(numberString);
            }
            if (numberString === '0' && !number.includes('.')) {
                return;
            }
        }
        setnumber(number + numberString);
    }

    const endEsult = ()=>{
        const final=calculateResul();
        setformula(`${final}`)

        lastOperation.current=undefined;
        setprevius("0");
    }
    return {
        //props
        formula,
        number,
        previus,

        //methods
        endEsult,
        SumaOperation,
        restOperation,
        multOperation,
        divideOperation,
        deletelast,
        changeding,
        clearBox,
        buildNumber 
    }
}