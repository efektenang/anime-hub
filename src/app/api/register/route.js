import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export async function POST(request) {
    const body = await request.json()
    const { name, email, password } = body
    
    if (!name || !email || !password) {
        return new NextResponse("Missing name, email, or password", {status: 400})
    }

    const exist = await prisma.user.findUnique({
        where: { email }
    })

    if (exist) {
        return new NextResponse('User already exists', { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)

    const user = await prisma.user.create({
        data: {
            name, email, hashedPassword
        }
    })

    return NextResponse.json(user)
}