"use client"

import { Button } from "@/components/ui/button"
import { signIn, useSession } from "next-auth/react"
import Link from "next/link"
import PageCadastro from "../cadastro/components/pageCadastro"

export default function Home() {

  const { data, status } = useSession()

  const Logar = async () => {
    await signIn()
  }

  return (
    <div className="w-full h-[100vh] pt-[160px] flex items-center justify-center" style={{backgroundImage: 'url(/images/carousel/plano-de-fundo.jpg)'}}>
      <PageCadastro/>
    </div>
  )
}