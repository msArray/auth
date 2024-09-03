import { z } from 'zod';

export const signUpSchema = z.object({
    userid: z.string().min(1, {
        message: 'ユーザーIDを入力してください。',
    }).max(20, {
        message: 'ユーザーIDは20文字以下で入力してください。',
    }).regex(/^[a-zA-Z0-9_]+$/, {
        message: 'ユーザーIDは半角英数字とアンダースコアのみ使用できます。',
    }),
    email: z.string().email({
        message: 'メールアドレスを入力してください。',
    }),
    password: z.string().min(1, {
        message: 'パスワードを入力してください。',
    }).min(8, {
        message: 'パスワードは8文字以上で入力してください。',
    }).max(50, {
        message: 'パスワードは50文字以下で入力してください。',
    }),
    birthday: z.date().min(new Date('1900-01-01'), {
        message: '正しい日付を入力してください。',
    }).max(new Date(), {
        message: '未来の日付は入力できません。',
    }),
});

export const signInSchema = z.object({
    userinfo: z.union([
        z.string().email({
            message: 'メールアドレスを入力してください。',
        }),
        z.string().min(1, {
            message: 'ユーザーIDを入力してください。',
        })]),
    password: z.string().min(1, {
        message: 'パスワードを入力してください。',
    }),
});