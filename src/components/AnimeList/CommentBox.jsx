import prisma from "@/libs/prisma";

export default async function CommentBox({ id }) {
  const comments = await prisma.comment.findMany({
    where: {
      anime_mal_id: id,
    },
  });
  return (
    <div>
      {comments.length === 0 && (
        <p className="text-color-primary">No comments yet</p>
      )}
      {comments.map((data, index) => {
        return (
          <div className="relative mb-4" key={index}>
            <p className="text-base text-color-primary">{data.username}</p>
            <p className="text-base text-color-primary">{data.comment}</p>
          </div>
        );
      })}
    </div>
  );
}
