import React, { createContext } from "react";

export const UsersContext = createContext({});

const UsersProvider = ({ children }) => {
    const users = {
        name: 'James',
        email: 'jamersonwalderson@gmail.com'
    };


    return (
        <UsersContext.Provider value={{users}}>
            { children }
        </UsersContext.Provider>
    )
 }

export default UsersProvider;
