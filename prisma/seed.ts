import { PrismaClient } from "@prisma/client"
import { users } from "../fixtures/users.fixture"
import { getPrimsaClient } from "./get-primsa-client"

async function init(primsa: PrismaClient): Promise<void> {
  const usersWithoutIds = users.map(({ email, name }) => {
    return {
      name,
      email,
    }
  })
  await primsa.user.createMany({
    data: usersWithoutIds,
  })
}

; (async () => {
  const prisma = getPrimsaClient()
  try {
    console.log("Started seeding... 🌱")
    await prisma.$connect()
    await init(prisma)
    console.log("Done 🌲")
  } catch (e) {
    console.error(e)
  } finally {
    await prisma.$disconnect()
    process.exit()
  }
})()
