import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { NavigationContainer } from "@react-navigation/native";
import { Provider as PaperProvider, DefaultTheme as PaperDefaultTheme } from 'react-native-paper';

import About from "../screens/about";
import HomeStack from "./HomeStack";

const CombinedDefaultTheme = {
    ...PaperDefaultTheme,
    ...NavigationDefaultTheme
};

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
    return (
        <PaperProvider theme={CombinedDefaultTheme}>
            <NavigationContainer theme={CombinedDefaultTheme}>
                <Drawer.Navigator>
                    <Drawer.Screen name="Home" component={ HomeStack } />
                    <Drawer.Screen name="About" component={ About } />
                </Drawer.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}