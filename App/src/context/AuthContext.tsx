import React, { PropsWithChildren, useState } from 'react'
import { createContext, useContext, useEffect } from 'react'

enum AuthStatus{ //generamos un enum donde hay diferentes estados de autenticacion
'checking'='checking',  
'authenticated'='authenticated' , 
'unauthenticated'='unauthenticated'
}

interface User{
    name:string;
    email:string;
}

interface AuthState{
    status: AuthStatus;
    token?:string;
    user?:User;
    isAuthenticated: boolean;
    ischecking: boolean;

    //metodos
    login:(email:string, password:string) => void;
    logout:() => void,

} //creamos las propiedades del estado del contexto


export const AuthContext = createContext({} as AuthState);

export const useAuthContext = ()=> useContext(AuthContext)

export const AuthProvider=({children}:PropsWithChildren)=>{
    
    const [status, setstatus] = useState(AuthStatus.checking)
    const [user, setuser] = useState<User>()
    useEffect(() =>{
        setTimeout(()=>{
            setstatus(AuthStatus.unauthenticated)
        }, 1500);
    },[])

    const login=(emai:string, password:string)=>{
        setuser({
            name:"Pablo",
            email:emai
        })
        setstatus(AuthStatus.authenticated)
    }

    const logout=()=>{
        setuser(undefined);
        setstatus(AuthStatus.unauthenticated);
    }
    return(
        <AuthContext.Provider
         value={{

                status:status,
                user:user,

                //getter
                ischecking:status===AuthStatus.checking,
                isAuthenticated:status===AuthStatus.authenticated,
                login,
                logout,
                }}>
            {children}
        </AuthContext.Provider>
        //aqui regresa un children, por eso eto debe ir en la parte superior de la aplicacion
        //el valor del estado es hola:"mundo"
    );

}