import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../../screens/auth/Splash";
import Onboarding from "../../screens/auth/Onboarding";
import Emaillogin from "../../screens/auth/EmailLogin";
const AuthStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator  initialRouteName="Emaillogin"  screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Onboarding" component={ Onboarding} />
             <Stack.Screen name="Emaillogin" component={ Emaillogin} />
        </Stack.Navigator>
    )
}

export default AuthStack