export type APICryptoCurrency = string;
export type APIFiatCurrency = string;
export type APICurrency = string;

export interface APIMonetary {
  /* Pattern: `^[0-9]*$` */
  value: string;
  currency: APICurrency;
}

export interface APICoin {
  /* Pattern: `^[0-9]*$` */
  value: string;
  currency: APICryptoCurrency;
}

export interface APIExchangeRate {
  code: string;
  name: string;
  usd_value?: APIMonetary;
}
