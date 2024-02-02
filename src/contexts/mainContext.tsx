/* eslint-disable @typescript-eslint/no-empty-function */
import { ReactNode, createContext, useState, useMemo } from "react";

interface UseProviderMainContextProps {
    children: ReactNode;
}

type MainContextProps = {
    userName: string;
    setUserName: (userName: string) => void;
    fullName: string;
    setFullName: (fullName: string) => void;
}

export const MainContext = createContext<MainContextProps>({} as MainContextProps);

const ProviderMainContext = ({ children }: UseProviderMainContextProps) => {

    const [userName, setUserName] = useState('');
    const [fullName, setFullName] = useState('');

    const contextValue = useMemo(() => ({ userName, setUserName, fullName, setFullName }), [userName, fullName]);    

    return (
        <MainContext.Provider value={contextValue}>
            {children}
        </MainContext.Provider>
    )
};

export default ProviderMainContext;