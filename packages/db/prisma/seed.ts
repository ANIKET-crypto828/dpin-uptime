
import { prismaClient } from "../src";

const USER_ID = "4";

async function seed() {
   await prismaClient.user.create({
    data: {
      id: USER_ID,
      email: "test@test.com"
    }
  });

  const website = await prismaClient.website.create({
    data: {
      url: "https://test.com",
      userId: USER_ID
      }
  });

  const validator = await prismaClient.validator.create({
    data: {
      publicKey: "0x12341223123",
      location: "Kolkata",
      ip: "127.0.0.1",
      }
  });


  await prismaClient.websiteTick.create({
    data: {
      status: "Good",
      websiteId: website.id,
      latency: 100,
      createdAt: new Date(),
      validatorId: validator.id
      }
      });

   await prismaClient.websiteTick.create({
    data: {
      status: "Good",
      websiteId: website.id,
      latency: 100,
      createdAt: new Date(Date.now() - 1000 * 60 * 10), // 10 minutes ago
      validatorId: validator.id
      }
      });

     await prismaClient.websiteTick.create({
    data: {
      status: "Bad",
      websiteId: website.id,
      latency: 100,
      createdAt: new Date(Date.now() - 1000 * 60 * 20), // 20 minutes ago
      validatorId: validator.id
      }
      });
}

seed();