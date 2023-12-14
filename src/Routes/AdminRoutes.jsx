import { Navigate } from "react-router-dom";
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";

const AdminRoutes = ({children}) => {

    const [isAdmin,adminLoading] = useAdmin()
    const {user,loader} = useAuth()

    if(loader || adminLoading){
        return <span className="loading loading-spinner loading-lg"></span>
    }

    if(user && isAdmin){
         return children;
    }

    return <Navigate to='/login'  />
};

export default AdminRoutes;