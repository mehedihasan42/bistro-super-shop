import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiousSecure";

const useAdmin = () => {

    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()
    const { data:isAdmin, isLoading:adminLoading } = useQuery({
        queryKey: ['isAdmin',user?.email],
        queryFn: async() =>{
            const res = await axiosSecure.get(`/user/admin/${user?.email}`)
            return res.data.admin
        }
      })

    return [isAdmin,adminLoading]
};

export default useAdmin;