import Footer from "@/components/Footer";
import Header from "@/components/Header";
import QuoteOrStatus from "@/components/QuoteOrStatus";
import Head from "next/head";

export default function quote() {
  return (
    <div className="flex max-w-6xl mx-auto flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Quick Bio Generator</title>
        <link rel="icon" href="/quickBio-logo.png" /> 
      </Head>

      <Header />
      <main className="flex flex-1 w-full flex-col items-center justify-start text-center px-4 mt-12">
        <QuoteOrStatus />
        <h1 className="sm:text-6xl text-4xl max-w-2xl font-bold text-slate-900 mt-16">
          Generate Quote of the day
        </h1>
      </main>
      <Footer />
    </div>
  )
}
