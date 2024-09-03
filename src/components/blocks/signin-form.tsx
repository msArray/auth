"use client";
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import Link from 'next/link'
import { SignIn } from '@/hooks/auth-hook';

export default function SigninForm() {
    const [userinfo, setuserInfo] = useState('')
    const [password, setPassword] = useState('')

    return (
        <form className="space-y-6" action={SignIn}>
            <div>
                <Label htmlFor="userinfo">ユーザーID または メールアドレス</Label>
                <Input
                    id="userinfo"
                    name="userinfo"
                    type="text"
                    autoComplete="userinfo"
                    required
                    className="mt-1"
                    value={userinfo}
                    onChange={(e) => setuserInfo(e.target.value)}
                />
            </div>

            <div>
                <Label htmlFor="password">パスワード</Label>
                <Input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="mt-1"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div className="text-sm">
                <Link href="/forgot-password" className="font-medium text-blue-600 hover:text-blue-500">
                    パスワードを忘れた場合はこちら
                </Link>
            </div>

            <div>
                <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700">
                    サインイン
                </Button>
            </div>
        </form>
    )
}