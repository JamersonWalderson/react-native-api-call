import React, { useContext, useState } from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";
import { Button } from "react-native-elements";
import { UsersContext } from "../../context/usersContext";

export default function ScreenForm({navigation, route}) {

    const [user, setUser] = useState(route.params ? route.params : {});

    // const ctx = useContext(UsersContext)
    // console.warn(Object.keys(ctx))
    
    // Onpress buttom
    const UserSave = () =>{
        navigation.goBack();
    }

    return (
        <View style={styles.form}>
            <Text>Nome:</Text>
            <TextInput 
                placeholder="Informe o nome"
                // onChangeText={user}
                // value={user}
                style={styles.input}
            />

            <Text>Email:</Text>
            <TextInput 
                placeholder="Informe o e-mail"
                // onChangeText={user}
                // value={user}
                style={styles.input}
            />

            <Text>URL do avatar:</Text>
            <TextInput 
                placeholder="Informe a URL do avatar"
                // onChangeText={user}
                // value={user}
                style={styles.input}
            />
            <Button 
                title="Salvar"
                onPress={UserSave}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    form: {
        padding: 12
    },
    input: {
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10
    }
});