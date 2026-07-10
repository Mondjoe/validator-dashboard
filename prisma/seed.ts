import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const validators = [
    { address: "YourValidatorAddress1" },
    { address: "YourValidatorAddress2" },
    { address: "YourValidatorAddress3" },
    // Add more if needed
  ];

  for (const v of validators) {
    await prisma.validator.upsert({
      where: { address: v.address },
      update: {},
      create: { address: v.address },
    });
  }
}

main()
  .then(() => prisma.$disconnect())
  .catch(e => {
    console.error(e);
    prisma.$disconnect();
  });