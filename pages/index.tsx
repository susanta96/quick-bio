import { AnimatePresence, motion } from "framer-motion";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import { Toaster, toast } from "react-hot-toast";
import DropDown, { VibeType } from "@/components/DropDown";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import LoadingDots from "@/components/LoadingDots";
import ResizablePanel from "@/components/ResizablePanel";
import ChooseSocialMedia from "@/components/ChooseSocialMedia";
import { useRecoilValue } from "recoil";
import { SocialMediaState } from "@/utils/Atoms";

const Home: NextPage = () => {
  const selectedSocialMedia = useRecoilValue(SocialMediaState);
  const [loading, setLoading] = useState(false);
  const [bio, setBio] = useState("");
  const [vibe, setVibe] = useState<VibeType>("Professional");
  const [generatedBios, setGeneratedBios] = useState<String>("");
  const generatedBioCount = '1,193';

  // console.log("Streamed response: ", generatedBios);

  const promptForTwitter =
    vibe === "Funny"
      ? `Generate 2 funny twitter bios with no hashtags and clearly labeled "1." and "2.". Make sure there is a joke in there and it's a little ridiculous. Make sure each generated bio is at max 20 words and base it on this context: ${bio}${
          bio.slice(-1) === "." ? "" : "."
        }`
      : `Generate 2 ${vibe} twitter bios with no hashtags and clearly labeled "1." and "2.". Make sure each generated bio is at least 14 words and at max 20 words and base them on this context: ${bio}${
          bio.slice(-1) === "." ? "" : "."
        }`;

  const promptForInstagram =
        vibe === "Funny"
          ? `Generate 2 funny instagram bios with hashtags or emojis and clearly labeled "1." and "2.". Make sure there is a joke in there and it's a little ridiculous. Make sure each generated bio is at max 150 characters and base it on this context: ${bio}${
              bio.slice(-1) === "." ? "" : "."
            }`
          : `Generate 2 ${vibe} instagram bios with no hashtags but can include emoji and clearly labeled "1." and "2.". Make sure each generated bio is at least 14 words and at max 20 words and base them on this context: ${bio}${
              bio.slice(-1) === "." ? "" : "."
          }`;
  const promptForFB =
          vibe === "Funny"
            ? `Generate 2 funny facebook bios with hashtags or emojis and clearly labeled "1." and "2.". Make sure there is a joke in there and it's a little ridiculous. Make sure each generated bio is at max 101 characters and base it on this context: ${bio}${
                bio.slice(-1) === "." ? "" : "."
              }`
            : `Generate 2 ${vibe} facebook bios with no hashtags but can include emoji and clearly labeled "1." and "2.". Make sure each generated bio is at max 101 characters and base them on this context: ${bio}${
                bio.slice(-1) === "." ? "" : "."
            }`;
          
  const choosePrompt = () => {
    switch(selectedSocialMedia) {
      case 'facebook': 
        return promptForFB;
      case 'instagram': 
        return promptForInstagram;
      case 'twitter': 
        return promptForTwitter;
      default: 
        return promptForTwitter;
    }
  }
  const generateBio = async (e: any) => {
    e.preventDefault();
    setGeneratedBios("");
    setLoading(true);
    const prompt = choosePrompt();
    console.log(prompt);
    const response = await fetch("/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        prompt,
      }),
    });
    console.log("Edge function returned.");

    if (!response.ok) {
      throw new Error(response.statusText);
    }

    // This data is a ReadableStream
    const data = response.body;
    if (!data) {
      return;
    }

    const reader = data.getReader();
    const decoder = new TextDecoder();
    let done = false;

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      const chunkValue = decoder.decode(value);
      setGeneratedBios((prev) => prev + chunkValue);
    }

    setLoading(false);
  };

  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Quick Bio Generator</title>
        <link rel="icon" href="/quickBio-logo.png" /> 
      </Head>

      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-start text-center px-4 mt-12">
        <ChooseSocialMedia />
        <h1 className="sm:text-6xl text-4xl max-w-2xl font-bold text-slate-900 mt-16">
          Generate your next Twitter bio in seconds
        </h1>
        <p className="text-slate-500 mt-5">{generatedBioCount} bios generated so far.</p>
        <div className="max-w-xl w-full">
          <div className="flex mt-10 items-center space-x-3">
            <Image
              src="/1-black.png"
              width={30}
              height={30}
              alt="1 icon"
              className="mb-5 sm:mb-0"
            />
            <p className="text-left font-medium">
              Copy your current bio{" "}
              <span className="text-slate-500">
                (or write a few sentences about yourself)
              </span>
              .
            </p>
          </div>
          <textarea
            value={bio}
            onChange={(e) => setBio(e.target.value)}
            rows={4}
            className="w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black my-5"
            placeholder={
              "e.g. Senior Developer Advocate @vercel. Tweeting about web development, AI, and React / Next.js. Writing nutlope.substack.com."
            }
          />
          <div className="flex mb-5 items-center space-x-3">
            <Image src="/2-black.png" width={30} height={30} alt="1 icon" />
            <p className="text-left font-medium">Select your vibe.</p>
          </div>
          <div className="block">
            <DropDown vibe={vibe} setVibe={(newVibe) => setVibe(newVibe)} />
          </div>

          {!loading && (
            <button
              className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
              onClick={(e) => generateBio(e)}
            >
              Generate your bio &rarr;
            </button>
          )}
          {loading && (
            <button
              className="bg-black rounded-xl text-white font-medium px-4 py-2 sm:mt-10 mt-8 hover:bg-black/80 w-full"
              disabled
            >
              <LoadingDots color="white" style="large" />
            </button>
          )}
        </div>
        <Toaster
          position="bottom-center"
          reverseOrder={false}
          toastOptions={{ duration: 3000 }}
        />
        <hr className="h-px bg-gray-700 border-1 dark:bg-gray-700" />
        <ResizablePanel>
          <AnimatePresence mode="wait">
            <motion.div className="space-y-10 my-10">
              {generatedBios && (
                <>
                  <div>
                    <h2 className="sm:text-4xl text-3xl font-bold text-slate-900 mx-auto">
                      Your generated bios
                    </h2>
                  </div>
                  <div className="space-y-8 flex flex-col items-center justify-center max-w-xl mx-auto">
                    {generatedBios
                      .substring(generatedBios.indexOf("1") + 3)
                      .split("2.")
                      .map((generatedBio) => {
                        return (
                          <div
                            className="bg-white rounded-xl shadow-md p-4 hover:bg-gray-100 transition cursor-copy border"
                            onClick={() => {
                              navigator.clipboard.writeText(generatedBio);
                              toast("Bio copied to clipboard", {
                                icon: "✂️",
                              });
                            }}
                            key={generatedBio}
                          >
                            <p>{generatedBio}</p>
                          </div>
                        );
                      })}
                  </div>
                </>
              )}
            </motion.div>
          </AnimatePresence>
        </ResizablePanel>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
