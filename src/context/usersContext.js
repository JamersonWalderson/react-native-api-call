import React, { createContext, useEffect, useState } from "react";
import api from '../services/api';

export const UsersContext = createContext({});

const UsersProvider = ({ children }) => {
    const [users, setUsers] = useState([]);
    // console.warn(Object.keys(users));
    
    const fetchApi = async () => {
        api.get('/users')
            .then(({ data }) => {
                setUsers(data);

            })
            .catch((error) => {
                console.error("Erro na api: " + error);

            })
    }

    useEffect(()=>{
        fetchApi();

    }, [users])
        

    return (
        <UsersContext.Provider value={{users}}>
            { children }
        </UsersContext.Provider>
    )
 }

export default UsersProvider;
