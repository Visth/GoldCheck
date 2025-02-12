import React, { useRef, useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
  TextInput,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { useTheme } from "../context/theme-context";

export const OtherMetals = ({ navigation }: any) => {
  const { theme } = useTheme();

  const allMetals = [
    { name: "Platyna", price: "$1,050" },
    { name: "Srebro", price: "$25" },
    { name: "Rod", price: "$14,500" },
    { name: "Paladium", price: "$1,800" },
    { name: "Uran", price: "$50" },
    { name: "Kobalt", price: "$32" },
    { name: "Cyna", price: "$26" },
    { name: "Cynk", price: "$1.20" },
    { name: "Miedź", price: "$3.80" },
    { name: "Aluminium", price: "$1.10" },
    { name: "Neodym", price: "$500" },
  ];

  const [searchQuery, setSearchQuery] = useState("");
  const [filteredMetals, setFilteredMetals] = useState(allMetals);

  useEffect(() => {
    setFilteredMetals(
      allMetals.filter((metal) =>
        metal.name.toLowerCase().startsWith(searchQuery.toLowerCase())
      )
    );
  }, [searchQuery]);

  const animations = useRef(allMetals.map(() => new Animated.Value(0))).current;

  useEffect(() => {
    Animated.stagger(
      100,
      animations.map((anim) =>
        Animated.timing(anim, {
          toValue: 1,
          duration: 500,
          useNativeDriver: true,
        })
      )
    ).start();
  }, [animations]);

  const dynamicStyles = styles(theme);

  return (
    <LinearGradient
      colors={
        theme === "dark" ? ["#121212", "#4d586a"] : ["#eed3a3", "#efefef"]
      }
      style={dynamicStyles.gradientBackground}
    >
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={dynamicStyles.container}
      >
        <Text style={dynamicStyles.header}>Ceny Metali</Text>
        <Text style={dynamicStyles.smallText}>
          Kliknij na metal, aby wyświetlić szczegóły
        </Text>

        <TextInput
          style={dynamicStyles.searchInput}
          placeholder="Wyszukaj metal po nazwie..."
          placeholderTextColor={theme === "dark" ? "#bbb" : "#555"}
          value={searchQuery}
          onChangeText={setSearchQuery}
        />

        <View style={dynamicStyles.table}>
          <View style={dynamicStyles.row}>
            <Text style={[dynamicStyles.cell, dynamicStyles.headerCell]}>
              Nazwa metalu
            </Text>
            <Text style={[dynamicStyles.cell, dynamicStyles.headerCell]}>
              Cena za uncję
            </Text>
          </View>
          {filteredMetals.map((metal, index) => {
            const translateY = animations[index].interpolate({
              inputRange: [0, 1],
              outputRange: [20, 0],
            });
            const opacity = animations[index];

            return (
              <Animated.View
                key={index}
                style={{
                  transform: [{ translateY }],
                  opacity,
                }}
              >
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("Szczegóły metalu", {
                      metalName: metal.name,
                    })
                  }
                >
                  <View
                    style={[
                      dynamicStyles.row,
                      index % 2 === 0
                        ? dynamicStyles.evenRow
                        : dynamicStyles.oddRow,
                    ]}
                  >
                    <Text style={dynamicStyles.cell}>{metal.name}</Text>
                    <Text style={dynamicStyles.cell}>{metal.price}</Text>
                  </View>
                </TouchableOpacity>
              </Animated.View>
            );
          })}
        </View>
      </ScrollView>
    </LinearGradient>
  );
};

const styles = (theme: "light" | "dark") =>
  StyleSheet.create({
    gradientBackground: {
      flex: 1,
    },
    container: {
      flexGrow: 1,
      padding: 20,
      alignItems: "center",
    },
    header: {
      fontSize: 24,
      fontWeight: "bold",
      color: theme === "dark" ? "#E0E0E0" : "#333333",
      marginBottom: 10,
    },
    smallText: {
      fontSize: 14,
      fontWeight: "bold",
      color: theme === "dark" ? "#E0E0E0" : "#555555",
      marginBottom: 20,
    },
    searchInput: {
      width: "100%",
      padding: 10,
      borderRadius: 8,
      backgroundColor: theme === "dark" ? "#1e1e1e" : "#fff",
      color: theme === "dark" ? "#fff" : "#000",
      borderWidth: 1,
      borderColor: theme === "dark" ? "#333" : "#ccc",
      marginBottom: 20,
    },
    table: {
      width: "100%",
      borderWidth: 1,
      borderColor: theme === "dark" ? "#333333" : "#CCCCCC",
      borderRadius: 8,
      marginBottom: 40,
      overflow: "hidden",
    },
    row: {
      flexDirection: "row",
      justifyContent: "space-between",
      paddingVertical: 15,
      paddingHorizontal: 10,
    },
    headerCell: {
      fontWeight: "bold",
      color: theme === "dark" ? "#E0E0E0" : "#333333",
      fontSize: 18,
    },
    cell: {
      fontSize: 14,
      color: theme === "dark" ? "#FFFFFF" : "#000000",
      flex: 1,
      textAlign: "center",
    },
    evenRow: {
      backgroundColor: theme === "dark" ? "#1E1E1E" : "#F7F7F7",
    },
    oddRow: {
      backgroundColor: theme === "dark" ? "#2C2C2C" : "#EAEAEA",
    },
  });

