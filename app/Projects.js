// Project Cards Component

import Image from "next/image"
import Link from "next/link"

const projects = [
  {
    title: 'QR Code iOS Widget',
    href: '#',
    category: { name: 'Mockup', href: '#' },
    description:
      'Lock Screen widget for iOS 16+ devices. Generate codes & share them from your lockscreen.',
    imageUrl:
      '/imgs/iOSwidgets.jpg',
  },
  {
    title: 'Ordinary Word Game',
    href: 'https://www.ordinarygame.com/',
    category: { name: 'Website', href: 'https://www.ordinarygame.com/' },
    description:
      'A game I came up with while flipping through a dictionary. Test your knowledge of the alphabet & vocabulary. Think alphabetically.',
    imageUrl:
      '/imgs/ordinaryMockup.jpg',
  },
  {
    title: 'Smart Lamp',
    href: './Lamp',
    category: { name: 'Prototype', href: './Lamp' },
    description:
      'A lamp and bookcase that I hand crafted from pine wood. Form Studio Class Final. Fall Term 2022.',
    imageUrl:
      '/imgs/SMARTlamp.jpg',
  },
  {
    title: "Window's 98 Computer",
    href: 'https://www.abbatia.info',
    category: { name: 'Website', href: 'https://www.abbatia.info' },
    description:
      'A website for a band called Abbatia. Developed for release of their newest EP titled "Red Room". ',
    imageUrl:
      '/imgs/windowsComputer.jpg',
  },
  {
    title: "Bedside Clock",
    href: '#',
    category: { name: 'Prototype', href: '#' },
    description:
      'A digital clock, laser cut & formed from acrylic. Arduino programmed & embedded inside. Maker Workshop Class Final. Fall Term 2021.',
    imageUrl:
      '/imgs/clockThumbnail.jpg',
  },
  {
    title: "Storyline",
    href: '#',
    category: { name: 'Social Expirement', href: '#' },
    description:
      'A short-story by 25 different people. I started the story with one sentence, then texted the story to 25 people, one after another.',
    imageUrl:
      '/imgs/storylineThumbnail.jpg',
  },
]

export default function Projects() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-3 m-4">    
      <div className=""></div>
      <div className="mt-2 sm:mt-10 md:mt-10 lg:mt-10">
        <div className="grid">
          <h2 className="text-2xl font-bold tracking-tight text-zinc-200 sm:text-4xl">Projects</h2>
          <p className="text-zinc-400 text-lg mt-2">Recent personal work & university class projects. Making cool <span><Link href="https://github.com/tpcav" className="underline">stuff</Link></span> until something sticks.</p>
        </div>
        <div className="mt-8 grid max-w-lg gap-10 lg:max-w-none lg:grid-cols-2 scrollable">
          {projects.map((project) => (
            <div key={project.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
              <div className="flex-shrink-0">
                <Image className="h-48 w-full object-cover" src={project.imageUrl} width={200} height={100} alt="Preview images of my personal and university class projects."/>
              </div>
              <div className="flex flex-1 flex-col justify-between bg-zinc-800 p-6">
                <div className="flex-1">
                  <p className="text-sm font-medium text-blue-500">
                    <a href={project.category.href} className="hover:underline">
                      {project.category.name}
                    </a>
                  </p>
                  <a href={project.href} className="mt-2 block">
                    <p className="text-xl font-semibold text-gray-200">{project.title}</p>
                    <p className="mt-3 text-base text-gray-500">{project.description}</p>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}