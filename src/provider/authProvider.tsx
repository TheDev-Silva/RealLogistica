"use client"
import { SessionProvider, SessionProviderProps } from 'next-auth/react'

export default function Authprivider({children}: SessionProviderProps) {
    return <SessionProvider>{children}</SessionProvider>
}