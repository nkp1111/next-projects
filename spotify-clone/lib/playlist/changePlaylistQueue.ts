import React from 'react'

interface ChangePlaylistQueueParams {
  queue: string[], shuffle?: boolean
}

export default function changePlaylistQueue({
  queue, shuffle = false,
}: ChangePlaylistQueueParams) {
  if (!shuffle) {
    return queue;
  }

  let shuffledQueue = [...queue];
  for (let i = shuffledQueue.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = shuffledQueue[i];
    shuffledQueue[i] = shuffledQueue[j];
    shuffledQueue[j] = temp;
  }
  return shuffledQueue;
}
