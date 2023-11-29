"use client";

import React, { useEffect, useState } from 'react'

export default function AnimatedIcon() {
  return (
    <div className='w-3 h-5 flex items-end rotate-90 gap-rt justify-center flex-col'>
      {Array(4).fill(0).map((_, ind) => (
        <Progress key={ind} />
      ))}
    </div>
  )
}


export function Progress() {
  const [currentHeight, setCurrentHeight] = useState(Math.floor(Math.random() * 6));
  const [heightIncrement, setHeightIncrement] = useState(Math.floor(Math.random() * 3));
  useEffect(() => {
    let interval = setInterval(() => {
      setCurrentHeight(pre => pre + heightIncrement);
    }, 200)

    if (currentHeight > 6) setCurrentHeight(1);

    return () => clearInterval(interval);
  }, [currentHeight, heightIncrement]);
  return <progress className={`progress w-${currentHeight} progress-primary bg-none rounded-none h-1`}></progress>
}