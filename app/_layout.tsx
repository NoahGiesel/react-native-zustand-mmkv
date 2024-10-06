import * as React from "react";
import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import "react-native-reanimated";

import { SafeAreaView } from "react-native-safe-area-context";
import { exampleStore } from "@/src/store/example";

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const { count, setCount } = exampleStore();

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: "#f5f5f5" }]}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Counter App</Text>
      </View>

      {/* Counter Display */}
      <View
        style={[
          styles.counterWrapper,
          {
            backgroundColor: "rgba(255,255,255,0.9)",
          },
        ]}
      >
        <Text style={styles.counterText}>{count}</Text>
      </View>

      {/* Buttons */}
      <View style={styles.buttonsWrapper}>
        <TouchableOpacity
          style={[styles.button, styles.decrementButton]}
          onPress={() => setCount(count - 1)}
        >
          <Text style={styles.buttonText}>- Decrement</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.button, styles.incrementButton]}
          onPress={() => setCount(count + 1)}
        >
          <Text style={styles.buttonText}>+ Increment</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  header: {
    backgroundColor: "rgba(0,0,0,0.1)",
    paddingVertical: 20,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 40,
    width: "100%",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  headerText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333",
  },
  counterWrapper: {
    paddingVertical: 40,
    paddingHorizontal: 50,
    borderRadius: 15,
    marginBottom: 30,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  counterText: {
    fontSize: 60,
    fontWeight: "bold",
    color: "#333",
  },
  buttonsWrapper: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
  button: {
    flex: 1,
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 4,
  },
  incrementButton: {
    backgroundColor: "#4CAF50",
  },
  decrementButton: {
    backgroundColor: "#F44336",
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
});
