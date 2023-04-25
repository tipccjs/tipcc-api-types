import type { APICurrencySymbol, APIMonetary } from './currencies';

export enum APITransactionDirection {
  Incoming = 'incoming',
  Outgoing = 'outgoing',
}

export enum APITransactionType {
  Tip = 'tip',
  Deposit = 'deposit',
  Withdrawal = 'withdrawal',
}

export interface APITransaction<
  TransactionType extends APITransactionType = APITransactionType.Tip,
> {
  id: string;
  direction: APITransactionDirection;
  type: APITransactionType;
  amount: APIMonetary;
  fee: APIMonetary | null;
  usd_value: APIMonetary;
  service: APIService;
  chat_id: TransactionType extends APITransactionType.Tip
    ? string | null
    : null;
  subchat_id: TransactionType extends APITransactionType.Tip
    ? string | null
    : null;
  sender: TransactionType extends APITransactionType.Tip ? APIConnection : null;
  recipient: TransactionType extends APITransactionType.Tip
    ? APIConnection
    : null;
  created: string;
}

export enum APIService {
  Discord = 'discord',
}

export interface APIConnection {
  identifier: string;
  username?: string;
  avatar_url?: string;
  service: APIService;
}

export interface APIWallet {
  code: APICurrencySymbol;
  name: string;
  balance: APIMonetary;
  usd_value: APIMonetary;
}

export interface APIWithdrawl {
  id: string;
  txid: string;
  amount: APIMonetary;
  fee: APIMonetary;
}

export interface APITip {
  id: string;
  recipient: APIConnection;
  amount: APIMonetary;
}
