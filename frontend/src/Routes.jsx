import React, { useEffect } from "react";

import {useNavigate, useRoutes} from 'react-router-dom'

//Pages List
import Dashboard from "./components/dashboard/Dashboard";

import Profile from "./components/user/Profile";

import Login from "./components/auth/Login";

import Signup from "./components/auth/Signup";

//Auth Context
import { useAuth } from "./authContext";

const ProjectRoutes = ()=>{
const {CurrentUser, setCurrentUser} = useAuth();
const navigate = useNavigate();

useEffect(()=>{
const userIdFormStorage = localStorage.getItem("userId");

if(userIdFormStorage && !CurrentUser){
    setCurrentUser(userIdFormStorage);
}

if(!userIdFormStorage && !["/auth", "/signup"].includes(window.location.pathname))
{
    navigate("/auth");
}

if(userIdFormStorage && window.location.pathname=='/auth'){
    navigate("/");
}
}, [CurrentUser, navigate, setCurrentUser()]);

let element = useRoutes([
{
    path:"/",
    element:<Dashboard/>
},
{
    path:"/auth",
    element:<Login/>
},
{
    path:"/signup",
    element:<Signup/>
},
{
    path:"/profile",
    element:<Profile/>
}
]);

return element;
}

export default ProjectRoutes;