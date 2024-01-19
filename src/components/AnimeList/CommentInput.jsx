"use client";

import { useState } from "react";

export default function CommentInput({
  anime_mal_id,
  user_email,
  username,
  anime_title,
}) {
  const [comment, setComment] = useState("");
  const [isCreated, setIsCreated] = useState(false);

  const handleInput = (e) => {
    setComment(e.target.value);
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();

    const data = { anime_mal_id, user_email, username, anime_title, comment };

    const response = await fetch("/api/v1/comment", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const postComment = await response.json();
    if (postComment.status === 200) {
      setIsCreated(true);
    }
    return;
  };

  return (
    <div className="mt-4 flex flex-col">
      {isCreated && <p className="text-white">postingan terkirim</p>}
      <textarea
        className="rounded-md border-2 border-gray-400 p-2 text-color-dark"
        placeholder="Write your comment here..."
        onChange={handleInput}
      ></textarea>
      <button
        className="mt-2 rounded-md bg-color-accent p-2 text-white"
        onClick={handleSubmitComment}
      >
        Submit
      </button>
    </div>
  );
}
