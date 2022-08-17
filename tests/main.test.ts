import { PrismaClient } from "@prisma/client";
import { createMock } from "ts-auto-mock";
import { users } from "../fixtures/users.fixture";
import { main } from "../main";

describe("main.ts", () => {
  let primsaMock: PrismaClient;

  beforeEach(() => {
    primsaMock = createMock<PrismaClient>();
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("should return emails of all users", async () => {
    const findManyUserMock = jest.fn().mockResolvedValue(users);
    primsaMock.user.findMany = findManyUserMock;
    const emailIds = await main(primsaMock);
    expect(findManyUserMock).toHaveBeenCalled();
    expect(findManyUserMock).toHaveBeenCalledTimes(1);
    expect(findManyUserMock).toHaveBeenLastCalledWith({
      select: { email: true },
    });
    expect(emailIds).toMatchObject(["user1@gmail.com", "user2@gmail.com"]);
  });
});
