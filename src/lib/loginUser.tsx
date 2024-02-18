import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()


const LoginUser = async (email: string, password: string ) => {
    try {
        const userClient = await prisma.loginUser.findUnique({
            where: {
                email,
                password,
            }
        })
        if(userClient && userClient.password || password) {

            return userClient;
        } else {
            return null
        }
    }
    catch(error){
        console.log('Credencial inválida', error)
    }
} 
export default LoginUser
