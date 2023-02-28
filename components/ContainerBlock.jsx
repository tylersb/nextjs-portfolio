import Head from 'next/head'
import { useRouter } from 'next/router'
import Navbar from './Navbar'
import Footer from './Footer'

export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter()

  const meta = {
    title: 'Tyler Benbrook - Full Stack Developer',
    description: `Main technologies I use are React, Next.js, Node.js, Express, MongoDB, and PostgreSQL`,
    image: '/avatar.png',
    type: 'website',
    ...customMeta
  }
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://www.tylerbenbrook.com${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://www.tylerbenbrook.com${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Tyler Benbrook" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
      </Head>
      <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <div>{children}</div>
        <Footer />
      </main>
    </div>
  )
}
