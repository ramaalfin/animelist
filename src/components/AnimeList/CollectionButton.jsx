"use client";

import React, { useState } from "react";

export default async function CollectionButton({ anime_mal_id, user_email }) {
  const [isCreated, setIsCreated] = useState(false);

  const handleCollectionButton = async (event) => {
    event.preventDefault();

    const data = { anime_mal_id, user_email };

    const response = await fetch("/api/v1/collection", {
      method: "POST",
      body: JSON.stringify(data),
    });

    const collection = await response.json();
    if (collection.status === 200) {
      setIsCreated(true);
    }
    return;
  };
  return (
    <>
      {isCreated ? (
        <p className="text-color-primary">Berhasil ditambahkan ke koleksi</p>
      ) : (
        <button
          className="rounded bg-color-accent px-4 py-2 text-color-dark"
          onClick={handleCollectionButton}
        >
          Add to Collection
        </button>
      )}
    </>
  );
}
