import { PrismaClient } from "@prisma/client";

let primsa: PrismaClient;

function getPrimsaClient() {
  if (!primsa) {
    primsa = new PrismaClient();
  }
  return primsa;
}

export { getPrimsaClient };
