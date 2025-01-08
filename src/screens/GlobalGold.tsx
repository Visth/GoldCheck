import React, { useEffect, useRef } from "react";
import { View, Text, StyleSheet, ScrollView, Animated } from "react-native";
import CountryFlag from "react-native-country-flag";
import { useTheme } from "../context/theme-context";

export const GlobalGold = () => {
  const { theme } = useTheme();
  const dynamicStyles = styles(theme);

  // // Animacje - useRef dla wartości opacity i translateY
  // const translateY = useRef(new Animated.Value(100)).current; // Start z dołu
  // const opacity = useRef(new Animated.Value(0)).current; // Start jako niewidoczne

  // // Funkcja inicjująca animację
  // useEffect(() => {
  //   Animated.parallel([
  //     Animated.timing(translateY, {
  //       toValue: 0, // Przesunięcie do góry
  //       duration: 800,
  //       useNativeDriver: true,
  //     }),
  //     Animated.timing(opacity, {
  //       toValue: 1, // Zmiana przezroczystości do pełnej widoczności
  //       duration: 800,
  //       useNativeDriver: true,
  //     }),
  //   ]).start();
  // }, [translateY, opacity]);

  const goldReserves = [
    { country: "Stany Zjednoczone", code: "US", tons: 8133.5 },
    { country: "Niemcy", code: "DE", tons: 3352.6 },
    { country: "Włochy", code: "IT", tons: 2451.8 },
    { country: "Francja", code: "FR", tons: 2436.0 },
    { country: "Rosja", code: "RU", tons: 2298.5 },
    { country: "Chiny", code: "CN", tons: 1948.3 },
    { country: "Szwajcaria", code: "CH", tons: 1040.0 },
    { country: "Japonia", code: "JP", tons: 846.0 },
    { country: "Indie", code: "IN", tons: 781.3 },
    { country: "Holandia", code: "NL", tons: 612.5 },
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false} style={dynamicStyles.container}>
      <View>
        <Text style={dynamicStyles.headerFirst}>Jakie kraje posiadają najwięcej złota?</Text>
        {goldReserves.map((item, index) => (
          <View key={index} style={dynamicStyles.row}>
            <CountryFlag style={dynamicStyles.flag} isoCode={item.code} size={25} />
            <Text style={dynamicStyles.text}>
              {index + 1}. {item.country} - {item.tons} ton
            </Text>
          </View>
        ))}

        <Text style={dynamicStyles.header}>Złoto 100 lat temu</Text>
        <Text style={dynamicStyles.text}>
          Sto lat temu złoto kosztowało około 20 dolarów za uncję. Było szeroko używane jako środek
          płatniczy oraz stanowiło fundament systemu walutowego opartego na złocie. W tamtym okresie
          złoto było symbolem stabilności finansowej i bogactwa.
        </Text>

        <Text style={dynamicStyles.header}>Czy na Antarktydzie jest złoto?</Text>
        <Text style={dynamicStyles.text}>
          Na Antarktydzie znajdują się zasoby złota, jednak ich dokładna ilość nie jest znana.
          Szacuje się, że pod lodowcem może kryć się kilka tysięcy ton złota. Ze względu na
          międzynarodowe traktaty, wydobycie surowców na Antarktydzie jest obecnie zakazane, aby
          chronić unikalny ekosystem tego kontynentu.
        </Text>

        <Text style={dynamicStyles.header}>Ile złota jest na świecie?</Text>
        <Text style={dynamicStyles.textLast}>
          Szacuje się, że na całym świecie wydobyto około 205 000 ton złota. Większość tego surowca
          znajduje się w formie biżuterii, rezerw banków centralnych oraz produktów przemysłowych.
          Całkowita ilość złota jest ograniczona, co czyni je cennym zasobem.
        </Text>
      </View>
    </ScrollView>
  );
};

const styles = (theme: "light" | "dark") =>
  StyleSheet.create({
    container: {
      flex: 1,
      padding: 16,
      backgroundColor: theme === "dark" ? "#121212" : "#FFFFFF",
    },
    header: {
      fontSize: 26,
      fontWeight: "bold",
      color: "#B8860B",
      marginTop: 40,
      marginBottom: 10,
    },
    headerFirst: {
      fontSize: 32,
      fontWeight: "bold",
      color: "#B8860B",
      marginTop: 10,
      marginBottom: 20,
    },
    text: {
      fontSize: 18,
      color: theme === "dark" ? "#E0E0E0" : "#333333",
      marginBottom: 8,
      lineHeight: 22,
    },
    textLast: {
      fontSize: 18,
      color: theme === "dark" ? "#E0E0E0" : "#333333",
      marginBottom: 60,
      lineHeight: 22,
    },
    row: {
      flexDirection: "row",
      alignItems: "center",
      marginBottom: 10,
    },
    flag: {
      marginRight: 15,
    },
  });
