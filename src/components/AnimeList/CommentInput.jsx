"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CommentInput({
  anime_mal_id,
  user_email,
  username,
  anime_title,
}) {
  const [comment, setComment] = useState("");
  const [error, setError] = useState(false);
  const [isCreated, setIsCreated] = useState(false);
  const router = useRouter();

  const handleInput = (e) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();

    if (comment.length < 3) {
      setError(true);
      return;
    }

    const data = { anime_mal_id, user_email, username, anime_title, comment };

    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const postComment = await response.json();
    if (postComment.status === 200) {
      setIsCreated(true);
      setComment("");
      setError(false);
      router.refresh();
    }
    return;
  };

  return (
    <div className="mt-4 flex flex-col">
      {isCreated && <p className="text-white">postingan terkirim</p>}
      <textarea
        className="rounded-md border-2 border-gray-400 p-2 text-color-dark"
        placeholder="Write your comment here..."
        value={comment}
        onChange={handleInput}
      ></textarea>
      {error && (
        <p className="mb-4 mt-2 text-red-500">Comment minimal 3 characters</p>
      )}
      <button
        className="mt-2 rounded-md bg-color-accent p-2 text-white"
        onClick={handleSubmitComment}
      >
        Submit
      </button>
    </div>
  );
}
