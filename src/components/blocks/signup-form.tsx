"use client";
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select } from "@/components/ui/select"
import { SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Link from 'next/link';
import { signUp, SignUpState } from '@/lib/actions';

export default function SignupForm() {
    const [userid, setUserid] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isTermsChecked, setIsTermsChecked] = useState(false)
    const [birthday, setBirthday] = useState({ day: '', month: '', year: '' })
    const [errmsg, setErrmsg] = useState<SignUpState>()

    const months = [
        '1月', '2月', '3月', '4月', '5月', '6月',
        '7月', '8月', '9月', '10月', '11月', '12月'
    ]

    const days = Array.from({ length: 31 }, (_, i) => i + 1)
    const currentYear = new Date().getFullYear()
    const years = Array.from({ length: 100 }, (_, i) => currentYear - i)

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        // Handle sign-in logic here
        const formData = { userid, email, password, birthday: new Date(`${birthday.year}-${birthday.month}-${birthday.day}`) }
        const res = await signUp({ errors: {}, message: null }, formData)
        setErrmsg(res)
        console.log('Sign in attempted with:', { userid, email, password, birthday })
    }

    return (
        <form className="space-y-6">
            <div>
                <Label htmlFor="userid">ユーザーID</Label>
                <Input
                    id="userid"
                    name="userid"
                    type="text"
                    required
                    className="mt-1"
                    onChange={(e) => setUserid(e.target.value)}
                />
            </div>

            <div>
                {
                    errmsg && <p className="text-red-500 text-sm">{errmsg.errors?.userid}</p>
                }
            </div>

            <div>
                <Label htmlFor="email">メールアドレス</Label>
                <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div>
                {
                    errmsg && <p className="text-red-500 text-sm">{errmsg.errors?.email}</p>
                }
            </div>

            <div>
                <Label htmlFor="password">パスワード</Label>
                <Input
                    id="password"
                    name="password"
                    type="password"
                    required
                    className="mt-1"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>

            <div>
                {
                    errmsg && <p className="text-red-500 text-sm">{errmsg.errors?.password}</p>
                }
            </div>

            <div>
                <Label>誕生日</Label>
                <div className="grid grid-cols-3 gap-3 mt-1">
                    <Select onValueChange={(value) => setBirthday({ ...birthday, year: value })}>
                        <SelectTrigger>
                            <SelectValue placeholder="年" />
                        </SelectTrigger>
                        <SelectContent>
                            {years.map((year) => (
                                <SelectItem key={year} value={year.toString()}>
                                    {year}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Select onValueChange={(value) => setBirthday({ ...birthday, month: value })}>
                        <SelectTrigger>
                            <SelectValue placeholder="月" />
                        </SelectTrigger>
                        <SelectContent>
                            {months.map((month, index) => (
                                <SelectItem key={month} value={(index + 1).toString()}>
                                    {month}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    <Select onValueChange={(value) => setBirthday({ ...birthday, day: value })}>
                        <SelectTrigger>
                            <SelectValue placeholder="日" />
                        </SelectTrigger>
                        <SelectContent>
                            {days.map((day) => (
                                <SelectItem key={day} value={day.toString()}>
                                    {day}
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                </div>
            </div>

            <div>
                {
                    errmsg && <p className="text-red-500 text-sm">{errmsg.errors?.birthday}</p>
                }
            </div>

            <div className="text-xs text-gray-500 flex gap-2">
                <Checkbox id="terms" onCheckedChange={() => setIsTermsChecked(!isTermsChecked)} checked={isTermsChecked} />
                <Label htmlFor="terms">
                    <Link href="/terms" className="text-blue-600 hover:underline">
                        利用規約
                    </Link>
                    に同意する
                </Label>
            </div>

            <div>
                <Button type="submit" className="w-full bg-green-600 hover:bg-green-700 disabled:bg-neutral-400" disabled={!isTermsChecked} onClick={handleSubmit}>
                    サインアップ
                </Button>
            </div>
        </form>
    )
}