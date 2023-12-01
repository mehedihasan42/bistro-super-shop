import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleLogin = () => {

    const location = useLocation()
    const navigate = useNavigate()
    const from = location.state?.from?.pathname || "/";
    const {googleLogin} = useContext(AuthContext)

    const handleGoogleLogin = () =>{
        googleLogin()
        .then(result=>{
            const loggedUser = result.user;
            const allUsers = {name:loggedUser.displayName,email:loggedUser.email}
            fetch('http://localhost:5000/user',{
              method:'POST',
              headers:{
                'content-type':'application/json'
              },
              body: JSON.stringify(allUsers)
            })
            .then(res=>res.json())
            .then(()=>{
              navigate(from,{replace:true})
            })
        })
    }

  return (
    <div>
      <div className="divider"></div>
     <div className="text-center my-4">
     <button onClick={handleGoogleLogin} className="btn btn-circle btn-outline">
        <FcGoogle className="text-2xl"/>
      </button>
     </div>
    </div>
  );
};

export default GoogleLogin;
