import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Button, Icon } from "react-native-elements";
import { StyleSheet } from "react-native";
import Home from '../screens/Home';
import colors from '../utils/colors';


/**
 * Organiza a exibição das telas
 */
const Router = (props) => {
    const Stack = createNativeStackNavigator();

    const ButtonRight = ({navigation}) => {
        return ({
            title: "Lista de usuários",
            headerRight: () => (
                <Button 
                    type="clear"
                    icon={<Icon name="add" size={25} color="#fff"/>}
                />
            )

        });
    }

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={screenOptions}>
                <Stack.Screen  name="Home" component={Home} options={ButtonRight}/>
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