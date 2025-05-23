import { useContext } from "react";
import AuthContex from "../context/AuthContext";

const useAuth = () => {
    const context = useContext(AuthContex);
    return context;   
}

export default useAuth;
