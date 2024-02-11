import { PrismaClient } from "@prisma/client";

const client = global.prismadb || new PrismaClient();