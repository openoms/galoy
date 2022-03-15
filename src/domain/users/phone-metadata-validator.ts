import { getRewardsConfig } from "@config"
import {
  MissingPhoneMetadataError,
  InvalidPhoneMetadataTypeError,
  InvalidPhoneMetadataCountryError,
} from "@domain/errors"

const { whitelistedCountries } = getRewardsConfig()
export const PhoneMetadataValidator = (): PhoneMetadataValidator => {
  const validateForReward = (
    phoneMetadata: PhoneMetadata | null,
  ): true | ApplicationError => {
    if (phoneMetadata === null || !phoneMetadata.carrier)
      return new MissingPhoneMetadataError()

    if (phoneMetadata.carrier.type === "voip") return new InvalidPhoneMetadataTypeError()

    if (
      whitelistedCountries.length > 0 &&
      phoneMetadata.countryCode &&
      !whitelistedCountries.includes(phoneMetadata.countryCode.toUpperCase())
    )
      return new InvalidPhoneMetadataCountryError()

    return true
  }

  return {
    validateForReward,
  }
}
