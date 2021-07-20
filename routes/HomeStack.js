import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/home';
import DetailsScreen from '../screens/details';
import CustomNavigationBar from '../shared/customNavigationBar';

const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator 
            initialRouteName="Home"
            screenOptions={{
                header: (props) => <CustomNavigationBar {...props} />,
            }}
        >
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
        </Stack.Navigator>
    );
}