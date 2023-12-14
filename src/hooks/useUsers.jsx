import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from './useAxiousSecure';

const useUsers = () => {

    const axiosSecure = useAxiosSecure()

    const {data:users=[],refetch} = useQuery({
        queryKey: ['users'],
        queryFn: async()=>{
            const res = await axiosSecure.get('/user')
            return res.data;
        }
      })

    return [users,refetch]
};

export default useUsers;