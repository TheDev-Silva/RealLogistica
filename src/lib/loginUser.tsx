import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient()


const LoginUser = async ({ email, password }: any) => {
    try {
        const user = await prisma.user.findUnique({
            where: {
                email,
            }
        })
        if (!user) {
            return false
        }
    }
    catch(error){
        console.log('Credencial inválida', error)
    }
} 
export default LoginUser