import { prisma } from '@/db';

export const getUserByEmail = async (email: string) => {
    try {
        const user = await prisma.user.findUnique({ where: { email } });

        return user;
    } catch (error) {
        return null;
    }
};

export const getUserByUserId = async (userid: string) => {
    try {
        const user = await prisma.user.findUnique({ where: { userid } });

        return user;
    } catch (error) {
        return null;
    }
};