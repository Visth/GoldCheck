import React from "react";
import { View, Text, StyleSheet, ScrollView, Image, Dimensions } from "react-native";
import { useTheme } from "../context/theme-context";
import { LinearGradient } from "expo-linear-gradient";

export const Investment = () => {
  const { theme } = useTheme();
  const dynamicStyles = styles(theme);
  const screenWidth = Dimensions.get("window").width;

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
    <LinearGradient
      colors={theme === "dark" ? ["#121212", "#4d586a"] : ["#eed3a3", "#efefef"]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={dynamicStyles.gradientBackground}
    >
      <ScrollView contentContainerStyle={dynamicStyles.container}>
        <Text style={dynamicStyles.header}>Jak zacząć inwestować w złoto?</Text>
        <Text style={dynamicStyles.text}>
          Złoto od wieków jest uznawane za bezpieczną przystań w czasach kryzysu. Aby skutecznie
          inwestować w złoto, warto zacząć od edukacji na temat rynku surowców. Rozważ różne formy
          inwestycji: fizyczne złoto w postaci sztabek czy monet, fundusze ETF powiązane z ceną złota
          oraz akcje firm wydobywających ten cenny metal. Kluczem do sukcesu jest dywersyfikacja
          portfela oraz długoterminowa perspektywa inwestycyjna.
        </Text>

        <Image
						source={require("../assets/img/invest-1.jpg")}
						style={[
							dynamicStyles.image,
							{ width: screenWidth * 1, marginVertical: 0 },
						]}
						resizeMode='cover'
					/>

        <Text style={dynamicStyles.subHeader}>Popularne książki o inwestowaniu w złoto:</Text>
        {books.map((book, index) => (
          <View
            key={index}
            style={[dynamicStyles.card, index === books.length - 1 && { marginBottom: 40 }]}
          >
            <Text style={dynamicStyles.bold}>{book.title}</Text>
            <Text style={dynamicStyles.labelBold}>
              Autor: <Text style={dynamicStyles.cardText}>{book.author}</Text>
            </Text>
            <Text style={dynamicStyles.cardText}>{book.description}</Text>
          </View>
        ))}

        <Text style={dynamicStyles.subHeader}>Sławne osoby które inwestują w złoto:</Text>
        {famousInvestors.map((investor, index) => (
          <View
            key={index}
            style={[dynamicStyles.card, index === famousInvestors.length - 1 && { marginBottom: 40 }]}
          >
            <Text style={dynamicStyles.bold}>{investor.name}</Text>
            <Text style={dynamicStyles.labelBold}>
              Kapitał: <Text style={dynamicStyles.cardText}>{investor.capital}</Text>
            </Text>
            <Text style={dynamicStyles.cardText}>{investor.description}</Text>
          </View>
        ))}
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
      justifyContent: "center",
      alignItems: "center",
      padding: 16,
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
      marginBottom: 16,
    },
    card: {
      width: "100%",
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
    image: {
			height: 250,
			alignSelf: "center",
			marginVertical: 15,
		},
  });

