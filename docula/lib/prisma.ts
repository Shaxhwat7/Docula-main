import {PrismaClient} from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
    prisma: PrismaClient | undefined;
};

export default const prisma = globalForPrisma ?? new PrismaClient();
    if(process.env.NODE_ENV !== "production"){
        globalForPrisma.prisma = prisma;
    }