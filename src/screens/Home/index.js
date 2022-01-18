import React, { useContext } from "react";
import { View, Text } from "react-native";
import { UsersContext } from "../../context/usersContext";

/**
 * Tela Home
 */
export default function ScreenHome(props) {
    
    const { users } = useContext(UsersContext);
    // console.warn(Object.keys(users));
    
    return (
        <View>
            <Text>Tela Home</Text>
            <Text>{users.name}</Text>
        </View>
    );
}