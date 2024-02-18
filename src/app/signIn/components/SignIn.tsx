"use client"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { ArrowBigLeft } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import CreateUser from "./createUser"


export default function SignInPage() {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')

  const handlerSumbmit = async (e: any) => {
    e.preventDefault()

    try {
      const newUser = await CreateUser({ email, password })
      console.log('Novo usuário criado');
      
    } catch (error) {
      setError('Erro ao criar usuário');
      console.error('Erro ao criar usuário:', error);
    }

  }

  return (
    <div className="p-4 gap-4 w-full min-h-auto flex flex-col items-center">
      <Link href="/" className="absolute right-2">
        <Button><ArrowBigLeft /></Button>
      </Link>
      <div className="flex flex-col w-[500px] md:w-[500px] h-[350px] md:h-[450px] rounded-lg p-2 backdrop-blur-sm backdrop-brightness-75 bg-gradient-to-tr from-orange-500 to-amber-800 shadow-md shadow-black gap-4 justify-between">

        <form onClick={handlerSumbmit} className="w-full h-screen flex flex-col gap-4 justify-between p-4">
          <div className="w-full flex flex-col gap-4 items-center">
            <div className="flex flex-col items-center justify-between">
              <h1 className="font-bold text-2xl uppercase text-white">Cadastro de usuário</h1>
              <p className="italic">* crie um e-mail e uma senha</p>
            </div>

            <div className="w-full flex items-center gap-4 justify-between">
              <div className="absolute left-10 text-slate-400">
                Email
              </div>
              <div className="w-full">
                <Input
                  placeholder=""
                  type={"email"} value={email}
                  onChange={(e) =>
                    setEmail(e.target.value)}
                  className="pl-20 shadow-lg shadow-black h-12"
                />
              </div>
            </div>
            <div className="w-full flex items-center gap-4 justify-between">
              <div className="absolute left-10 text-slate-400">
                Senha
              </div>
              <div className="w-full">
                <Input
                  placeholder=""
                  type={"password"} value={password}
                  onChange={(e) =>
                    setPassword(e.target.value)}
                  className="pl-20 shadow-lg shadow-black h-12"
                />
              </div>

            </div>

          </div>
          <Button className="w-full uppercase p-6 hover:bg-[#fff] hover:text-black font-bold" type="submit">Criar Cadastrar</Button>
        </form>

      </div>
      {error === "" && <p>{error}</p>}
    </div>
  )

};
