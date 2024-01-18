import prisma from "@/libs/prisma";

export async function POST(request) {
    const { anime_mal_id, user_email, anime_image, anime_title } = await request.json();
    const data = { anime_mal_id, user_email, anime_image, anime_title };

    const createCollection = await prisma.collection.create({ data });
    if (!createCollection) return Response.json({ message: "Failed to create collection", status: 500, isCreated: false });
    return Response.json({ createCollection, status: 200, isCreated: true });
}