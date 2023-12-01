import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useUsers = () => {

    const {data:users=[],refetch} = useQuery({
        queryKey: ['user'],
        queryFn: async()=>{
            const res = await fetch('http://localhost:5000/user')
            return res.json();
        }
      })

    return [users,refetch]
};

export default useUsers;