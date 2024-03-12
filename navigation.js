import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./components/Home";
import Dictionary from "./components/Dictionary";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";


const Stack = createNativeStackNavigator();

export default function Navigation() {
  const navigation = useNavigation();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="dictionary"
        component={Dictionary}
        options={{
          headerStyle: {
            backgroundColor: "#f4f1de",
          },
          headerLeft: () => (
            <TouchableOpacity onPress={()=> navigation.navigate("home")}>
              <View style={{ width: 50 }}>
                <FontAwesome5 name="xbox" size={40} color="#d62828" />
              </View>
            </TouchableOpacity>
          ),
          headerShadowVisible: false,
          headerTitleAlign: "center",
          title: "Dictionary",
          headerTitleStyle: {
            fontWeight: "bold",
            fontSize: 30,
          },
        }}
      />
    </Stack.Navigator>
  );
}
