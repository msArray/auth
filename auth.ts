import { getUserByEmail, getUserByUserId } from '@/db/user';
import { signInSchema } from '@/lib/schemas';
import { authConfig } from '~/auth.config';
import bcrypt from 'bcrypt';
import NextAuth from 'next-auth';
import { PrismaAdapter } from "@auth/prisma-adapter"
import { PrismaClient } from "@prisma/client"
import Credentials from 'next-auth/providers/credentials';

const prisma = new PrismaClient();

export const { auth, signIn, signOut } = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },
    ...authConfig,
    providers: [
        Credentials({
            credentials: {
                userinfo: { label: "User ID or Email", type: "text" },
                password: {  label: "Password", type: "password" },
            },
            authorize:async (credentials) => {
                const parsedCredentials = signInSchema.safeParse(credentials);

                if (parsedCredentials.success) {
                    const { userinfo, password } = parsedCredentials.data;
                    let user;
                    if (userinfo.indexOf('@') > -1) {
                        user = await getUserByEmail(userinfo);
                    } else {
                        user = await getUserByUserId(userinfo);
                    }


                    if (!user) return null;

                    const passwordMatch = await bcrypt.compare(password, user.password);

                    if (passwordMatch) return user;
                }

                return null;
            },
        }),
    ],
});