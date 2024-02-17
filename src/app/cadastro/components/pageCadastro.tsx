"use client"
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";

export default function PageCadastro() {


  const { status, data } = useSession()


  const handleClickLogin = async () => {

    await signIn()
  }

  return (
    <div className="p-2 bg-slate-100 md:w-full flex flex-col">
      <div className="flex items-end justify-end pb-2">
        <Link href="/">
          <Button>Voltar</Button>
        </Link>
      </div>
      <div className="gap-2 min-h-[420px] md:flex flex-grow p-5 md:p-0 bg-blend-saturation bg-slate-100">
        <div className="w-full rounded-sm p-5 flex flex-col items-center justify-between">
          <h1 className="text-[120px] font-bold " style={{fontFamily: 'Bebas Neue', lineHeight: '100px'}}>Ainda Não tem cadastro? </h1><p style={{fontFamily: 'Arizona', fontSize: '60px', color: '#ff6600', textShadow: "1px 0px 2px #000", letterSpacing: '2px'}}>se increva já</p>
            <Button>Fazer Cadastro</Button>
        </div>
        <div className="w-full p-5 md:p-0 flex flex-col items-center justify-center bg-[#ff6600] rounded-lg gap-4">
          <div className="flex gap-4">
            
            <Button className="min-w-[200px]">Fazer Login</Button>
            <Button className="min-w-[200px]" onClick={handleClickLogin}>Fazer Login com Google</Button>
          </div>
        </div>
      </div>
      

    </div>
  )
}