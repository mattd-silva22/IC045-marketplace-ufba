import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export async function SeedTags() {
  const tags = [
    {
      name: 'Inteligência Artificial',
    },
    {
      name: 'Liquidos Iônicos',
    },
    {
      name: 'Sistemas de Recomendação',
    },
    {
      name: 'Etimologia Latina',
    },
    {
      name: 'Povos Pan-Amazonicos & Pre-Colombianos',
    },
    {
      name: 'Redes de Computadores',
    },
    {
      name: 'IOT - Internet das Coisas',
    },
  ];

  try {
    await prisma.tbTags.createMany({
      data: tags,
    });
    console.log('Tabela de Tags preenchida com sucesso.');
  } catch (error) {
    console.error('Falha ao preencher tabela de Tags.');
    console.log(error.message);
  }
}
