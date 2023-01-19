// Homepage

import Head from 'next/head'
import Introduction from '@/app/Intro'
import Projects from "@/app/Projects"

export default function Home() {
  return (
    <div className="relative bg-zinc-900 px-4 pb-20 lg:px-8 lg:pt-10 lg:pb-28">
      <Head>
        <title>Tom Cav. 2023</title>
        <meta name="description" content="Developer, Designer, Photographer"/>
        <meta name="keywords" content="Thomas Cavalcante, Tom Cav, Cavalcante, web development, product design, start-ups, student, Drexel University, Drexel"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <div className="absolute inset-0"></div>
      <div className="relative mx-auto max-w-7xl">
        <Introduction/>
        <Projects/>
      </div>
    </div>
  )
}
