import { Analytics } from "@vercel/analytics/react";
import type { AppProps } from 'next/app'
import '../styles/globals.css';
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
      <Analytics />
    </>
  )
}
