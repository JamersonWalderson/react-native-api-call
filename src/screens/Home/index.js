import React, { createContext } from "react";
import { View, Text } from "react-native";
import UsersContext from "../../context/usersContext";

/**
 * Tela Home
 */
export default function ScreenHome() {
    
    const { dispatch } = useContext(UsersContext);
    
    return (
        <UsersContext.Provider>
            <View>
                <Text>Tela Home</Text>
            </View>
        </UsersContext.Provider>
    );
}