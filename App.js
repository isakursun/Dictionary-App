import { StatusBar } from "expo-status-bar";
import { StyleSheet} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./navigation";
import { Provider } from "react-redux";
import { store } from "./Redux/Store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StatusBar style="auto" />
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
