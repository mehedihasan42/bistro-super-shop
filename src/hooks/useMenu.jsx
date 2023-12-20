import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiousSecure";
import { useQuery } from "@tanstack/react-query";

const useMenu = () => {

  const { data:menu=[], refetch } = useQuery({
    queryKey: ['repoData'],
    queryFn: async() =>{
      const res = await fetch('http://localhost:5000/menu')
      return res.json()
    }
  })

  // useEffect(() => {
  //   fetch("http://localhost:5000/menu")
  //     .then(res => res.json())
  //     .then((data) => {
  //       setMenu(data);
  //     });
  // }, []);

  return [menu,refetch];
};
export default useMenu;
