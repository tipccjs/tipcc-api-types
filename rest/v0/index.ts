import type { ApiCurrencyIdentifier } from '../../globals';

export * from './account';
export * from './currencies';

export const APIVersion = '0';

export const Routes = {
  /**
   * Route for:
   * - GET `/user` - Gets info about the logged in user.
   */
  user() {
    return '/user' as const;
  },
  /**
   * Route for:
   * - GET `/user/connections` - Returns all platforms connected to this user.
   */
  userConnections() {
    return '/user/connections' as const;
  },
  /**
   * Route for:
   * - GET `/account/wallets` - Returns all balances
   */
  accountWallets() {
    return '/account/wallets' as const;
  },
  /**
   * Route for:
   * - GET `/account/wallets/{code}` - Balance of chosen wallet
   */
  accountWallet(code: ApiCurrencyIdentifier) {
    return `/account/wallets/${code}` as const;
  },
  /**
   * Route for:
   * - GET `/account/wallets/{code}/addresses` - Gets deposit address or addresses for selected currency
   */
  accountWalletAddresses(code: string) {
    return `/account/wallets/${code}/addresses` as const;
  },
  /**
   * Route for:
   * - GET `/account/wallets/{code}/destination_info` - Validates destination address and extra for selected currency
   */
  accountWalletDestinationInfo(code: string) {
    return `/account/wallets/${code}/destination_info` as const;
  },
  /**
   * Route for:
   * - POST `/account/wallets/{code}/withdrawal` - Creates a withdrawal request
   */
  accountWalletWithdrawal(code: string) {
    return `/account/wallets/${code}/withdrawal` as const;
  },
  /**
   * Route for:
   * - PUT `/account/wallets/{code}/withdrawal/{id}` - Sends a withdrawal
   * - DELETE `/account/wallets/{code}/withdrawal/{id}` - Cancel a withdrawal
   */
  accountWalletWithdrawalId(code: string, id: string) {
    return `/account/wallets/${code}/withdrawal/${id}` as const;
  },
  /**
   * Route for:
   * - GET `/account/wallets/transactions` - List of user's tips, deposits and withdrawals
   */
  accountWalletTransactions() {
    return '/account/wallets/transactions' as const;
  },
  /**
   * Route for:
   * - GET `/account/wallets/transactions/{id}` - Get a single tip, deposit or withdrawal by ID
   */
  accountWalletTransaction(id: string) {
    return `/account/wallets/transactions/${id}` as const;
  },
  /**
   * Route for:
   * - POST `/tips` - Sends a tip
   */
  tips() {
    return '/tips' as const;
  },
  /**
   * Route for:
   * - GET `/currencies/cryptocurrencies` - List of all supported cryptocurrencies
   */
  currenciesCryptocurrencies() {
    return '/currencies/cryptocurrencies' as const;
  },
  /**
   * Route for:
   * - GET `/currencies/fiats` - List of all supported fiat currencies
   */
  currenciesFiats() {
    return '/currencies/fiats' as const;
  },
  /**
   * Route for:
   * - GET `/currencies/rates` - Exchange rates for all supported currencies
   */
  currenciesRates() {
    return '/currencies/rates' as const;
  },
};

export const RouteBases = {
  api: `https://api.tip.cc/api/v${APIVersion}`,
} as const;

Object.freeze(RouteBases);
