import { useEffect, useState } from "react";
import useAxiosSecure from "./useAxiousSecure";

const useMenu = () => {
  const [menu, setMenu] = useState([]);
  const axiosSecure = useAxiosSecure()

  useEffect(() => {
    fetch("http://localhost:5000/menu")
      .then(res => res.json())
      .then((data) => {
        setMenu(data);
      });
  }, []);

  return [menu];
};
export default useMenu;
