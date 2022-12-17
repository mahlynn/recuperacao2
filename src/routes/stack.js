import React from "react";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from "../screens/Home/index";
import { Cadastro } from "../screens/Cadastro/index";
import { Listar } from "../screens/Listar/index";

const { Screen, Navigator } = createNativeStackNavigator();

export function StackRoutes() {
    return (
        <Navigator
            screenOptions={{
                headerShown: false,
            }}>

            <Screen
                // options={{ headerShown: true }}
                name="Home"
                component={Home}
            />

            <Screen
                name="Cadastro"
                component={Cadastro}
            />

            <Screen
                name="Listar"
                component={Listar}
            />
        </Navigator>
    );
};