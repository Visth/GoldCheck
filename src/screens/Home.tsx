import React, { useEffect, useRef } from "react";
import {
	View,
	Text,
	TouchableOpacity,
	StyleSheet,
	Animated,
	StatusBar,
	ImageBackground,
} from "react-native";
import { useTheme } from "../context/theme-context";
import Icon from "react-native-vector-icons/FontAwesome";
import { LinearGradient } from "expo-linear-gradient";
import Ionicons from "react-native-vector-icons/Ionicons";

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
		<LinearGradient
			colors={
				theme === "dark"
					? ["#121212", "#4d586a"]
					: ["#ac7000", "#eaeaea"]
			}
			start={{ x: 0, y: 0 }}
			end={{ x: 1, y: 1 }}
			style={styles.gradientBackground}
		>
		<View
			style={[
				styles.container,
			]}>
			<StatusBar backgroundColor='#ffffff' barStyle='dark-content'/>
			<Text
				style={[
					styles.header,
					{ color: theme === "dark" ? "#B8860B" : "#e9c600" },
				]}>
				GoldCheck
			</Text>
			<TouchableOpacity style={styles.themeButton} onPress={toggleTheme}>
				<Icon
					name={theme === "dark" ? "sun-o" : "moon-o"}
					size={24}
					color={theme === "dark" ? "#E0E0E0" : "#121212"}
				/>
			</TouchableOpacity>
			<Animated.View style={{ transform: [{ translateY: translateYButton1 }] }}>
	<TouchableOpacity
		style={styles.largeButton}
		onPress={() => navigation.navigate("Dzisiejsza cena złota")}
	>
		<ImageBackground
			source={require("../assets/img/home-2.jpg")}
			style={styles.largeButtonImage}
			imageStyle={{ borderRadius: 10 }}
		>
			<View style={styles.overlay} />
			<Text style={[styles.buttonTextMain, { color: "#fafafa" }]}>
				Sprawdź dzisiejszą cenę złota
			</Text>
		</ImageBackground>
	</TouchableOpacity>
</Animated.View>

<View style={styles.smallButtonRow}>
	<Animated.View style={{ transform: [{ translateX: translateXButton2 }] }}>
		<TouchableOpacity
			style={[
				styles.smallButton,
				{ backgroundColor: theme === "dark" ? "#4d586a" : "#b0c4de" },
			]}
			onPress={() => navigation.navigate("Zobacz inne metale")}
		>
			<Ionicons
				name="diamond"
				size={24}
				color={theme === "dark" ? "#fafafa" : "#121212"}
				style={styles.iconLeft}
			/>
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

	<Animated.View style={{ transform: [{ translateX: translateXButton3 }] }}>
		<TouchableOpacity
			style={[
				styles.smallButton,
				{ backgroundColor: theme === "dark" ? "#4d586a" : "#b0c4de" },
			]}
			onPress={() => navigation.navigate("Złoto na świecie")}
		>
			<Ionicons
				name="globe-outline"
				size={24}
				color={theme === "dark" ? "#fafafa" : "#121212"}
				style={styles.iconLeft}
			/>
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
				styles.smallButton,
				{ backgroundColor: theme === "dark" ? "#4d586a" : "#b0c4de" },
			]}
			onPress={() => navigation.navigate("Inwestowanie w złoto")}
		>
			<Ionicons
				name="newspaper-outline"
				size={24}
				color={theme === "dark" ? "#fafafa" : "#121212"}
				style={styles.iconLeft}
			/>
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

			<View style={styles.footer}>
				<Text
					style={[
						styles.footerText,
						{ color: theme === "dark" ? "#E0E0E0" : "#121212" },
					]}>
					&copy; FILBER
				</Text>
			</View>
		</View>
		</LinearGradient>
	);
};

const styles = StyleSheet.create({
	gradientBackground: {
		flex: 1,
	},
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
	},
	header: {
		position: "absolute",
		top: 40,
		fontSize: 32,
		fontWeight: "bold",
	},
	buttonRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		marginBottom: 20,
	},
	buttonTextMain: {
		position: "absolute",
		bottom: 0,
		width: "100%",
		backgroundColor: "rgba(0, 0, 0, 0.4)",
		borderBottomLeftRadius: 10,
		borderBottomRightRadius: 10,
		paddingVertical: 8,
		textAlign: "center",
		fontSize: 28,
		color: "#eeecec",
	},
	buttonText: {
		textAlign: "center",
		padding: 5,
		fontSize: 16,
	},
	footer: {
		position: "absolute",
		bottom: 30,
		alignItems: "center",
		justifyContent: "center",
	},
	footerText: {
		fontSize: 18,
		fontWeight: "bold",
	},
	themeButton: {
		position: "absolute",
		top: 40,
		right: 20,
		padding: 10,
		borderRadius: 50,
		backgroundColor: "transparent",
	},
	largeButton: {
		width: 300,
		height: 280,
		borderRadius: 10,
		marginBottom: 20,
		overflow: "hidden",
	},
	largeButtonImage: {
		width: "100%",
		height: "100%",
		justifyContent: "center",
		alignItems: "center",
	},
	overlay: {
		...StyleSheet.absoluteFillObject,
		backgroundColor: "rgba(0, 0, 0, 0.6)",
		borderRadius: 10,
	},
	smallButtonRow: {
		flexDirection: "column",
		alignItems: "center",
		gap: 10,
	},
	
	smallButton: {
		width: 300,
		height: 50,
		justifyContent: "center",
		alignItems: "center",
		borderRadius: 10,
		paddingLeft: 40,
		flexDirection: "row",
	},
	iconLeft: {
		position: "absolute",
		left: 15,
	},
	
});
