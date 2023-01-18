import Link from "next/link"
import Image from "next/image"
import Head from 'next/head'


const posts = [
  {
    title: 'QR Code iOS Widget',
    href: '#',
    category: { name: 'Mockup', href: '#' },
    description:
      'Lock Screen widget for iOS 16+ devices. Generate codes & share them from your lockscreen.',
    date: 'Feb 12, 2020',
    datetime: '2020-02-12',
    imageUrl:
      '../iOSwidgets.png',
    readingTime: '11 min',
    author: {
      name: 'Daniela Metz',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Ordinary Word Game',
    href: 'https://www.ordinarygame.com/',
    category: { name: 'Website', href: 'https://www.ordinarygame.com/' },
    description:
      'A game I came up with while flipping through a dictionary. Test your knowledge of the alphabet & vocabulary. Think alphabetically.',
    date: 'Mar 16, 2020',
    datetime: '2020-03-16',
    imageUrl:
      '../ordinaryMockup.png',
    readingTime: '6 min',
    author: {
      name: 'Roel Aufderehar',
      href: 'https://www.ordinarygame.com/',
      imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: 'Smart Lamp',
    href: './Lamp',
    category: { name: 'Prototype', href: './Lamp' },
    description:
      'A lamp and bookcase that I hand crafted from pine wood. Form Studio Class Final. Fall Term 2022.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      '../SMARTlamp.png',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: './Lamp',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: "Window's 98 Computer",
    href: 'https://www.abbatia.info',
    category: { name: 'Website', href: 'https://www.abbatia.info' },
    description:
      'A website for a band called Abbatia. Developed for release of their newest EP titled "Red Room". ',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      '../windowsComputer.png',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: 'https://www.abbatia.info',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: "Bedside Clock",
    href: '#',
    category: { name: 'Prototype', href: '#' },
    description:
      'A digital clock, laser cut & formed from acrylic. Arduino programmed & embedded inside. Maker Workshop Class Final. Fall Term 2021.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      '../clockThumbnail.jpeg',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    title: "Storyline",
    href: '#',
    category: { name: 'Social Expirement', href: '#' },
    description:
      'A short-story by 25 different people. I started the story with one sentence, then texted the story to 25 people, one after another.',
    date: 'Mar 10, 2020',
    datetime: '2020-03-10',
    imageUrl:
      '../storylineThumbnail.jpg',
    readingTime: '4 min',
    author: {
      name: 'Brenna Goyette',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
]

export default function Example() {
  return (
    <div className="relative bg-zinc-900 px-4 pb-20 lg:px-8 lg:pt-10 lg:pb-28">
      <Head>
        <title>Tom Cav. 2023</title>
        <meta name="description" content="Developer, Designer, Photographer"/>
        <meta name="keywords" content="Thomas Cavalcante, Tom Cav, Cavalcante, web development, product design, start-ups, student, Drexel University, Drexel"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      </Head>
      <div className="absolute inset-0">
      </div>
      <div className="relative mx-auto max-w-7xl">

        <div className="text-center md:fixed lg:fixed justify-center md:text-left lg:text-left md:justify-left lg:justify-left grid grid-cols-1 mb-10">
          <div className="ml-4 mt-10">
            <img src="./tomCav.png" className="rounded-full w-40 h-30 text-center"/>
          </div>  

          <div className="block m-4">
            <h1 className="mt-2 flex text-7xl font-black tracking-tighter text-gray-200">Tom Cav</h1>
            <div class="mt-4 ml-1 flex space-x-2 text-gray-700">
              <p className="text-gray-600">Social Links: </p>

              <Link href="https://github.com/tpcav">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="w-5 h-5"><path fill="currentColor" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg>
              </Link>

              <Link href="https://www.linkedin.com/in/thomascavalcante/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5"><path fill="currentColor" d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"/></svg>
              </Link>

              <Link href="https://www.instagram.com/thomascavalcante/">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="w-5 h-5"><path fill="currentColor" d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
              </Link>

            </div>
            <div className="mt-10 md:mb-10 md:mt-10 lg:mb-10 lg:mt-10 text-center">
              <div className="text-left w-100">
                <div className="inline max-w-2xl text-gray-500 sm:mt-4">
                  <h2 className="text-4xl font-bold tracking-tight text-zinc-300 sm:text-4xl">Learning
                  <span className="bg-blue-300 px-3 ml-2 rounded-full text-gray-800 text-4xl">business</span><br></br>
                  <span className="bg-green-300 px-3 rounded-full text-gray-800 text-4xl">web development</span><br></br>
                  <span className="bg-orange-300 px-3 rounded-full text-gray-800 text-4xl">product design</span><br></br>
                  at Drexel University.</h2>
                </div>
              </div>

            </div>

              <div className="text-center">    
                <Link href="http://youtube.com/">
                  <div className="block border-2 rounded-lg border-white p-2 w-24 mt-10 bg-zinc-800 text-white">Email</div></Link>
              </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-3 m-4">
        
        <div className=""></div>

        <div className="mt-2 sm:mt-10 md:mt-10 lg:mt-10">
          <div className="grid">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-200 sm:text-4xl">Projects</h2>
            <p className="text-zinc-400 text-lg mt-2">Recent personal work & university class projects. Making cool <span><Link href="https://github.com/tpcav" className="underline">stuff</Link></span> until something sticks.</p>
          </div>
          <div className="mt-8 grid max-w-lg gap-10 lg:max-w-none lg:grid-cols-2 scrollable">
            {posts.map((post) => (
              <div key={post.title} className="flex flex-col overflow-hidden rounded-lg shadow-lg">
                <div className="flex-shrink-0">
                  <img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />
                </div>
                <div className="flex flex-1 flex-col justify-between bg-zinc-800 p-6">
                  <div className="flex-1">
                    <p className="text-sm font-medium text-blue-500">
                      <a href={post.category.href} className="hover:underline">
                        {post.category.name}
                      </a>
                    </p>
                    <a href={post.href} className="mt-2 block">
                      <p className="text-xl font-semibold text-gray-200">{post.title}</p>
                      <p className="mt-3 text-base text-gray-500">{post.description}</p>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        </div>
        
      </div>
    </div>
  )
}
