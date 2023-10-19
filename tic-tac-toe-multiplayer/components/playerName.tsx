"use client";

import { useState } from "react";

export default function PlayerName() {
  const [playerName, setPlayerName] = useState("Player");
  return (
    <div className="border-b-white border-b-4">
      <input type="text" placeholder="Player1" value={playerName}
        onChange={(e) => setPlayerName(() => e.target.value)}
        className="bg-transparent border-0 focus:border-0 outline-0 text-center  text-4xl p-2 shadow-md font-mono" autoFocus />
    </div>
  )
}
