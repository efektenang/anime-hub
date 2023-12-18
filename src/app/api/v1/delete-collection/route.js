import prisma from "@/libs/prisma"

export async function POST(request) {
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