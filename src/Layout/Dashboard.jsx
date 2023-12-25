import {  FaHome, } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";


const Dashboard = () => {
    return (
        <div className="flex">
        {/* dashboard side bar */}
        <div className="w-64 min-h-screen bg-orange-400">
          <ul className="menu p-4">
            
             
              <>
              <li>
              <NavLink to="/dashboard/userHome">
                <FaHome></FaHome>User Home
              </NavLink>
            </li>
              <li>
              <NavLink to="/dashboard/taskManagement">
                <FaHome></FaHome>Task Management
              </NavLink>
            </li>
              <li>
              <NavLink to="/dashboard/addTask">
                <FaHome></FaHome>Add Task
              </NavLink>
            </li>
          
         
        
              </>
            
            {/* shared nav links */}
            <div className="divider"></div>
            <li>
              <NavLink to="/">
                <FaHome></FaHome>Home
              </NavLink>
            </li>
            
           
            
          </ul>
        </div>
        <div className="flex-1 p-8">
          <Outlet />
        </div>
      </div>
    );
};

export default Dashboard;