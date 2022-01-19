import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Icon } from "react-native-elements";
import { Linking, StyleSheet } from "react-native";
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

        const openUrl = () => {
            Linking.openURL("https://github.com/JamersonWalderson/react-native-screens");
        }

        return ({
            title: "Lista de usuários",
            headerRight: () => (
                <Button 
                    type="clear"
                    icon={{
                        name: 'github',
                        type: 'font-awesome',
                        size: 35,
                        color: 'white',
                      }}
                    onPress={openUrl}
                />
            )

        });
    }

    return(
            <NavigationContainer>
                <Stack.Navigator screenOptions={screenOptions}>
                    <Stack.Screen name="Home" component={ScreenHome} options={ButtonRight}/>
                    {/* <Stack.Screen name="Form" component={ScreenForm} options={{title: "Formulário de cadastro"}} /> */}
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