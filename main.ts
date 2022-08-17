import { Prisma, PrismaClient } from "@prisma/client";
import { getPrimsaClient } from "./get-primsa-client";

const primsa = getPrimsaClient();

async function initalizeMockUsers(primsa: PrismaClient): Promise<void> {
  const users = [
    { name: "User 1", email: "user1@gmail.com" },
    { name: "User 2", email: "user2@gmail.com" },
  ];
  await primsa.user.createMany({
    data: users,
  });
}

async function main() {
  await primsa.$connect();
  await initalizeMockUsers(primsa);
  const users = await primsa.user.findMany();
  await primsa.$disconnect();
  return users;
}

if (require.main === module) {
  main().then(console.log).catch(console.error);
}

export { main };
