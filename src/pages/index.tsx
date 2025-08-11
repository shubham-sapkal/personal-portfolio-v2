'use client'

import { Header, MainBanner, AboutMe, Footer, Skills, Experience, Work, GetInTouch } from "@/sectionComponents";



export default function Home() {

  return (
    <div className="flex h-full flex-col w-full"> 

        {/* Header  */}
        <Header />

        {/* Main Banner */}
        <MainBanner />

        {/* About Me  */}
        <AboutMe />

        {/* Skills  */}
        <Skills />

        {/* Experience  */}
        <Experience />

        {/* Work / Projects */}
        <Work />

        {/* Get In Touch */}
        <GetInTouch />

        {/* Footer  */}
        <Footer />

    </div>
  )
}
