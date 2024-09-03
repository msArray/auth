'use server';

import { getUserByEmail, getUserByUserId } from '@/db/user';
import { signUpSchema } from '@/lib/schemas';
import { signIn, signOut } from '~/auth';
import { prisma } from '@/db';
import bcrypt from 'bcrypt';
import { AuthError } from 'next-auth';
import { redirect } from 'next/navigation';

export type SignUpState = {
    errors?: {
        userid?: string[];
        email?: string[];
        password?: string[];
        birthday?: string[];
    };
    message?: string | null;
};

type AsformData = {
    userid?: string;
    email?: string;
    password?: string;
    birthday?: Date;
}

export async function signUp(prevState: SignUpState, formData: AsformData): Promise<SignUpState> {
    const validatedFields = signUpSchema.safeParse({
        userid: formData.userid,
        email: formData.email,
        password: formData.password,
        birthday: formData.birthday,
    });

    if (!validatedFields.success) {
        return {
            errors: validatedFields.error.flatten().fieldErrors,
            message: '入力項目が足りません。',
        };
    }

    const { userid, email, password , birthday } = validatedFields.data;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        let existingUser = await getUserByEmail(email);
        if(!existingUser){
            existingUser = await getUserByUserId(userid);
        }

        if (existingUser) {
            return {
                message: '既に登録されているユーザーです。',
            };
        }

        await prisma.user.create({
            data: {
                userid: userid,
                email: email,
                password: hashedPassword,
                birthdate: birthday,
            },
        });
    } catch (error) {
        throw error;
    }

    redirect('/signin');
}

export async function login(prevState: string | undefined, formData: FormData) {
    try {
        await signIn('credentials', formData);
    } catch (error) {
        if (error instanceof AuthError) {
            switch (error.type) {
                case 'CredentialsSignin':
                    return 'Invalid credentials.';
                default:
                    return 'Something went wrong.';
            }
        }

        throw error;
    }
}

export async function logout() {
    try {
        await signOut();
    } catch (error) {
        throw error;
    }
}