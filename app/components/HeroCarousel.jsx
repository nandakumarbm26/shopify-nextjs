"use client";
import { useEffect, useState } from "react";

export default function HeroCarousel({ params, searchQuery }) {
  const arr = [0, 1, 2, 3, 4];
  const [ind, setInd] = useState(0);
  // useEffect(()=>{
  //   setInterval(()=>{
  //     setInd((ind+1)%arr.length)
  //   },3000)
  // },[])
  return (
    <div className="relative overflow-hidden">
      <div
        className={`min-h-[400px] transition-all duration-200 ease-in-out max-h-[600px] h-[50vh] w-screen bg-slate-600 flex -translate-x-[${ind}00vw]`}
      >
        <div className="h-full min-w-[100vw] bg-[url(/vercel.svg)] bg-no-repeat bg-contain bg-center"></div>
        <div className="h-full min-w-[100vw] bg-slate-400"></div>
        <div className="h-full min-w-[100vw] bg-slate-500">
          e7a2b189514d134630552681e4c8bc07
        </div>
        <div className="h-full min-w-[100vw] bg-slate-600"></div>
        <div className="h-full min-w-[100vw] bg-slate-700"></div>
      </div>
      <div className="absolute flex bottom-5 left-0 right-0 gap-2 translate-x-[50%] ml-auto mr-auto">
        {arr.map((d, i) => {
          return (
            <div
              className="rounded-full bg-white h-1.5 cursor-pointer w-1.5"
              key={i}
              onClick={() => {
                setInd(d);
              }}
            ></div>
          );
        })}
      </div>
    </div>
  );
}
