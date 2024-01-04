import { PrismaClient } from "@prisma/client"
import { NextResponse } from "next/server"
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export async function POST(request) {
    const body = await request.json()
    const { name, email, password } = body
    
    if (!name || !email || !password) {
        return NextResponse.json({ error: 'Missing name, email, or password' }, { status: 400 })
    }

    const exist = await prisma.user.findUnique({
        where: { email }
    })

    if (exist) {
        return NextResponse.json({ error: 'Email sudah digunakan!' }, { status: 400 })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const dateNow = new Date()
    const gmt7 = new Date(dateNow.getTime() + (7 * 60 * 60 * 1000))

    const user = await prisma.user.create({
        data: {
            name, email, hashedPassword, createdAt: gmt7, updatedAt: gmt7
        }
    })

    return NextResponse.json(user)
}