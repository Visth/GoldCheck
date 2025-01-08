import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";

interface MetalPricesContextProps {
  goldPrice: number | null;
  loading: boolean;
  error: string | null;
}

const MetalPricesContext = createContext<MetalPricesContextProps | undefined>(undefined);

export const MetalPricesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [goldPrice, setGoldPrice] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGoldPrice = async () => {
      try {
        const response = await axios.get("https://api.metalpriceapi.com/v1/latest", {
          params: {
            api_key: "17757a4673af4f81676a1bff1c5ab514",
            base: "USD",
            currencies: "XAU",
          },
        });

        const goldPriceUSD = response.data.rates?.USDXAU;

        if (goldPriceUSD) {
          setGoldPrice(goldPriceUSD);
        } else {
          setError("Unable to fetch correct gold price from API.");
        }
      } catch (err) {
        console.error("Fetch Error:", err);
        setError("Failed to fetch data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchGoldPrice();
  }, []);

  return (
    <MetalPricesContext.Provider value={{ goldPrice, loading, error }}>
      {children}
    </MetalPricesContext.Provider>
  );
};

export const useMetalPrices = () => {
  const context = useContext(MetalPricesContext);
  if (!context) {
    throw new Error("useMetalPrices must be used within a MetalPricesProvider");
  }
  return context;
};
