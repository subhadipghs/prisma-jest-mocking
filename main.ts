import { PrismaClient } from "@prisma/client";
import { users } from "./fixtures/users.fixture";
import { getPrimsaClient } from "./get-primsa-client";

async function initalizeMockUsers(primsa: PrismaClient): Promise<void> {
  const usersWithoutIds = users.map(({ email, name }) => {
    return {
      name,
      email,
    };
  });
  await primsa.user.createMany({
    data: usersWithoutIds,
  });
}

async function main(primsa: PrismaClient): Promise<string[]> {
  await primsa.$connect();
  const users = await primsa.user.findMany({
    select: {
      email: true,
    },
  });
  await primsa.$disconnect();
  return users.map((user) => user.email);
}

if (require.main === module) {
  const primsa = getPrimsaClient();
  main(primsa).then(console.log).catch(console.error);
}

export { main };
