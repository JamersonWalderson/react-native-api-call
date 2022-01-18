import React, { createContext, useReducer } from "react";
// import api from '../services';

const initialState = [];
const UsersContext = createContext({});

export const UsersProvider = (props) => {

    function reducer(state, action) {

    }


    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <UsersContext.Provider value={ { state, dispatch } }>
            {props.children}
        </UsersContext.Provider>
    );
}

export default UsersContext;
