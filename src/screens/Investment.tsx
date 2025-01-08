import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useTheme } from "../context/theme-context";

export const Investment = () => {
  const { theme } = useTheme();
  const dynamicStyles = styles(theme);

  // Lista książek o inwestowaniu w złoto
  const books = [
    {
      title: "The New Case for Gold",
      author: "James Rickards",
      description:
        "Przekonujące argumenty za posiadaniem złota jako ochrony przed kryzysami gospodarczymi.",
    },
    {
      title: "Guide to Investing in Gold & Silver",
      author: "Michael Maloney",
      description:
        "Podręcznik dla początkujących, wyjaśniający, dlaczego i jak inwestować w złoto i srebro.",
    },
    {
      title: "Why Gold? Why Now?",
      author: "E.B. Tucker",
      description: "Analiza znaczenia złota w dzisiejszej niestabilnej gospodarce.",
    },
  ];

  // Lista sławnych osób inwestujących w złoto
  const famousInvestors = [
    {
      name: "Elon Musk",
      capital: "ok. 1,5 mld USD",
      description:
        "Elon Musk, założyciel SpaceX i Tesla, inwestuje w złoto jako zabezpieczenie przed inflacją i niestabilnością walutową.",
    },
    {
      name: "Jeff Bezos",
      capital: "ok. 2 mld USD",
      description:
        "Jeff Bezos, twórca Amazona, postrzega złoto jako trwały element dywersyfikacji portfela inwestycyjnego.",
    },
    {
      name: "Ray Dalio",
      capital: "ok. 1,2 mld USD",
      description:
        "Ray Dalio, założyciel Bridgewater Associates, wielokrotnie podkreślał znaczenie złota w portfelach inwestycyjnych jako ochrony przed kryzysami.",
    },
  ];

  return (
    <ScrollView style={dynamicStyles.container}>
      {/* Sekcja 1: Jak zacząć inwestować w złoto */}
      <Text style={dynamicStyles.header}>Jak zacząć inwestować w złoto?</Text>
      <Text style={dynamicStyles.text}>
        Złoto od wieków jest uznawane za bezpieczną przystań w czasach kryzysu. Aby skutecznie
        inwestować w złoto, warto zacząć od edukacji na temat rynku surowców. Rozważ różne formy
        inwestycji: fizyczne złoto w postaci sztabek czy monet, fundusze ETF powiązane z ceną złota
        oraz akcje firm wydobywających ten cenny metal. Kluczem do sukcesu jest dywersyfikacja
        portfela oraz długoterminowa perspektywa inwestycyjna.
      </Text>

      {/* Sekcja 2: Popularne książki */}
      <Text style={dynamicStyles.subHeader}>Popularne książki o inwestowaniu w złoto:</Text>
      {books.map((book, index) => (
  <View
    key={index}
    style={[
      dynamicStyles.card,
      index === books.length - 1 && { marginBottom: 40 },
    ]}
  >
    <Text style={dynamicStyles.bold}>{book.title}</Text>
    <Text style={dynamicStyles.labelBold}>
      Autor: <Text style={dynamicStyles.cardText}>{book.author}</Text>
    </Text>
    <Text style={dynamicStyles.cardText}>{book.description}</Text>
  </View>
))}

      {/* Sekcja 3: Sławne osoby */}
      <Text style={dynamicStyles.subHeader}>Sławne osoby które inwestują w złoto:</Text>
      {famousInvestors.map((investor, index) => (
  <View
    key={index}
    style={[
      dynamicStyles.card,
      index === famousInvestors.length - 1 && { marginBottom: 40 },
    ]}
  >
    <Text style={dynamicStyles.bold}>{investor.name}</Text>
    <Text style={dynamicStyles.labelBold}>
      Kapitał: <Text style={dynamicStyles.cardText}>{investor.capital}</Text>
    </Text>
    <Text style={dynamicStyles.cardText}>{investor.description}</Text>
  </View>
))}
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
      fontSize: 32,
      fontWeight: "bold",
      color: "#B8860B",
      marginBottom: 10,
      marginTop: 20,
    },
    subHeader: {
      fontSize: 26,
      fontWeight: "bold",
      color: "#B8860B",
      marginTop: 20,
      marginBottom: 10,
    },
    text: {
      fontSize: 16,
      color: theme === "dark" ? "#E0E0E0" : "#333333",
      lineHeight: 24,
      marginBottom: 10,
    },
    card: {
      backgroundColor: theme === "dark" ? "#1E1E1E" : "#F9F9F9",
      borderColor: "#B8860B",
      borderWidth: 2,
      borderRadius: 8,
      padding: 12,
      marginBottom: 10,
    },
    cardText: {
      fontSize: 16,
      color: theme === "dark" ? "#E0E0E0" : "#333333",
      lineHeight: 22,
    },
    labelBold: {
        fontSize: 16,
        fontWeight: "bold",
        color: theme === "dark" ? "#E0E0E0" : "#333333",
        lineHeight: 22,
      },
    bold: {
      fontSize: 18,
      fontWeight: "bold",
      color: "#B8860B",
      marginBottom: 5,
    },
  });
