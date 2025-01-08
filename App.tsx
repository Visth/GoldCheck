import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Home } from "./src/screens/Home";
import { ViewTodayPrice } from "./src/screens/ViewTodayPrice";
import { OtherMetals } from "./src/screens/OtherMetals";
import { Details } from "./src/screens/Details";
import { GlobalGold } from "./src/screens/GlobalGold";
import { Investment } from "./src/screens/Investment";
import { ThemeProvider } from "./src/context/theme-context";
import { MetalPricesProvider } from "./src/context/metalPrices-context";

const Stack = createStackNavigator();

const App = () => (
	<MetalPricesProvider>
		<ThemeProvider>
			<NavigationContainer>
				<Stack.Navigator initialRouteName='GoldCheck Menu'>
					<Stack.Screen name='GoldCheck Menu' component={Home} />
					<Stack.Screen
						name='Dzisiejsza cena złota'
						component={ViewTodayPrice}
					/>
					<Stack.Screen
						name='Zobacz inne metale'
						component={OtherMetals}
					/>
					<Stack.Screen name='Szczegóły metalu' component={Details} />
					<Stack.Screen
						name='Złoto na świecie'
						component={GlobalGold}
					/>
					<Stack.Screen
						name='Inwestowanie w złoto'
						component={Investment}
					/>
				</Stack.Navigator>
			</NavigationContainer>
		</ThemeProvider>
	</MetalPricesProvider>
);

export default App;
