import Image from "next/image";
import Link from "next/link";
import GithubButton from "./GithubButton";

export default function Header() {
  return (
    <header className="flex justify-between items-center w-full border-b-2 py-7 sm:px-4 px-2">
      <Link href="/" className="flex space-x-3 items-end">
        <Image
          alt="header text"
          src="/quickBio-logo.png"
          className="sm:w-12 sm:h-12 w-8 h-8"
          width={32}
          height={32}
        />
        <h1 className="sm:text-4xl text-2xl font-bold ml-2 tracking-tight">
          Quick Bio
        </h1>
      </Link>
      <GithubButton />
    </header>
  );
}
