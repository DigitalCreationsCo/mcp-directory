import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  console.log('Seeding database...');

  const servers = [
    {
      name: 'Filesystem',
      description: 'Secure file operations with configurable access controls. Enable reading, writing, and listing files within allowed directories.',
      command: 'npx',
      args: ['-y', '@modelcontextprotocol/server-filesystem', '/Users/username/Desktop'],
      env: {},
      logoUrl: 'https://raw.githubusercontent.com/modelcontextprotocol/servers/main/src/filesystem/logo.png',
    },
    {
      name: 'PostgreSQL',
      description: 'Read-only database access with schema inspection. querying tables, and executing custom SQL.',
      command: 'npx',
      args: ['-y', '@modelcontextprotocol/server-postgres', 'postgresql://localhost/mydb'],
      env: {},
      logoUrl: 'https://raw.githubusercontent.com/modelcontextprotocol/servers/main/src/postgres/logo.png',
    },
    {
      name: 'GitHub',
      description: 'Repository management, file operations, and issue tracking. Search code, manage pull requests, and automate workflows.',
      command: 'npx',
      args: ['-y', '@modelcontextprotocol/server-github'],
      env: {
        GITHUB_PERSONAL_ACCESS_TOKEN: '<YOUR_TOKEN>'
      },
      logoUrl: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
    },
    {
      name: 'Brave Search',
      description: 'Web search capabilities using Brave Search API. Perform general web searches and get local search results.',
      command: 'npx',
      args: ['-y', '@modelcontextprotocol/server-brave-search'],
      env: {
        BRAVE_API_KEY: '<YOUR_API_KEY>'
      },
      logoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/9d/Brave_lion_icon.svg',
    }
  ];

  for (const server of servers) {
    await prisma.mcpServer.upsert({
      where: { name: server.name },
      update: {},
      create: server,
    });
  }

  console.log('Seeding finished.');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
