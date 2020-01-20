import axios from "axios";

const APP_KEY = "OjJmZDcxODAxOGUwNDI2OWMyNmJiOTdlNWMwYWMzODFj";

export const FETCH_PRICES = "FETCH_PRICES";

export const fetchPrices = company => {
  const request = axios.get(
    `https://api-v2.intrinio.com/securities/${company}/prices?api_key=${APP_KEY}`
  );

  return {
    type: FETCH_PRICES,
    payload: request
  };
};
