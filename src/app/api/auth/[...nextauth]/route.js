import NextAuth from 'next-auth'
import githubAuth from 'next-auth/providers/github'
import googleAuth from 'next-auth/providers/google'
import CredentialsProvider from 'next-auth/providers/credentials'
import { PrismaAdapter } from '@auth/prisma-adapter'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt'

const prisma = new PrismaClient()

export const authOption = {
    adapter: PrismaAdapter(prisma),
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                email: {
                    label: 'Email',
                    type: 'email',
                    placeholder: 'example@example.com'
                },
                password: {
                    label: "Password",
                    type: 'password'
                }
            },
            async authorize(credentials) {
                if (!credentials || !credentials.email || !credentials.password) return null

                const user = await prisma.user.findUnique({
                    where: {
                        email: credentials.email
                    }
                })
                
                const passwordMatch = await bcrypt.compare(credentials.password, user.hashedPassword)
                
                if (user && passwordMatch) return user

                return null
            }
        }),
        githubAuth({
            clientId: process.env.GITHUB_ID,
            clientSecret: process.env.GITHUB_SECRET
        }),
        googleAuth({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    session: {
        strategy: 'jwt'
    },
    secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOption)

export { handler as GET, handler as POST }