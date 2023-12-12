import NextAuth from 'next-auth'
import githubAuth from 'next-auth/providers/github'
import googleAuth from 'next-auth/providers/google'

export const authOption = {
    // providers: [
    //     githubAuth({
    //         clientId: process.env.GITHUB_ID,
    //         clientSecret: process.env.GITHUB_SECRET
    //     })
    // ],
    providers: [
        googleAuth({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        })
    ],
    secret: process.env.NEXTAUTH_SECRET
}

const handler = NextAuth(authOption)

export { handler as GET, handler as POST }