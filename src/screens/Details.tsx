import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome"; // Import ikony
import { useTheme } from "../context/theme-context"; // Import hooka

export const Details = ({ route }: any) => {
	const { metalName } = route.params;
	const { theme } = useTheme(); // Pobranie aktualnego motywu

	// Mapowanie opisów i zastosowań dla metali
	const metalDetails: any = {
		Platyna: {
			description:
				"Platyna to niezwykle rzadki i cenny metal szlachetny o srebrzystobiałej barwie. Charakteryzuje się doskonałą odpornością na korozję oraz wysoką temperaturą topnienia. Jest szeroko stosowana w przemyśle chemicznym, motoryzacyjnym oraz w jubilerstwie, gdzie jej elegancki wygląd i trwałość są szczególnie cenione. Platyna jest także kluczowym składnikiem w katalizatorach samochodowych, które pomagają zmniejszyć emisję szkodliwych substancji.",
			uses: [
				"Produkcja biżuterii wysokiej klasy",
				"Katalizatory w przemyśle samochodowym",
				"Urządzenia medyczne, np. stenty sercowe",
				"Elementy elektroniki",
			],
		},
		Srebro: {
			description:
				"Srebro to miękki, biały metal o znakomitych właściwościach przewodzenia ciepła i elektryczności. Od wieków używane jest w jubilerstwie, ale także odgrywa kluczową rolę w przemyśle technologicznym. Srebro jest również stosowane w fotografii, produkcji luster oraz jako składnik antybakteryjnych powłok.",
			uses: [
				"Produkcja biżuterii i sztućców",
				"Przemysł fotograficzny",
				"Przewodniki elektryczne",
				"Powłoki antybakteryjne",
			],
		},
		Rod: {
			description:
				"Rod jest jednym z najcenniejszych i najbardziej odpornych na korozję metali. Charakteryzuje się srebrzystym połyskiem i jest używany głównie jako katalizator w przemyśle chemicznym oraz do produkcji powłok lustrzanych.",
			uses: [
				"Katalizatory przemysłowe",
				"Powłoki lustrzane i reflektory",
				"Elementy elektryczne",
			],
		},
		Paladium: {
			description:
				"Paladium to lekki metal o wyjątkowych właściwościach katalitycznych. Jest kluczowym elementem w katalizatorach samochodowych, a także stosowany w przemyśle elektronicznym oraz jubilerstwie.",
			uses: [
				"Katalizatory samochodowe",
				"Produkcja zegarków",
				"Przemysł chemiczny",
			],
		},
		Uran: {
			description:
				"Uran to ciężki, promieniotwórczy metal używany głównie jako paliwo w reaktorach jądrowych. Jest niezbędny w produkcji energii jądrowej, ale również znalazł zastosowanie w przemyśle wojskowym i badaniach naukowych.",
			uses: [
				"Paliwo w reaktorach jądrowych",
				"Produkcja amunicji",
				"Badania naukowe",
			],
		},
		Kobalt: {
			description:
				"Kobalt to twardy, srebrzystoniebieski metal znany ze swojej odporności na wysokie temperatury oraz korozję. Jest szeroko stosowany w produkcji stopów metali odpornych na zużycie oraz w przemyśle elektronicznym. Kobalt odgrywa kluczową rolę w produkcji nowoczesnych baterii litowo-jonowych i znajduje zastosowanie w medycynie oraz w technologii kosmicznej.",
			uses: [
				"Produkcja baterii litowo-jonowych",
				"Stopów odpornych na korozję",
				"Pigmenty ceramiczne i farby",
				"Medycyna – radioterapia i obrazowanie",
			],
		},
		Cyna: {
			description:
				"Cyna to miękki, srebrzysty metal, który odznacza się odpornością na korozję. Jest szeroko stosowana jako powłoka ochronna w produkcji stali oraz jako składnik lutowia w elektronice. Cyna odgrywa kluczową rolę w przemyśle spożywczym, szczególnie w produkcji opakowań, takich jak puszki.",
			uses: [
				"Powłoki ochronne dla stali (cynowanie)",
				"Produkcja stopów lutowniczych",
				"Przemysł spożywczy – opakowania puszkowe",
				"Elementy dekoracyjne i ozdobne",
			],
		},
		Cynk: {
			description:
				"Cynk to niezbędny dla życia metal, znany ze swojej odporności na korozję. Jest szeroko wykorzystywany do galwanizacji stali w celu zabezpieczenia jej przed rdzewieniem. Cynk jest także kluczowym składnikiem stopów, takich jak mosiądz, oraz ma zastosowanie w suplementach diety ze względu na jego właściwości zdrowotne.",
			uses: [
				"Galwanizacja stali w celu ochrony przed korozją",
				"Produkcja stopów mosiądzu i brązu",
				"Suplementy diety i kosmetyki",
				"Produkcja ogniw galwanicznych",
			],
		},
		Miedź: {
			description:
				"Miedź to czerwono-brązowy metal o doskonałych właściwościach przewodzenia ciepła i elektryczności. Jest szeroko stosowana w przemyśle energetycznym, budownictwie i elektronice. Miedź odgrywa kluczową rolę w nowoczesnych systemach przesyłu energii oraz instalacjach wodociągowych.",
			uses: [
				"Przewody elektryczne i systemy energetyczne",
				"Instalacje wodociągowe",
				"Elementy chłodnicze i klimatyzacyjne",
				"Produkcja monet i naczyń",
			],
		},
		Aluminium: {
			description:
				"Aluminium to lekki, ale wytrzymały metal o doskonałej odporności na korozję. Jest powszechnie stosowany w lotnictwie, budownictwie oraz przemyśle opakowaniowym. Dzięki swojej niskiej masie i wysokiej wytrzymałości znajduje zastosowanie w produkcji samochodów oraz konstrukcji budowlanych.",
			uses: [
				"Produkcja samolotów i pojazdów",
				"Elementy konstrukcyjne w budownictwie",
				"Przemysł opakowań (puszki i folie)",
				"Produkcja sprzętu gospodarstwa domowego",
			],
		},
		Neodym: {
			description:
				"Neodym jest jednym z metali ziem rzadkich i jest szeroko znany ze swojej roli w produkcji niezwykle silnych magnesów trwałych. Jest stosowany w nowoczesnych technologiach, takich jak silniki elektryczne, turbiny wiatrowe i głośniki, dzięki czemu odgrywa kluczową rolę w przemyśle energetycznym i elektronicznym.",
			uses: [
				"Produkcja silnych magnesów trwałych",
				"Silniki elektryczne i turbiny wiatrowe",
				"Przemysł elektroniczny – głośniki i dyski twarde",
				"Technologia medyczna – skanery MRI",
			],
		},
	};

	// Dynamiczne style zależne od motywu
	const dynamicStyles = styles(theme);

	return (
		<View style={dynamicStyles.container}>
			<Text style={dynamicStyles.text}>{metalName}</Text>
			{/* Wyświetlenie opisu metalu */}
			<Text style={dynamicStyles.description}>
				{metalDetails[metalName]?.description ||
					"Brak opisu dla tego metalu."}
			</Text>

			{/* Wyświetlenie listy zastosowań */}
			<Text style={dynamicStyles.usesTitle}>
				Najczęstsze wykorzystanie:
			</Text>
			{metalDetails[metalName]?.uses?.map(
				(use: string, index: number) => (
					<View key={index} style={dynamicStyles.useItem}>
						<Icon
							name='circle'
							size={10}
							color={theme === "dark" ? "#BBBBBB" : "#555555"}
						/>
						<Text style={dynamicStyles.useText}>{use}</Text>
					</View>
				)
			)}
		</View>
	);
};

