"use server"
import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const CreateUser = async (userData: any) => {

  try {
    const now = new Date()
    const adjust = new Date(now.getTime() - (30 * 60 * 60 * 1000))

    const data = {
      ...userData,
      createdAt: new Date()
    }
    const newUser = await prisma.createUser.create({
      data: {
        id: userData.id,
        email: userData.email,
        password: userData.password
      }
    })
    //return newUser

  } catch (error) {
    console.log('Erro ao criar o usuário', error)
  }

};
export default CreateUser