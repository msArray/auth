import Link from 'next/link'
import SigninForm from '@/components/blocks/signin-form'

export default function Component() {

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
                    サインイン
                </h2>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 sm:rounded-lg sm:px-10 border border-gray-200">

                    <SigninForm />

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">
                                    もしくは
                                </span>
                            </div>
                        </div>

                        <div className="mt-6">
                            <Link
                                href="/signup"
                                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md text-sm font-medium text-blue-600 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                新規アカウントを作成
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}