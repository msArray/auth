"use server";
import { signIn, signOut  } from "~/auth"

export const SignIn = async (formData:FormData) => {
    await signIn("credentials", formData)
}

export const SignOut = async () => {
    await signOut()
}