import { LedgerTransactionType } from "@domain/ledger"

export const LnSendLedgerMetadata = ({
  paymentHash,
  fee,
  feeDisplayUsd,
  amountDisplayUsd,
  pubkey,
  feeKnownInAdvance,
}: {
  paymentHash: PaymentHash
  fee: BtcPaymentAmount
  feeDisplayUsd: DisplayCurrencyBaseAmount
  amountDisplayUsd: DisplayCurrencyBaseAmount
  pubkey: Pubkey
  feeKnownInAdvance: boolean
}) => {
  const metadata: AddLnSendLedgerMetadata = {
    type: LedgerTransactionType.Payment,
    pending: true,
    hash: paymentHash,
    fee: Number(fee.amount) as Satoshis,
    feeUsd: feeDisplayUsd,
    usd: amountDisplayUsd,
    pubkey,
    feeKnownInAdvance,
  }
  return metadata
}

export const OnChainReceiveLedgerMetadata = ({
  onChainTxHash,
  fee,
  feeDisplayUsd,
  amountDisplayUsd,
  payee_addresses,
}: {
  onChainTxHash: OnChainTxHash
  fee: BtcPaymentAmount
  feeDisplayUsd: DisplayCurrencyBaseAmount
  amountDisplayUsd: DisplayCurrencyBaseAmount
  payee_addresses: OnChainAddress[]
}) => {
  const metadata: OnChainReceiveLedgerMetadata = {
    type: LedgerTransactionType.OnchainReceipt,
    pending: false,
    hash: onChainTxHash,
    fee: Number(fee.amount) as Satoshis,
    feeUsd: feeDisplayUsd,
    usd: amountDisplayUsd,
    payee_addresses,
  }
  return metadata
}

export const LnReceiveLedgerMetadata = ({
  paymentHash,
  fee,
  feeDisplayUsd,
  amountDisplayUsd,
}: {
  paymentHash: PaymentHash
  fee: BtcPaymentAmount
  feeDisplayUsd: DisplayCurrencyBaseAmount
  amountDisplayUsd: DisplayCurrencyBaseAmount
  pubkey: Pubkey
}) => {
  const metadata: LnReceiveLedgerMetadata = {
    type: LedgerTransactionType.Invoice,
    pending: false,
    hash: paymentHash,
    fee: Number(fee.amount) as Satoshis,
    feeUsd: feeDisplayUsd,
    usd: amountDisplayUsd,
  }
  return metadata
}
