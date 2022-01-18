import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home'
import { Button, Icon } from "react-native-elements";

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
            <Stack.Navigator>
                <Stack.Screen  name="Home" component={Home} options={ButtonRight}/>
            </Stack.Navigator>
        </NavigationContainer>

    );

}

export default Router;