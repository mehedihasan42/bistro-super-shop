import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const AdminHome = () => {
    const {user} = useContext(AuthContext)
    return (
        <div>
            I am an admin, {user.displayName}
        </div>
    );
};

export default AdminHome;