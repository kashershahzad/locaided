import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../../screens/auth/Splash";
import Onboarding from "../../screens/auth/Onboarding";
import Emaillogin from "../../screens/auth/EmailLogin";
import CreateAccount from "../../screens/auth/CreateAcc";
const AuthStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator  initialRouteName="CreateAccount"  screenOptions={{
            headerShown: false,
        }}>
            <Stack.Screen name="Splash" component={Splash} />
            <Stack.Screen name="Onboarding" component={ Onboarding} />
             <Stack.Screen name="Emaillogin" component={ Emaillogin} />
             <Stack.Screen name="CreateAccount" component={ CreateAccount} />
        </Stack.Navigator>
    )
}

export default AuthStack