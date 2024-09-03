import { auth } from '~/auth';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { SignOut } from '@/hooks/auth-hook';

export default async function MyPage() {
    const session = await auth();

    return (
        <main className='flex min-h-screen flex-col items-center'>
            <h1 className='my-6 text-center text-2xl'>マイページ</h1>
            <div className='flex flex-col'>
                <div className='bg-gray-200 rounded-tl-md rounded-tr-md px-2 py-1.5 text-sm'>
                    ユーザー情報
                </div>
                <pre className='bg-gray-100 rounded-bl-md rounded-br-md p-2'>
                    {JSON.stringify(session, null, 2)}
                </pre>
            </div>
            <Button asChild>
                <Link
                    href='/'
                >
                    ホーム
                </Link>
            </Button>
            <form action={SignOut}>
                <Button type='submit'>
                    サインアウト
                </Button>
            </form>
        </main>
    );
}