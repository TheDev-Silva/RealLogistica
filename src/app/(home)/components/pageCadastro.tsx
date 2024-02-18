"use client"
import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";


export default function PageCadastro() {

  const router = useRouter()

  const { status, data } = useSession()


  const handleClickLogin = () => {

    signIn()

  }

  return (
    <div className="p-2 bg-transparent md:w-full flex flex-col">
      <div className="flex items-end justify-end pb-2">
      </div>
      <div className="gap-2 min-h-[400px] md:flex flex-grow p-5 md:p-0 bg-blend-saturation bg-transparent">
        <div className="w-full rounded-sm p-5 flex flex-col items-center justify-between">
          <h1 className="text-[120px] font-bold " style={{ fontFamily: 'Bebas Neue', lineHeight: '100px' }}>Ainda Não tem cadastro? </h1><p style={{ fontFamily: 'Arizona', fontSize: '60px', color: '#ff6600', textShadow: "1px 0px 2px #000", letterSpacing: '2px' }}>se increva já</p>
          <Link href={`/signIn`}><Button className="uppercase w-[400px] h-14">inscrever</Button></Link>
        </div>
        <div className="w-full p-5 md:p-0 flex flex-col items-center justify-center backdrop-blur-sm bg-opacity-30 bg-[#ff6600] rounded-lg gap-4">
          <div className="flex flex-col gap-4">


            <Button className="min-w-[200px]" onClick={handleClickLogin}>Fazer Login com Google</Button>
          </div>
        </div>
      </div>
    </div>
  )
}