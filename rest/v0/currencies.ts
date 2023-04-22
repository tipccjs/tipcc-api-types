import type {
  APICryptoCurrency,
  APIFiatCurrency,
  APIExchangeRate,
} from '../../v0';

export interface RESTGetAPICurrenciesCryptoCurrenciesResult {
  cryptocurrencies: APICryptoCurrency[];
}

export interface RESTGetAPICurrenciesFiatsResult {
  fiats: APIFiatCurrency[];
}

export interface RESTGetAPICurrenciesRatesResult {
  rates: APIExchangeRate[];
}
