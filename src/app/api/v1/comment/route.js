import prisma from "@/libs/prisma";

export async function POST(request) {
    const { anime_mal_id, user_email, username, anime_title, comment } = await request.json();
    const data = { anime_mal_id, user_email, username, anime_title, comment };

    const createComment = await prisma.comment.create({ data });

    if (!createComment) return Response.json({ message: "Failed to create comment", status: 500, isCreated: false });
    return Response.json({ createComment, status: 200, isCreated: true });
}