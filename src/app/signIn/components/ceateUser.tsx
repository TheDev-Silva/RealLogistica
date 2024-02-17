import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

export default async function ceateUser(userData) {


try {
    const newUser = prisma.user.create({
        data: {
            email: userData.email,
            
        }
    })
} catch (error) {
    
}


    return (
        <div>

        </div>
    )
};
