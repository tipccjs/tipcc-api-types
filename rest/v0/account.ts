import type {
  APIService,
  APITip,
  APITransaction,
  APIWallet,
  APIWithdrawl,
} from '../../payloads/v0/account';
import type {
  APICoin,
  APICurrencySymbol,
  APIMonetary,
} from '../../payloads/v0/currencies';

/**
 * https://api.tip.cc/docs/static/index.html#/wallet/get_api_v0_account_wallets
 */
export type RESTGetAPIAccountWalletsResult = {
  wallets: APIWallet[];
};

/**
 * https://api.tip.cc/docs/static/index.html#/wallet/get_api_v0_account_wallets__code_
 */
export type RESTGetAPIAccountWalletResult = APIWallet;

/**
 * https://api.tip.cc/docs/static/index.html#/wallet/get_api_v0_account_wallets__code_
 */
export interface RESTGetAPIAccountWalletPath {
  code: string;
}

/**
 * https://api.tip.cc/docs/static/index.html#/wallet/get_api_v0_account_wallets__code__addresses
 */
export interface RESTGetAPIAccountWalletAddressesResult {
  code: APICurrencySymbol;
  name: string;
  master?: string;
  addresses: {
    address: string;
    extra?: string;
    uri?: string;
  }[];
  fee?: APIMonetary;
  fee_is_estimate?: boolean;
  minimum_confirmations?: number;
  minimum_confirmations_are_estimate?: boolean;
}

/**
 * https://api.tip.cc/docs/static/index.html#/wallet/get_api_v0_account_wallets__code__addresses
 */
export interface RESTGetAPIAccountWalletAddressesPath {
  code: string;
}

/**
 * https://api.tip.cc/docs/static/index.html#/wallet/get_api_v0_account_wallets__code__destination_info
 */
export interface RESTGetAPIAccountWalletDestinationInfoResult {
  valid: boolean;
  extra: 'required' | 'optional' | 'none';
}

/**
 * https://api.tip.cc/docs/static/index.html#/wallet/get_api_v0_account_wallets__code__destination_info
 */
export interface RESTGetAPIAccountWalletDestinationInfoQuery {
  address: string;
}

/**
 * https://api.tip.cc/docs/static/index.html#/wallet/get_api_v0_account_wallets__code__destination_info
 */
export interface RESTGetAPIAccountWalletDestinationInfoPath {
  code: string;
}

/**
 * https://api.tip.cc/docs/static/index.html#/wallet/post_api_v0_account_wallets__code__withdrawal
 */
export interface RESTPostAPIAccountWalletWithdrawalResult {
  id: string;
  fee: APIMonetary;
}

/**
 * https://api.tip.cc/docs/static/index.html#/wallet/post_api_v0_account_wallets__code__withdrawal
 */
export interface RESTPostAPIAccountWalletWithdrawalBody {
  address: string;
  extra?: string;
  amount: APICoin;
}

/**
 * https://api.tip.cc/docs/static/index.html#/wallet/post_api_v0_account_wallets__code__withdrawal
 */
export interface RESTPostAPIAccountWalletWithdrawalPath {
  code: string;
}

/**
 * https://api.tip.cc/docs/static/index.html#/wallet/put_api_v0_account_wallets__code__withdrawal__id_
 */
export interface RESTPutAPIAccountWalletWithdrawalResult {
  id: string;
  withdrawal: APIWithdrawl;
  balance: APIMonetary;
}

/**
 * https://api.tip.cc/docs/static/index.html#/wallet/put_api_v0_account_wallets__code__withdrawal__id_
 */
export interface RESTPutAPIAccountWalletWithdrawalPath {
  code: string;
}

/**
 * https://api.tip.cc/docs/static/index.html#/wallet/delete_api_v0_account_wallets__code__withdrawal__id_
 */
export interface RESTDeleteAPIAccountWalletWithdrawalResult {
  id: string;
}

/**
 * https://api.tip.cc/docs/static/index.html#/wallet/delete_api_v0_account_wallets__code__withdrawal__id_
 */
export interface RESTDeleteAPIAccountWalletWithdrawalPath {
  code: string;
  id: string;
}

/**
 * https://api.tip.cc/docs/static/index.html#/wallet/get_api_v0_account_transactions__id_
 */
export interface RESTGetAPIAccountTransactionResult {
  transaction: APITransaction;
}

/**
 * https://api.tip.cc/docs/static/index.html#/wallet/get_api_v0_account_transactions__id_
 */
export interface RESTGetAPIAccountTransactionPath {
  id: string;
}

/**
 * https://api.tip.cc/docs/static/index.html#/wallet/get_api_v0_account_transactions
 */
export interface RESTGetAPIAccountTransactionsResult {
  transactions: APITransaction[];
  total: number;
  more: boolean;
}

/**
 * https://api.tip.cc/docs/static/index.html#/wallet/get_api_v0_account_transactions
 */
export interface RESTGetAPIAccountTransactionsQuery {
  since?: string;
  until?: string;
  offset?: number;
  limit?: number;
  types?: ('tip' | 'deposit' | 'withdrawal')[];
  sort?: 'asc' | 'desc';
  currency?: string;
}

/**
 * https://api.tip.cc/docs/static/index.html#/wallet/post_api_v0_tips
 */
export interface RESTPostAPITipResult {
  tips: APITip[];
  total: APIMonetary;
}

/**
 * https://api.tip.cc/docs/static/index.html#/wallet/post_api_v0_tips
 */
export type RESTPostAPITipBody =
  | {
    service: APIService;
    recipient: string;
    amount: APICoin;
  }
  | {
    service: APIService;
    recipients: string[];
    amount: APICoin;
  };
