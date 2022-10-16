/* eslint-disable @typescript-eslint/no-unused-vars */
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
        <div tw="flex w-[100%] h-[100%]">
          <div tw=" flex w-full h-full border-2 border-gray-600 rounded-lg shadow-sm bg-[#121315] p-3">
            <div tw="flex flex-col w-[70%] px-3">
              <h1 tw="text-gray-200  text-lg" style={{ fontWeight: 'bold' }}>
                WALLE- 1
              </h1>
              <h1 tw="text-gray-400 font-light text-left mt-1">
                In order to be irreplaceable, one must always be different
              </h1>
              <div tw="flex w-full bg-red-100 rounded-full h-3 dark:bg-gray-700 my-4  ">
                <div tw="p-0 bg-red-500 h-3 rounded-full dark:bg-gray-300 w-[10%]"></div>
              </div>
            </div>
            <div tw="flex border-2 border-gray-600 rounded-full mx-auto mt-6 p-3 bg-gray-800">
              <svg
                width="50"
                height="50"
                viewBox="0 0 340 340"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clip-path="url(#clip0_1_2257)">
                  <g filter="url(#filter0_ii_1_2257)">
                    <path
                      d="M8 130C8 116.745 18.7452 106 32 106H224C237.255 106 248 116.745 248 130V290C248 303.255 237.255 314 224 314H32C18.7452 314 8 303.255 8 290V130Z"
                      fill="#8A7DD8"
                    />
                  </g>
                  <path
                    d="M8 130C8 116.745 18.7452 106 32 106H224C237.255 106 248 116.745 248 130V290C248 303.255 237.255 314 224 314H32C18.7452 314 8 303.255 8 290V130Z"
                    stroke="#1F2024"
                    stroke-width="8"
                  />
                  <g filter="url(#filter1_i_1_2257)">
                    <path
                      d="M108 130C108 116.745 118.745 106 132 106H308C321.255 106 332 116.745 332 130V290C332 303.255 321.255 314 308 314H132C118.745 314 108 303.255 108 290V130Z"
                      fill="#AEA5EE"
                    />
                  </g>
                  <path
                    d="M108 130C108 116.745 118.745 106 132 106H308C321.255 106 332 116.745 332 130V290C332 303.255 321.255 314 308 314H132C118.745 314 108 303.255 108 290V130Z"
                    stroke="#1F2024"
                    stroke-width="8"
                  />
                  <path
                    d="M236 110H274L218 310H180L236 110Z"
                    fill="white"
                    fill-opacity="0.5"
                  />
                  <path
                    d="M221 110H227L171 310H165L221 110Z"
                    fill="white"
                    fill-opacity="0.5"
                  />
                  <g filter="url(#filter2_ddi_1_2257)">
                    <rect
                      x="136"
                      y="156"
                      width="168"
                      height="64"
                      rx="16"
                      fill="#1F2024"
                    />
                    <circle cx="176" cy="188" r="16" fill="white" />
                    <circle cx="264" cy="188" r="16" fill="white" />
                  </g>
                  <circle
                    cx="50"
                    cy="224"
                    r="36"
                    fill="#1F2024"
                    fill-opacity="0.16"
                  />
                  <g filter="url(#filter3_i_1_2257)">
                    <circle cx="49" cy="213" r="36" fill="#AEA5EE" />
                  </g>
                  <circle
                    cx="49"
                    cy="213"
                    r="36"
                    stroke="#1F2024"
                    stroke-width="8"
                  />
                  <path
                    d="M59 189C62.6403 190.938 65.7524 194.074 68 198"
                    stroke="white"
                    stroke-width="8"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <g filter="url(#filter4_i_1_2257)">
                    <circle cx="29" cy="213" r="24" fill="#CAE9FA" />
                  </g>
                  <circle
                    cx="29"
                    cy="213"
                    r="24"
                    stroke="#1F2024"
                    stroke-width="8"
                  />
                  <g filter="url(#filter5_ddi_1_2257)">
                    <g clip-path="url(#clip1_1_2257)">
                      <rect
                        x="164"
                        y="232"
                        width="112"
                        height="32"
                        rx="16"
                        fill="#1F2024"
                      />
                      <rect
                        x="164"
                        y="232"
                        width="12"
                        height="32"
                        fill="#CAE9FA"
                      />
                      <rect
                        x="184"
                        y="232"
                        width="12"
                        height="32"
                        fill="#CAE9FA"
                      />
                      <rect
                        x="204"
                        y="232"
                        width="12"
                        height="32"
                        fill="#CAE9FA"
                      />
                      <rect
                        x="224"
                        y="232"
                        width="12"
                        height="32"
                        fill="#CAE9FA"
                      />
                      <rect
                        x="244"
                        y="232"
                        width="12"
                        height="32"
                        fill="#CAE9FA"
                      />
                      <rect
                        x="264"
                        y="232"
                        width="12"
                        height="32"
                        fill="#CAE9FA"
                      />
                    </g>
                    <rect
                      x="164"
                      y="232"
                      width="112"
                      height="32"
                      rx="16"
                      stroke="#1F2024"
                      stroke-width="6"
                    />
                  </g>
                  <rect
                    x="169"
                    y="57"
                    width="2"
                    height="37"
                    fill="#AEA5EE"
                    stroke="#1F2024"
                    stroke-width="8"
                  />
                  <circle cx="170" cy="56" r="12" fill="white" />
                  <path
                    d="M126 66C126 41.6995 145.699 22 170 22C194.301 22 214 41.6995 214 66V94H126V66Z"
                    fill="white"
                    fill-opacity="0.5"
                    stroke="#1F2024"
                    stroke-width="8"
                  />
                  <g filter="url(#filter6_i_1_2257)">
                    <path
                      d="M114 102C114 97.5817 117.582 94 122 94H218C222.418 94 226 97.5817 226 102V106H114V102Z"
                      fill="#AEA5EE"
                    />
                  </g>
                  <path
                    d="M114 102C114 97.5817 117.582 94 122 94H218C222.418 94 226 97.5817 226 102V106H114V102Z"
                    stroke="#1F2024"
                    stroke-width="8"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_ii_1_2257"
                    x="4"
                    y="102"
                    width="248"
                    height="216"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="-16" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_1_2257"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="16" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_innerShadow_1_2257"
                      result="effect2_innerShadow_1_2257"
                    />
                  </filter>
                  <filter
                    id="filter1_i_1_2257"
                    x="104"
                    y="102"
                    width="232"
                    height="216"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-24" dy="8" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_1_2257"
                    />
                  </filter>
                  <filter
                    id="filter2_ddi_1_2257"
                    x="132"
                    y="156"
                    width="176"
                    height="64"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-4" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_2257"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="4" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_1_2257"
                      result="effect2_dropShadow_1_2257"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_1_2257"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-4" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect3_innerShadow_1_2257"
                    />
                  </filter>
                  <filter
                    id="filter3_i_1_2257"
                    x="9"
                    y="173"
                    width="80"
                    height="80"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="12" dy="-8" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_1_2257"
                    />
                  </filter>
                  <filter
                    id="filter4_i_1_2257"
                    x="1"
                    y="185"
                    width="56"
                    height="56"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="12" dy="-8" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_1_2257"
                    />
                  </filter>
                  <filter
                    id="filter5_ddi_1_2257"
                    x="157"
                    y="229"
                    width="126"
                    height="38"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-4" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1_2257"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="4" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="effect1_dropShadow_1_2257"
                      result="effect2_dropShadow_1_2257"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect2_dropShadow_1_2257"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-4" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect3_innerShadow_1_2257"
                    />
                  </filter>
                  <filter
                    id="filter6_i_1_2257"
                    x="110"
                    y="90"
                    width="120"
                    height="20"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="BackgroundImageFix"
                      result="shape"
                    />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dx="-24" dy="8" />
                    <feComposite
                      in2="hardAlpha"
                      operator="arithmetic"
                      k2="-1"
                      k3="1"
                    />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="shape"
                      result="effect1_innerShadow_1_2257"
                    />
                  </filter>
                  <clipPath id="clip0_1_2257">
                    <rect width="340" height="340" fill="white" />
                  </clipPath>
                  <clipPath id="clip1_1_2257">
                    <rect
                      x="164"
                      y="232"
                      width="112"
                      height="32"
                      rx="16"
                      fill="white"
                    />
                  </clipPath>
                </defs>
              </svg>
            </div>
          </div>
        </div>
      ),
      {
        width: 350,
        height: 200,
      }
    );
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
