"use server"
import { PrismaClient } from "@prisma/client"
/* import { useRouter } from "next/navigation"; */

const prisma = new PrismaClient()

const CreateUser = async (userData: any) => {


    /* const router = useRouter() */

    try {

        const data = {
            ...userData,
            createdAt: new Date()
        }


        const newUser = await prisma.createUser.create({
            data: {
                id: userData.id as string,
                email: userData.email as string,
                password: userData.password as string
            }
        })
        return newUser 

    } catch (error) {
        console.log('Erro ao criar o usuário', error)
    }

};
export default CreateUser