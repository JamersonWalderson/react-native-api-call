import React, { useContext } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { UsersContext } from "../../context/usersContext";

/**
 * Tela Home
 */
export default function ScreenHome(props) {
    
    const { users } = useContext(UsersContext);
    // console.warn(Object.keys(users));

    const UserList = ({ item: user }) => {
        // console.warn(Object.keys(user));

        return (
            <View style={ styles.item }>
                <Text style={ styles.itemText }>{ user.name }</Text>
                <Text>E-mail: { user.email }</Text>
                <Text>Telefone: { user.phone }</Text>
                <Text>Cidade: { user.address.city }</Text>
                <Text>Endereço: { user.address.street }, { user.address.suite }</Text>
            </View>
        );

    }
    return (
        <FlatList 
            keyExtractor={user => user.id.toString()}
            data={users}
            renderItem={UserList}
            
        />
    );
}

const styles = StyleSheet.create({
    item: {
        padding: 10,
        borderColor: 'gray',
        borderWidth: 1,
        margin: 10

    },
    itemText: {
        fontWeight: 'bold',
    }
})