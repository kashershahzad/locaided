import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Splash from "../../screens/auth/Splash";
import Onboarding from "../../screens/auth/Onboarding";
import Emaillogin from "../../screens/auth/EmailLogin";
import CreateAccount from "../../screens/auth/CreateAcc";
import PhoneNumber from "../../screens/auth/PhoneNumber";
import Verify from "../../screens/auth/Verify";
import Locationaccess from "../../screens/auth/Locationaccess";
import Ready from "../../screens/auth/Ready";
import PersonalInformation from "../../screens/profilesetup/PersonalInformation";
import Avtar from "../../screens/profilesetup/Avtar";
import PhoneVerify from "../../screens/profilesetup/PhoneVerify";
import Otp from "../../screens/profilesetup/Otp";
const AuthStack = () => {
    const Stack = createNativeStackNavigator();
    return (
        <Stack.Navigator  initialRouteName="Ready"  screenOptions={{
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
             <Stack.Screen name="PersonalInformation" component={ PersonalInformation} />
             <Stack.Screen name="Avtar" component={ Avtar} />
             <Stack.Screen name="PhoneVerify" component={ PhoneVerify} />
             <Stack.Screen name="Otp" component={ Otp} />
        </Stack.Navigator>
    )
}

export default AuthStack