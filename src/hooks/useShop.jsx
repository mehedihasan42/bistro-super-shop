import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";


const useShop = () => {

    const {user} = useContext(AuthContext)

   const { data: shop=[], refetch } = useQuery({
    queryKey: ['shop',user?.email],
    queryFn: async () => {
        const res = await fetch(`http://localhost:5000/shop?email=${user?.email}`)
        return res.json()
      },
  })
  
    return [shop,refetch]
};

export default useShop;