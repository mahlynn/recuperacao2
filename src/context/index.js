import {useState, createContext} from "react";

export const IdContext = createContext();

export const IdProvider = () => {
    const [id, setId] = useState(0);

    return(
        <IdContext.Provider value={{id, setId}}>
            {children}
        </IdContext.Provider>
    );
};