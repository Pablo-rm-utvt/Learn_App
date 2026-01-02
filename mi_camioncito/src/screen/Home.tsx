import React from 'react'
import { View,Text } from 'react-native'
import { useUserPaginated } from '../hooks/useUserPaginated'
import { UserCard } from '../component/UserCard'
import { useLocation } from '../hooks/useLocation'

export const Home = () => {
    const {User}=useUserPaginated();

    const {location}=useLocation();
    console.log(location);

  return (
    <View>
        <Text>API</Text>
        {User.map(user=>(
            <UserCard 
                key={user.id_user}
                name_user={user.name_user}
                lastname_user={user.lastname_user}
                age={user.age}
            />
        ))
        }
    </View>
  )
}
