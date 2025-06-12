import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../../screens/auth/Splash";
import Onboarding from "../../screens/auth/Onboarding";
import Emaillogin from "../../screens/auth/EmailLogin";
import CreateAccount from "../../screens/auth/CreateAcc";
import PhoneNumber from "../../screens/auth/PhoneNumber";
import Verify from "../../screens/auth/Verify";
import Locationaccess from "../../screens/auth/Locationaccess";
import Ready from "../../screens/auth/Ready";
const AuthStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator  initialRouteName="Splash"  screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Onboarding" component={ Onboarding} />
             <Stack.Screen name="Emaillogin" component={ Emaillogin} />
             <Stack.Screen name="CreateAccount" component={ CreateAccount} />
             <Stack.Screen name="PhoneNumber" component={ PhoneNumber} />
             <Stack.Screen name="Verify" component={ Verify} />
             <Stack.Screen name="Locationaccess" component={ Locationaccess} />
             <Stack.Screen name="Ready" component={ Ready} />
        </Stack.Navigator>
    )
}

export default AuthStack