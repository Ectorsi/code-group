import { useContext } from "react";
import { MainContext } from "../contexts/mainContext";


export const useMainContext = () => {
    const context = useContext(MainContext);    
    return context;
}

export default useMainContext;