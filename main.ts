import { PrismaClient } from "@prisma/client"
import { getPrimsaClient } from "./prisma/get-primsa-client"

async function main(
  primsa: PrismaClient
): Promise<string[]> {
  await primsa.$connect()
  const users = await primsa.user.findMany({
    select: {
      email: true,
    },
  })
  await primsa.$disconnect()
  return users.map(user => user.email)
}

if (require.main === module) {
  const primsa = getPrimsaClient()
  main(primsa).then(console.log).catch(console.error)
}

export { main }
