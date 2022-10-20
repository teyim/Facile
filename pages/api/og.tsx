/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
// /pages/api/og.tsx

import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';


export const config = {
  runtime: 'experimental-edge',
};


const levels = [
  {
    image: 'https://i.postimg.cc/QKLZVKtw/1.png',
    name: 'R2D2',
    value: 1,
  },
  {
    image: 'https://i.postimg.cc/Z0gCFwBz/2.png',
    name: 'HAL 9000',
    value: 2,
  },
  {
    image: 'https://i.postimg.cc/N5mf8BvR/3.png',
    name: 'DANTE II',
    value: 3,
  },
  {
    image: 'https://i.postimg.cc/grf26rQY/4.png',
    name: 'ASIMO',
    value: 4,
  },
  {
    image: 'https://i.postimg.cc/V5SN6X7G/5.png',
    name: 'K9',
    value: 5,
  },
  {
    image: 'https://i.postimg.cc/7f2bBS0G/6.png',
    name: 'MACHINA',
    value: 6,
  },
  {
    image: 'https://i.postimg.cc/87dcGDyT/7.png',
    name: 'Eve the Angel',
    value: 7,
  },
  {
    image: 'https://i.postimg.cc/VSY6LTTn/8.png',
    name: 'EVA',
    value: 8,
  },
  {
    image: 'https://i.postimg.cc/62qpCZBQ/9.png',
    name: 'TREK',
    value: 9,
  },
  {
    image: 'https://i.postimg.cc/yDCx2Wyf/10.png',
    name: 'SILVER HEAD',
    value: 10,
  },
  {
    image: 'https://i.postimg.cc/94Jf4b5S/11.png',
    name: 'OLYMPUS',
    value: 11,
  },
  {
    image: 'https://i.postimg.cc/k6HXs55v/12.png',
    name: 'HUMANIOD',
    value: 12,
  },
];


export default async function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    let levelParam = 0
    let health = 0

    const hasLevel = searchParams.has('level');
    const levelSearchParam = hasLevel ? searchParams.get('level')?.slice(0, 2) : 1;
    const hasCommits = searchParams.has('commits');
    const commits = hasCommits ? searchParams.get('commits')?.slice(0, 2) : 0;
    const hasHealth = searchParams.has('health');
    const healthParam = hasHealth ? searchParams.get('health')?.slice(0, 2) : 0;

    if (levelSearchParam && healthParam) {
      levelParam = +levelSearchParam;
      health = +healthParam;
    }

    return new ImageResponse(
      (
        <div tw="flex  w-full h-full bg-[#1F2937] py-3 flex-col border-4 border-[#475569]">
          <div
            tw="flex"
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            {levels.map((level) => {
              if (level.value === levelParam) {
                return (
                  <div
                    tw="flex border border-4 border-[#10B981] p-3 rounded-full mx-auto mx-3"
                    key={level.name}
                  >
                    <img
                      width="50"
                      height="50"
                      src={level.image}
                      tw=""
                      alt="robot image"
                    />
                  </div>
                );
              }
              if (level.value > levelParam && level.value - levelParam <= 2) {
                return (
                  <div
                    tw="flex border border-2 border-[#475569] p-3 rounded-full mx-1"
                    key={level.name}
                  >
                    <img
                      width="40"
                      height="40"
                      src={level.image}
                      tw="opacity-30"
                      alt="robot image"
                    />
                  </div>
                );
              }
              if (level.value > levelParam && levelParam < 3) {
                return (
                  <div
                    tw="flex border border-2 border-[#475569] p-3 rounded-full mx-1"
                    key={level.name}
                  >
                    <img
                      width="40"
                      height="40"
                      src={level.image}
                      tw="opacity-30"
                      alt="robot image"
                    />
                  </div>
                );
              }
              if (levelParam >= 3 && levelParam - level.value <= 2) {
                return (
                  <div
                    tw="flex border border-2 border-[#CA8A04] p-3 rounded-full mx-1"
                    key={level.name}
                  >
                    <img
                      width="40"
                      height="40"
                      src={level.image}
                      tw=""
                      alt="robot image"
                    />
                  </div>
                );
              }
            })}
            {/* <div tw="flex border border-2 border-[#CA8A04] p-3 rounded-full mx-1">
              <img
                width="40"
                height="40"
                src="https://i.postimg.cc/rRT0NNGR/1.png"
                tw=""
                alt="robot image"
              />
            </div>
            <div tw="flex border border-2 border-[#CA8A04] p-3 rounded-full mx-1">
              <img
                width="40"
                height="40"
                src="https://i.postimg.cc/Z0gCFwBz/2.png"
                tw=""
                alt="robot image"
              />
            </div>
            <div tw="flex border border-4 border-[#10B981] p-3 rounded-full mx-auto mx-3">
              <img
                width="50"
                height="50"
                src="https://i.postimg.cc/N5mf8BvR/3.png"
                tw=""
                alt="robot image"
              />
            </div>
            <div tw="flex border border-2 border-[#475569] p-3 rounded-full mx-1">
              <img
                width="40"
                height="40"
                src="https://i.postimg.cc/grf26rQY/4.png"
                tw="opacity-30"
                alt="robot image"
              />
            </div>
            <div tw="flex border border-2 border-[#475569] p-3 rounded-full mx-1">
              <img
                width="40"
                height="40"
                src="https://i.postimg.cc/V5SN6X7G/5.png"
                tw="opacity-30"
                alt="robot image"
              />
            </div>*/}
          </div>
          <div tw="flex flex-col text-[#94A3B8] font-bold w-full ">
            <h1 tw="flex mx-auto font-bold text-xl mb-1">
              {levels[levelParam - 1].name}
            </h1>
            <h1 tw="flex mx-auto text-md font-light mt-0">
              You made <span tw="mx-1 text-[#EAB308]">{commits}</span> commits
              in the last 24 hrs
            </h1>
            <h1 tw="flex mx-auto font-semibold text-md mt-0 text-[#94A3B8]">
              LEVEL {levelParam}
            </h1>

            <h1
              tw={`flex mx-auto font-semibold text-md mt-0 ${
                health < 50 && 'text-[#EF4444]'
              } ${health === 50 && 'text-[#EAB308]'} ${
                health > 50 && 'text-[#22C55E]'
              }`}
            >
              {health}%
            </h1>
          </div>
        </div>
      ),
      {
        width: 400,
        height: 240,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
