"use client"
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Login from "./Login";


export default function PageCadastro() {

  const router = useRouter()



  return (
    <div className="bg-transparent md:w-full flex flex-col h-[450px]">
      <div className="flex items-end justify-end pb-2">
      </div>
      <div className="gap-2 md:min-h-[300px] h-[400px] md:flex flex-grow p-5 md:p-0 bg-blend-saturation bg-transparent">
        <div className="w-full rounded-sm md:p-5 p-0 flex flex-col items-center md:justify-between justify-center">
          <h1 className="text-[120px] font-bold " style={{ fontFamily: 'Bebas Neue', lineHeight: '100px' }}>Ainda Não <p className="text-[60px] relative font-Bebas_Neue">tem</p>  cadastro? </h1><p style={{ fontFamily: 'Arizona', fontSize: '60px', color: '#ff6600', textShadow: "1px 0px 2px #000", letterSpacing: '2px' }}>se increva já</p>
          <Link href={`/signIn`}><Button className="uppercase w-[400px] h-14">inscrever</Button></Link>

        </div>
        <div className="w-full p-4 md:p-0 flex flex-col items-center justify-center  rounded-lg gap-4">
          <Login />
          <div className="flex flex-col gap-4">

          </div>
        </div>
      </div>
    </div>
  )
}