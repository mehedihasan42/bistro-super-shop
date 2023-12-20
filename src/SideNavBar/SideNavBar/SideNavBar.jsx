import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAdmin from '../../hooks/useAdmin';

const SideNavBar = () => {

  // const isAdmin = true;
  const [isAdmin] = useAdmin()
  console.log('this is a/an',isAdmin)

    return (
        <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
          <Outlet></Outlet>
          <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
        
        </div> 
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay"></label> 
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
           {
            isAdmin?<>
                <li><Link to='buys'>Purches</Link></li>
            <li><Link to='users'>All Users</Link></li>
            <li><Link to='addItem'>Add Item</Link></li>
            <li><Link to='manageItem'>Manage Item</Link></li>
            <div className="divider divider-end"></div>
            <li><Link to='/'>Home</Link></li>
            </>:
            <>
               <li><Link to='buys'>Purches</Link></li>
               <li><Link to='/'>Home</Link></li>
            <li><a>Sidebar Item 2</a></li>
            </>
           }
          </ul>  
        </div>
      </div>
    );
};

export default SideNavBar;