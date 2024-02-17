"use client"

import { Button } from "@/components/ui/button"
import { signIn, useSession } from "next-auth/react"
import Link from "next/link"

export default function Home() {

  const { data, status } = useSession()

  const Logar = async () => {
    await signIn()
  }

  return (
    <div className="w-full h-[100vh] pt-[160px] flex items-center justify-center">
      {status === 'authenticated' ? (
        <div className="font-bold flex flex-col items-center justify-center">
          <h1 className="uppercase text-[30px]">Bem-vindo!</h1> <p className="font-semibold">{data.user?.name}</p>
        </div>
      ) : (
        <div className="gap-2">
          Você não se encontra logado clique <a onClick={Logar} className="w-[120px] cursor-pointer underline font-semibold">AQUI</a>  para ser redirecionado ou aqui para se <Link href="/cadastro" className="cursor-pointer underline font-semibold uppercase">inscrever</Link>
        </div>
      )}
    </div>
  )
}