import React, { useRef, useState } from "react";
import {
  Text,
  View,
  ActivityIndicator,
  Image,
  Button,
  Alert,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import GameScreen from "./src/screens/GameScreen";
import HomeScreen from "./src/components/HomeScreen";

const Stack = createStackNavigator();

// function MyHeader() {
//   return (
//     <View style={{ marginHorizontal: 40, marginVertical: 60 }}>
//       <Text style={{ fontWeight: "bold", fontSize: 24, marginBottom: 30 }}>
//         Test App
//       </Text>
//       {/* <ActivityIndicator
//         size="large"
//         color="#c1262c"
//         style={{ marginBottom: 30 }}
//       /> */}
//     </View>
//   );
// }

// function MyFooter() {
//   const [text, setText] = useState();
//   return (
//     <View>
//       <View
//         style={{
//           borderWidth: 2,
//           borderColor: "black",
//           padding: 20,
//           marginBottom: 30,
//         }}
//       >
//         <Text>Hello again!</Text>
//       </View>
//       <View>
//         <TextInput
//           style={{ height: 40, margin: 12, borderWidth: 1 }}
//           type="text"
//           value={text}
//           onChangeText={setText}
//         />
//       </View>
//       <Button
//         onPress={() => Alert.alert(text)}
//         title="Learn More"
//         color="#c1262c"
//       />
//     </View>
//   );
// }

export default function App() {
  const randomNum = useRef(Math.random()).current;

  return (
    // <FlatList
    //   ListHeaderComponent={MyHeader}
    //   data={[0, 1, 2, 3, 4]}
    //   renderItem={({ item }) => {
    //     return (
    //       <TouchableOpacity
    //         onPress={() => Alert.alert(`You pressed image #${item + 1}`)}
    //       >
    //         <Image
    //           source={{
    //             uri: `https://picsum.photos/500/300?random=${randomNum + item}`,
    //           }}
    //           style={{ width: "100%", height: 160, marginBottom: 30 }}
    //         />
    //       </TouchableOpacity>
    //     );
    //   }}
    //   keyExtractor={(item) => String(item)}
    //   ListFooterComponent={MyFooter}
    // />
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: "#f4511e",
          },
          headerTintColor: "#fff",
          headerTitleAlign: "center",
        }}
        options={{ title: "Welcome!" }}
      >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Game" component={GameScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
