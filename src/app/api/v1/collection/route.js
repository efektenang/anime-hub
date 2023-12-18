import { authUserSession } from "@/libs/auth-libs";
import prisma from "@/libs/prisma"

export async function GET() {
    const user = await authUserSession();
    const result = await prisma.collection.findMany({
      where: { user_email: user.email },
    });

    return Response.json({
       result
    })
}

export async function POST(request) {
    const { mal_id, user_email, title_anime, img_src } = await request.json()
    const data = { mal_id, user_email, title_anime, img_src }
    
    const createCollection = await prisma.collection.create({ data })
    
    if (!createCollection) return Response.json({status: 500, isCreated: false})
    
    return Response.json({ 
        status: 200,
        isCreated: true
     })
}

export async function DELETE(request) {
    const { mal_id } = await request.json()
    const data = { mal_id }
    
    const isCollect = await prisma.collection.findFirst({
        where: { mal_id: data.mal_id }
    })
    
    const deleteCollection = await prisma.collection.delete({
        where: {
            id: isCollect.id
        }
    })

    if (!deleteCollection) return Response.json({ status: 500, isDeleted: false })

    return Response.json({
        status: 200,
        isDeleted: true
    })
}