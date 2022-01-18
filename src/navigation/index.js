import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Icon } from "react-native-elements";
import { StyleSheet } from "react-native";
import ScreenHome from '../screens/Home';
import ScreenForm from '../screens/Form';
import colors from '../utils/colors';

/**
 * Organiza a exibição das telas
 */
const Router = (props) => {
    const Stack = createNativeStackNavigator();

    const ButtonRight = ({ navigation, route }) => {
        // console.warn(Object.keys(route));

        return ({
            title: "Lista de usuários",
            headerRight: () => (
                <Button 
                    type="clear"
                    icon={<Icon name="add" size={25} color="#fff"/>}
                    onPress={() => navigation.navigate("Form")}
                />
            )

        });
    }

    return(
            <NavigationContainer>
                <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
                    <Stack.Screen name="Home" component={ScreenHome} options={ButtonRight}/>
                    <Stack.Screen name="Form" component={ScreenForm} options={{title: "Formulário de cadastro"}} />
                </Stack.Navigator>
            </NavigationContainer>

    );

}

const screenOptions = {
    headerStyle: {
        backgroundColor: colors.headerColor
    },
    headerTintColor: colors.headerText
};

export default Router;