// Funkcja generująca style dynamiczne
const styles = (theme: "light" | "dark") =>
	StyleSheet.create({
		container: {
			flex: 1,
			justifyContent: "center",
			alignItems: "center",
			backgroundColor: theme === "dark" ? "#121212" : "#FFFFFF",
			paddingHorizontal: 10,
		},
		text: {
			fontSize: 24,
			fontWeight: "bold",
			color: theme === "dark" ? "#E0E0E0" : "#333333",
			marginBottom: 10,
		},
		description: {
			fontSize: 18,
			color: theme === "dark" ? "#BBBBBB" : "#555555",
			textAlign: "center",
			marginBottom: 20,
		},
		usesTitle: {
			fontSize: 20,
			fontWeight: "bold",
			color: theme === "dark" ? "#E0E0E0" : "#333333",
			marginBottom: 10,
			marginTop: 20,
		},
		useItem: {
			flexDirection: "row",
			alignItems: "center",
			marginBottom: 10,
			marginLeft: 20, // Dodanie większego marginesu z lewej strony
			alignSelf: "flex-start", // Wyrównanie do lewej krawędzi
		},
		useText: {
			fontSize: 16,
			color: theme === "dark" ? "#CCCCCC" : "#444444",
			marginLeft: 10,
			marginRight: 10,
			flexShrink: 1, // Zapobiega wykraczaniu poza ekran
		},
	});
