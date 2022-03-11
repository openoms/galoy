import { LedgerTransactionType } from "@domain/ledger"

export const addLnTxSendMetadata = ({
    paymentHash,
    fee,
    feeDisplayCurrency,
    amountDisplayCurrency,
    pubkey,
    feeKnownInAdvance,
  }: {
    paymentHash: PaymentHash
    fee: BtcPaymentAmount
    feeDisplayCurrency: DisplayCurrencyBaseAmount
    amountDisplayCurrency: DisplayCurrencyBaseAmount
    pubkey: Pubkey
    feeKnownInAdvance: boolean
  }) => {
    const metadata: AddLnSendLedgerMetadata = {
      type: LedgerTransactionType.Payment,
      pending: true,
      hash: paymentHash,
      fee: Number(fee.amount) as Satoshis,
      feeUsd: feeDisplayCurrency,
      usd: amountDisplayCurrency,
      pubkey,
      feeKnownInAdvance,
    }
    return metadata
  }
