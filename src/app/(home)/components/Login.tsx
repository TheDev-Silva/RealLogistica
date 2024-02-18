"use client"
import CreateUser from "@/app/signIn/components/createUser"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import LoginUser from "@/lib/loginUser"
import { signIn, useSession } from "next-auth/react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"


export default function Login() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const { status, data } = useSession()


  const handleClickLogin = () => {

    signIn()

  }

  const handlerSumbmit = async (e: any) => {
    e.preventDefault()

    try {
      const successUser = await LoginUser({ email, password })

      console.log('Novo usuário criado', successUser);

      if (successUser) {

        router.push('/trufa')
      }
      else {
        setError('Credenciais inválidas')
      }

    } catch (error) {
      setError('Erro ao criar usuário');
      console.error('Erro ao criar usuário:', error);
    }

  }

  return (
    <div className="w-full h-screen flex flex-col items-center justify-center">
      <div className="flex flex-col w-[500px] md:w-[500px] rounded-lg p-2 gap-4 justify-between ">

        <form onClick={handlerSumbmit} className="w-full h-[400px] md:min-h-[300px] rounded-lg bg-[#ff6600] flex flex-col gap-4 justify-between p-4">
          <div className="w-full flex flex-col gap-4 items-center">
            <div className="flex flex-col items-center justify-between">
              <h1 className="font-bold text-2xl uppercase text-white">Fazer Login</h1>
            </div>

            <div className="w-full flex items-center gap-4 justify-between">
              <div className="w-full md:left-24 left-20 text-slate-950 font-bold">
                E-mail
              </div>
              <div className="">
                <Input
                  placeholder=""
                  type={"email"} value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)}
                  className="md:w-[380px] w-[350px] pl-10 shadow-lg shadow-black h-12"
                />
              </div>
            </div>
            <div className="w-full flex items-center gap-2 justify-between">
              <div className="text-slate-950 font-bold">
                Senha
              </div>
              <div className="">
                <Input
                  placeholder=""
                  type={"password"} value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)}
                  className="md:w-[380px] w-[350px] pl-20 shadow-lg shadow-black h-12"
                />
              </div>

            </div>

          </div>
          <div className="flex flex-col items-center">
            <Button className="w-full uppercase p-6 hover:bg-[#fff] hover:text-black font-bold" type="submit">
            Entrar
          </Button>
          <Link href={``} className="min-w-[200px] hover:underline text-white" onClick={handleClickLogin}>
              Fazer Login com Google
          </Link>
          </div>
          
        </form>

      </div>
      {error === "" && <p>{error}</p>}
    </div>
  )

};
