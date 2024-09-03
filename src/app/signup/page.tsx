import Link from 'next/link'
import SignupForm from '@/components/blocks/signup-form'

export default function Component() {

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    サインアップ
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600">
                    ^・ω・^
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10 border border-gray-200">

                    <SignupForm />

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">
                                    すでにアカウントをお持ちですか？
                                </span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <Link
                                href="/signin"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                サインイン
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}