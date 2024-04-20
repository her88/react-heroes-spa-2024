import { useContext } from "react";
import { AuthContext } from "../auth/context/AuthContext";
import { Navigate, useLocation } from "react-router-dom";

export const PublicRoute = ({children}) => {

    const { logged } = useContext(AuthContext);
    const { pathname, search } = useLocation();

    return (!logged)
        ? children
        : <Navigate to="/marvel"/>
    
}