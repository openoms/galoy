import { Users } from "@app"
import { InvalidLanguageError } from "@domain/errors"

import { createUserWalletFromUserRef, getUserByTestUserRef } from "test/helpers"

let userIdA: UserId

beforeAll(async () => {
  await createUserWalletFromUserRef("A")
  userIdA = (await getUserByTestUserRef("A")).id
})

describe("Users - updateLanguage", () => {
  it("updates successfully", async () => {
    const result = await Users.updateLanguage({ userId: userIdA, language: "es" })
    expect(result).not.toBeInstanceOf(Error)
    expect(result).toEqual(
      expect.objectContaining({
        id: userIdA,
        language: "es",
      }),
    )

    await Users.updateLanguage({ userId: userIdA, language: "en" })
    const user = await Users.getUser(userIdA)
    expect(user).not.toBeInstanceOf(Error)
    expect(user).toEqual(
      expect.objectContaining({
        id: userIdA,
        language: "en",
      }),
    )
  })

  it("fails with invalid language", async () => {
    const result = await Users.updateLanguage({ userId: userIdA, language: "ru" })
    expect(result).toBeInstanceOf(InvalidLanguageError)
  })
})
