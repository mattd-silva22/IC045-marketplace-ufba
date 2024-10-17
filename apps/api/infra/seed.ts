import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Seed para um agente com UUID
  await prisma.agents.create({
    data: {
      id: '123e4567-e89b-12d3-a456-426614174000', // Exemplo de UUID, pode ser gerado dinamicamente
      name: 'Agente 001',
      description: 'Agente responsável por suporte técnico',
      persona: 'Amigável e profissional',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  });

  console.log('Seed executado com sucesso.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
