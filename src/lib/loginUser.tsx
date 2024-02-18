import { PrismaClient, User } from "@prisma/client";

const prisma = new PrismaClient()


const LoginUser = async ({ email, password }: any) => {
    try {
        const userClient = await prisma.loginUser.findUnique({
            where: {
                email
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
