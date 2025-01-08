import React, { useState, useEffect } from "react";
import {
	View,
	Text,
	ActivityIndicator,
	StyleSheet,
	TouchableOpacity,
	ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Import ikony
import { useTheme } from "../context/theme-context"; // Importujemy kontekst motywu
import { useMetalPrices } from "../context/metalPrices-context";

export const ViewTodayPrice = () => {
	const [showDetails, setShowDetails] = useState<boolean>(false);
	const { goldPrice, loading, error } = useMetalPrices();

	const { theme } = useTheme(); // Pobranie aktualnego motywu
	const dynamicStyles = styles(theme); // Generowanie stylów dynamicznych

	if (loading) {
		return (
			<View>
				<ActivityIndicator size='large' color='#4CAF50' />
				<Text>Loading current gold price...</Text>
			</View>
		);
	}

	if (error) {
		return (
			<View>
				<Text>{error}</Text>
			</View>
		);
	}

	// const fetchGoldPrice = async () => {
	//  try {
	//    const response = await fetch(
	//      "https://api.metalpriceapi.com/v1/latest?api_key=17757a4673af4f81676a1bff1c5ab514&base=USD&currencies=XAU"
	//    );

	//    if (!response.ok) {
	//      throw new Error(`HTTP error! status: ${response.status}`);
	//    }

	//    const data = await response.json();

	//    console.log("API Response:", data); // Logujemy odpowiedź do debugowania

	//    // Pobieramy poprawną cenę złota w USD
	//    const goldPriceUSD = data.rates?.USDXAU;

	//    if (goldPriceUSD) {
	//      setGoldPrice(goldPriceUSD); // Ustaw aktualną cenę złota
	//    } else {
	//      setError("Unable to fetch correct gold price from API.");
	//    }
	//  } catch (err) {
	//    console.error("Fetch Error:", err);
	//    setError("Failed to fetch data. Please try again later.");
	//  } finally {
	//    setLoading(false);
	//  }
	// };

	// // Hook useEffect, aby pobrać dane po załadowaniu komponentu
	// useEffect(() => {
	//  fetchGoldPrice();
	// }, []);

	// // Renderowanie widoku
	// if (loading) {
	//  return (
	//    <View style={dynamicStyles.container}>
	//      <ActivityIndicator size="large" color="#4CAF50" />
	//      <Text style={dynamicStyles.loadingText}>Loading current gold price...</Text>
	//    </View>
	//  );
	// }

	// if (error) {
	//  return (
	//    <View style={dynamicStyles.container}>
	//      <Text style={dynamicStyles.errorText}>{error}</Text>
	//    </View>
	//  );
	// }

	return (
		<View style={dynamicStyles.container}>
			<ScrollView showsVerticalScrollIndicator={false}>
				<Text style={dynamicStyles.text}>
					Dzisiejsza cena złota za uncję:{" "}
					<Text style={{ color: "#B8860B", fontSize: 26 }}>
						{goldPrice !== null && goldPrice !== undefined
							? `$${goldPrice.toFixed(2)}`
							: "N/A"}
					</Text>
				</Text>

				<TouchableOpacity
					onPress={() => setShowDetails(!showDetails)}
					style={dynamicStyles.button}>
					<Text style={dynamicStyles.buttonText}>
						{showDetails ? "Ukryj informacje" : "Więcej o złocie"}
					</Text>
				</TouchableOpacity>

				{showDetails && (
					<View style={dynamicStyles.detailsContainer}>
						<Text style={dynamicStyles.detailsText}>
							Złoto to jeden z najstarszych i najbardziej
							cenionych surowców na świecie. Jego unikalne
							właściwości, takie jak odporność na korozję i
							połysk, sprawiają, że od tysięcy lat jest używane
							jako środek płatniczy, ozdoba i symbol bogactwa. Już
							w starożytnym Egipcie złoto było kojarzone z
							boskością i nieśmiertelnością. W czasach
							współczesnych złoto jest uznawane za bezpieczną
							przystań inwestycyjną, szczególnie w okresach
							kryzysów gospodarczych. Jego wartość rosła wraz z
							rosnącym popytem, a obecnie jest kluczowym elementem
							wielu gałęzi przemysłu i finansów.
						</Text>
						<Text style={dynamicStyles.usesTitle}>
							Najczęstsze wykorzystanie:
						</Text>
						<View style={dynamicStyles.usesList}>
							<View style={dynamicStyles.useItem}>
								<Icon
									name='circle'
									size={10}
									color={
										theme === "dark" ? "#BBBBBB" : "#555555"
									}
								/>
								<Text style={dynamicStyles.useText}>
									Produkcja biżuterii i ozdób
								</Text>
							</View>
							<View style={dynamicStyles.useItem}>
								<Icon
									name='circle'
									size={10}
									color={
										theme === "dark" ? "#BBBBBB" : "#555555"
									}
								/>
								<Text style={dynamicStyles.useText}>
									Bezpieczna lokata kapitału
								</Text>
							</View>
							<View style={dynamicStyles.useItem}>
								<Icon
									name='circle'
									size={10}
									color={
										theme === "dark" ? "#BBBBBB" : "#555555"
									}
								/>
								<Text style={dynamicStyles.useText}>
									Przemysł elektroniczny – przewodniki
								</Text>
							</View>
							<View style={dynamicStyles.useItem}>
								<Icon
									name='circle'
									size={10}
									color={
										theme === "dark" ? "#BBBBBB" : "#555555"
									}
								/>
								<Text style={dynamicStyles.useText}>
									Produkcja monet i sztabek inwestycyjnych
								</Text>
							</View>
							<View style={dynamicStyles.useItem}>
								<Icon
									name='circle'
									size={10}
									color={
										theme === "dark" ? "#BBBBBB" : "#555555"
									}
								/>
								<Text style={dynamicStyles.useText}>
									Stomatologia – wypełnienia i korony
								</Text>
							</View>
							<View style={dynamicStyles.useItem}>
								<Icon
									name='circle'
									size={10}
									color={
										theme === "dark" ? "#BBBBBB" : "#555555"
									}
								/>
								<Text style={dynamicStyles.useText}>
									Technologia kosmiczna
								</Text>
							</View>
							<View style={dynamicStyles.useItem}>
								<Icon
									name='circle'
									size={10}
									color={
										theme === "dark" ? "#BBBBBB" : "#555555"
									}
								/>
								<Text style={dynamicStyles.useText}>
									Przemysł medyczny – leczenie nowotworów
								</Text>
							</View>
						</View>
					</View>
				)}
			</ScrollView>
		</View>
	);
};

const styles = (theme: "light" | "dark") =>
	StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
			backgroundColor: theme === "dark" ? "#121212" : "#FFFFFF",
			padding: 16,
		},
		text: {
			fontSize: 16,
			marginTop: 40,
			fontWeight: "bold",
			color: theme === "dark" ? "#E0E0E0" : "#333333",
			textAlign: "center",
			paddingHorizontal: 80,
			paddingVertical: 12,
			borderWidth: 2,
			borderColor: theme === "dark" ? "#B8860B" : "#B8860B",
			borderRadius: 8,
			backgroundColor: theme === "dark" ? "#1E1E1E" : "#F5F5F5",
		},
		button: {
			marginTop: 20,
			backgroundColor: theme === "dark" ? "#B8860B" : "#B8860B",
			padding: 10,
			borderRadius: 8,
		},
		buttonText: {
			fontSize: 16,
			color: "#000000",
			fontWeight: "bold",
			alignSelf: "center",
		},
		detailsContainer: {
			marginTop: 20,
			marginBottom: 40,
			padding: 10,
			backgroundColor: theme === "dark" ? "#1E1E1E" : "#F5F5F5",
			borderRadius: 8,
			borderWidth: 1,
			borderColor: theme === "dark" ? "#B8860B" : "#B8860B",
		},
		detailsText: {
			fontSize: 16,
			color: theme === "dark" ? "#CCCCCC" : "#333333",
			marginBottom: 10,
		},
		usesTitle: {
			fontSize: 18,
			fontWeight: "bold",
			color: theme === "dark" ? "#E0E0E0" : "#333333",
			marginTop: 10,
			marginBottom: 5,
		},
		usesList: {
			marginLeft: 10,
		},
		useItem: {
			flexDirection: "row",
			alignItems: "center",
			marginBottom: 5,
		},
		useText: {
			fontSize: 16,
			color: theme === "dark" ? "#CCCCCC" : "#444444",
			marginLeft: 10,
		},
	});
