export type APICurrencySymbol = string;

export interface APIMonetary {
  /* Pattern: `^[0-9]*$` */
  value: string;
  currency: APICurrencySymbol;
}

export interface APICoin {
  /* Pattern: `^[0-9]*$` */
  value: string;
  currency: APICurrencySymbol;
}

export interface APIExchangeRate {
  code: string;
  name: string;
  usd_value?: APIMonetary;
}

export interface APICryptoCurrencyUnit {
  singular: string;
  plural?: string;
  prefix?: string;
  suffix?: string;
  scale: number;
  aliases?: string[];
  minDecimals?: number;
  optionalDecimals?: boolean;
  min?: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface APIFiatCurrencyUnit extends APICryptoCurrencyUnit {}

export interface APICryptoCurrency {
  code: string;
  name: string;
  color: string;
  icon: string;
  explorer: string;
  feeUnit: string;
  format: {
    scale: number;
    units: APICryptoCurrencyUnit;
  };
  options: {
    extras?: string;
    accounts?: boolean;
  };
}

export interface APIFiatCurrency {
  code: string;
  name: string;
  format: {
    scale: number;
    units: APIFiatCurrencyUnit;
  };
}
