/* eslint-disable @typescript-eslint/no-unused-vars */
import type { NextPage } from "next";
import Link from "next/link";
import { AiFillGithub } from "react-icons/ai";
import { generateJSXMeshGradient } from "meshgrad";
import { useState } from "react";
import manMemoji from "../assets/memojis/92.svg";
import Image from "next/image";
import { useEffect, useRef } from "react";
import domtoimage from "dom-to-image-more";

const SCALE = 1;

const Home: NextPage = () => {
    const [isServer, setIsServer] = useState(true);
    const [imageColorStops, setImageColorStops] = useState(8);
    const [userName, setUserName] = useState("");
    const [history, setHistory] = useState([
        generateJSXMeshGradient(imageColorStops),
    ]);
    const [index, setIndex] = useState(0);
    const backgroundRef = useRef<HTMLDivElement>(null);

    const takeSnapshot = async () => {
        const node = backgroundRef?.current;

        // const style = {
        //     transform: "scale(" + SCALE + ")",
        //     transformOrigin: "top left",
        //     width: node?.offsetWidth + "px",
        //     height: node?.offsetHeight + "px",
        // };

        // const param = {
        //     height: (node?.offsetHeight as number) * SCALE,
        //     width: (node?.offsetWidth as number) * SCALE,
        //     quality: 1,
        //     style,
        // };

        const base64Image = await domtoimage.toJpeg(node as HTMLDivElement);

        return base64Image;
    };

    function downloadBlob(blob: string, filename: string) {
        const element = document.createElement("a");
        element.setAttribute("href", blob);
        element.setAttribute("download", filename);
        element.style.display = "none";
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    }

    const onExport = () => {
        setTimeout(() => {
            takeSnapshot()
                .then(blobUrl => {
                    downloadBlob(blobUrl, `new.jpg`);
                })
                .catch(error => {
                    console.log("Error: " + error);
                });
        }, 100);
    };

    console.log(history);
    const handleNewGradient = () => {
        setIndex(history.length);
        setHistory([...history, generateJSXMeshGradient(imageColorStops)]);
    };

    useEffect(() => {
        setIsServer(false);
    }, []);

    return (
        <section className="md:p-8 font-SG bg-gray-50 text-gray-600 text-xl h-screen">
            <header>
                <nav className="flex justify-between md:w-1/2 w-4/5 p-4 mx-auto bg-gray-100 ring-2 ring-gray-200 rounded-lg align-baseline">
                    <Link href="/" passHref>
                        <a className="flex">
                            <div
                                style={generateJSXMeshGradient(8)}
                                className="w-10 h-10 rounded-full ring-1 ring-gray-200 shadow-sm"
                            ></div>
                            <span className="my-auto mx-2 font-lexend font-semibold text-2xl">
                                FACILE
                            </span>
                        </a>
                    </Link>
                    <ul className="my-auto">
                        <li>
                            <a>
                                <AiFillGithub className="w-8 h-8 cursor-pointer my-auto" />
                            </a>
                        </li>
                    </ul>
                </nav>
                <div className="my-4 mt-16 text-center w-3/5 mx-auto">
                    <h1 className="font-lexend font-semibold text-4xl">
                        Generate Minimalistic Mesh Images
                    </h1>
                    <h2 className="font-normal text-2xl text-gray-500 my-4">
                        Facile helps you Generate minimalistic mesh images that
                        can be used a profile pics and more
                    </h2>
                </div>
                <div className="mt-10 p-10 md:flex md:justify-evenly ">
                    <div className="md:w-2/5 mx-auto p-6 ring-1 rounded-lg ring-gray-300 ">
                        <div className="md:flex md:justify-evenly">
                            <input
                                type="text"
                                placeholder="@username"
                                className="px-4 py-2 rounded-lg ring-1 ring-gray-300 md:w-2/5 flex mx-auto my-4 md:my-2 "
                                onChange={e => setUserName(e.target.value)}
                            />
                            <input
                                type="number"
                                placeholder="colors"
                                className="px-4 py-2 rounded-lg ring-1 ring-gray-300 md:w-2/5 flex mx-auto my-4 md:my-2 "
                                onChange={e =>
                                    setImageColorStops(+e.target.value)
                                }
                            />
                        </div>
                        <button
                            onClick={handleNewGradient}
                            className="my-2 flex mx-auto  px-4 py-2 bg-gray-200 ring-2 ring-gray-300 text-xl rounded-lg hover:bg-gray-300 font-semibold"
                        >
                            Generate Mesh
                        </button>
                    </div>
                    <div className="md:w-1/2  p-6 grid grid-cols-1 justify-items-center  ">
                        <div
                            className=" ring-gray-300 rounded-lg h-[20rem] w-[20rem] grid grid-cols-1 justify-items-center content-center"
                            style={isServer ? {} : history[index]}
                            ref={backgroundRef}
                        >
                            {/* <Image
                                src={manMemoji}
                                alt="man memomji"
                                layout="fixed"
                                width={170}
                                height={170}
                                className="shadow-md"
                                style={{
                                    width: "100px",
                                    height: "100px",
                                    backgroundImage: "../assets/memojis/92.svg",
                                }}
                            /> */}
                            {userName && (
                                <h1
                                    className="text-4xl font-bold text-black opacity-60 w-60 text-center "
                                    style={{
                                        fontFamily: "monospace",
                                        border: "none",
                                    }}
                                >
                                    {userName}
                                </h1>
                            )}
                        </div>
                        <button
                            className="mt-6 px-4 py-2 bg-gray-200 ring-2 ring-gray-300 text-xl rounded-lg hover:bg-gray-300 font-semibold "
                            onClick={onExport}
                        >
                            Download image
                        </button>
                    </div>
                </div>
            </header>
        </section>
    );
};

export default Home;
