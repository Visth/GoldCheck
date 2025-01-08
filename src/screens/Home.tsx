import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import { useTheme } from "../context/theme-context";
import Icon from 'react-native-vector-icons/FontAwesome';


export const Home = ({ navigation }: any) => {
  const translateYButton1 = useRef(new Animated.Value(-500)).current;
  const translateXButton2 = useRef(new Animated.Value(-500)).current;
  const translateXButton3 = useRef(new Animated.Value(500)).current;
  const translateYButton4 = useRef(new Animated.Value(500)).current;

  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    Animated.stagger(300, [
      Animated.timing(translateYButton1, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(translateXButton2, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(translateXButton3, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(translateYButton4, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <View
      style={[
        styles.container,
        { backgroundColor: theme === "dark" ? "#121212" : "#ffffff" },
      ]}
    >
      <Text
        style={[
          styles.header,
          { color: theme === "dark" ? "#B8860B" : "#e9c600" },
        ]}
      >
        GoldCheck
      </Text>
      <TouchableOpacity
        style={styles.themeButton}
        onPress={toggleTheme}
      >
        <Icon
          name={theme === "dark" ? "sun-o" : "moon-o"}
          size={24}
          color={theme === "dark" ? "#E0E0E0" : "#121212"}
        />
      </TouchableOpacity>
      <View style={styles.buttonRow}>
        <Animated.View style={{ transform: [{ translateY: translateYButton1 }] }}>
          <TouchableOpacity
            style={[
              styles.button,
              styles.buttonGold,
              { backgroundColor: theme === "dark" ? "#B8860B" : "#e9c600" },
            ]}
            onPress={() => navigation.navigate("Dzisiejsza cena złota")}
          >
            <Text
              style={[
                styles.buttonText,
                { color: theme === "dark" ? "#fafafa" : "#121212" },
              ]}
            >
              Sprawdź dzisiejszą cenę złota
            </Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={{ transform: [{ translateX: translateXButton2 }] }}>
          <TouchableOpacity
            style={[
              styles.button,
              styles.buttonPlatinum,
              { backgroundColor: theme === "dark" ? "#4d586a" : "#b0c4de" },
            ]}
            onPress={() => navigation.navigate("Zobacz inne metale")}
          >
            <Text
              style={[
                styles.buttonText,
                { color: theme === "dark" ? "#fafafa" : "#121212" },
              ]}
            >
              Zobacz inne metale
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
      <View style={styles.buttonRow}>
        <Animated.View style={{ transform: [{ translateX: translateXButton3 }] }}>
          <TouchableOpacity
            style={[
              styles.button,
              styles.buttonPlatinum,
              // { backgroundColor: theme === "dark" ? "#B8860B" : "#e9c600" },
              { backgroundColor: theme === "dark" ? "#4d586a" : "#b0c4de" },
            ]}
            onPress={() => navigation.navigate("Złoto na świecie")}
          >
            <Text
              style={[
                styles.buttonText,
                { color: theme === "dark" ? "#fafafa" : "#121212" },
              ]}
            >
              Złoto na świecie
            </Text>
          </TouchableOpacity>
        </Animated.View>
        <Animated.View style={{ transform: [{ translateY: translateYButton4 }] }}>
          <TouchableOpacity
            style={[
              styles.button,
              styles.buttonPlatinum,
              { backgroundColor: theme === "dark" ? "#4d586a" : "#b0c4de" },
            ]}
            onPress={() => navigation.navigate("Inwestowanie w złoto")}
          >
            <Text
              style={[
                styles.buttonText,
                { color: theme === "dark" ? "#fafafa" : "#121212" },
              ]}
            >
              Inwestowanie w złoto
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </View>
      {/* Footer Text */}
      <View style={styles.footer}>
        <Text
          style={[
            styles.footerText,
            { color: theme === "dark" ? "#E0E0E0" : "#121212" },
          ]}
        >
          &copy; FILBER
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },
  header: {
    position: 'absolute',
    top: 20,
    fontSize: 32,
    fontWeight: "bold",
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  button: {
    width: 150,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    padding: 12,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
  },
  buttonGold: {},
  buttonPlatinum: {},
  footer: {
    position: "absolute",
    bottom: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  footerText: {
    fontSize: 18,
    fontWeight: "bold",
  },
  themeButton: {
    position: "absolute",
    top: 20,
    right: 20,
    padding: 10,
    borderRadius: 50,
    backgroundColor: "transparent",
  },
});
