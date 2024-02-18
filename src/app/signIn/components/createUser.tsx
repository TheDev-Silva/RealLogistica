"use server"
import { PrismaClient } from "@prisma/client"
import { useRouter } from "next/navigation";

const prisma = new PrismaClient()

const CreateUser = async (userData: any) => {


    const router = useRouter()

    try {
        const newUser = await prisma.createUser.create({
            data: {
                id: userData.id as string,
                email: userData.email as string,
                password: userData.password as string
            }
        })
        return router.push("/")

    } catch (error) {
        console.log('Erro ao criar o usuário', error)
        throw new Error('Erro ao criar usuário')
    }

};
export default CreateUser