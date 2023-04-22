import type { ApiCurrencyIdentifier } from '../../globals';

export * from './account';

export const APIVersion = '0';

export const Routes = {
  /**
   * Route for:
   * - GET `/user`
   */
  user() {
    return '/user' as const;
  },
  /**
   * Route for:
   * - GET `/user/connections`
   */
  userConnections() {
    return '/user/connections' as const;
  },
  /**
   * Route for:
   * - GET `/account/wallets`
   */
  accountWallets() {
    return '/account/wallets' as const;
  },
  /**
   * Route for:
   * - GET `/account/wallets/{code}`
   */
  accountWallet(code: ApiCurrencyIdentifier) {
    return `/account/wallets/${code}` as const;
  },
  /**
   * Route for:
   * - GET `/account/wallets/{code}/addresses`
   */
  accountWalletAddresses(code: string) {
    return `/account/wallets/${code}/addresses` as const;
  },
  /**
   * Route for:
   * - GET `/account/wallets/{code}/destination_info`
   */
  accountWalletDestinationInfo(code: string) {
    return `/account/wallets/${code}/destination_info` as const;
  },
  /**
   * Route for:
   * - POST `/account/wallets/{code}/withdrawal`
   */
  accountWalletWithdrawal(code: string) {
    return `/account/wallets/${code}/withdrawal` as const;
  },
  /**
   * Route for:
   * - PUT `/account/wallets/{code}/withdrawal/{id}`
   * - DELETE `/account/wallets/{code}/withdrawal/{id}`
   */
  accountWalletWithdrawalId(code: string, id: string) {
    return `/account/wallets/${code}/withdrawal/${id}` as const;
  },
  /**
   * Route for:
   * - GET `/account/wallets/transactions`
   */
  accountWalletTransactions() {
    return '/account/wallets/transactions' as const;
  },
  /**
   * Route for:
   * - GET `/account/wallets/transactions/{id}`
   */
  accountWalletTransaction(id: string) {
    return `/account/wallets/transactions/${id}` as const;
  },
  /**
   * Route for:
   * - POST `/tips`
   */
  tips() {
    return '/tips' as const;
  },
  /**
   * Route for:
   * - GET `/currencies/cryptocurrencies`
   */
  currenciesCryptocurrencies() {
    return '/currencies/cryptocurrencies' as const;
  },
  /**
   * Route for:
   * - GET `/currencies/fiats`
   */
  currenciesFiats() {
    return '/currencies/fiats' as const;
  },
  /**
   * Route for:
   * - GET `/currencies/rates`
   */
  currenciesRates() {
    return '/currencies/rates' as const;
  },
};

export const RouteBases = {
  api: `https://api.tip.cc/api/v${APIVersion}`,
} as const;

Object.freeze(RouteBases);
