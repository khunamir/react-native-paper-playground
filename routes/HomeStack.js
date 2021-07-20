import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import DetailsScreen from '../screens/details';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}