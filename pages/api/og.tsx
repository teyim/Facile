/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @next/next/no-img-element */
/* eslint-disable prettier/prettier */

// /pages/api/og.tsx

import { ImageResponse } from '@vercel/og';
import { NextRequest } from 'next/server';

export const config = {
  runtime: 'experimental-edge',
};

export default function handler(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);

    // ?title=<title>
    const hasTitle = searchParams.has('title');
    const title = hasTitle
      ? searchParams.get('title')?.slice(0, 100)
      : 'My default title';

    return new ImageResponse(
      (
        <div tw="flex">
          <div tw="flex flex-col h-screen w-full bg-white  px-6 mt-1 ">
          <div tw="flex items-center mb-1">
            <img
              alt="avatar"
              tw="w-20 rounded-full border-2 border-gray-300"
              src="https://picsum.photos/seed/picsum/200"
            />
            <div tw="flex flex-col ml-5 ">
              <h4 tw="text-xl font-semibold mb-0">John Doe</h4>
              <h5 tw="flex mt-1 mx-auto font-semibold text-blue-600 ">Designer</h5>
            </div>
          </div>
          <div tw="flex">
            <div tw="flex italic text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </div>
          </div>
        </div>
        </div>
      ),
      {
        width: 400,
        height: 200,
      },
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
