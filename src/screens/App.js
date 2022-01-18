import React from "react";
import { Text, View } from "react-native";
import Navigation from '../navigation'
import UsersContext from '../context/usersContext';

/**
 * Este arquivo é responsavel por organizar os context e disponibilizá-los para a aplicação
 */
const App = () => {

    return (
        <UsersContext>
            <Navigation />
        </UsersContext>
    );
}

export default App;