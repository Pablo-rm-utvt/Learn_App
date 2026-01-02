import React from 'react'
import { useState, useEffect } from 'react'
import { Users } from '../interfaces/userInterfaces'
import { userApi } from '../api/userApi'

export const useUserPaginated = () => {
    
    const [User, setUser] = useState<Users[]>([]);

    const loadUsers = async ()=>{
        try{
            const response = await userApi.get("/");
            console.log("Response:", response.data);
            const users = response.data?.data || [];
            console.log("Users:", users);
            setUser(users);
        }catch(error){
            console.error("Error loading users:", error);
            setUser([]);
        }
    }

    useEffect(()=>{
        loadUsers();
    },[])

    return {User}
}
