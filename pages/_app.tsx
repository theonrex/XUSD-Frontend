import "tailwindcss/tailwind.css";
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider, Box } from '@chakra-ui/react'
import { theme } from '../theme'
import { DefaultSeo } from 'next-seo'
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Head>
        <title>Title</title>
        <link rel="icon" href="/favicon/favicon.ico" />
     
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#000000" />
      </Head>
      <DefaultSeo
        openGraph={{
          type: 'website',
          locale: 'en_US',
          url: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/ReadMe.png`,
          site_name: 'Title',
          title: 'Title',
          description:
            'description',
          images: [
            {
              url: `https://${process.env.NEXT_PUBLIC_VERCEL_URL}/ReadMe.png`,
              alt: 'Title',
              type: 'image/png',
            },
          ],
        }}
        twitter={{
          handle: '@',
          site: '@',
          cardType: 'summary_large_image',
        }}
        additionalLinkTags={[
          {
            rel: 'icon',
            href: '/favicon/favicon.ico',
          },
        ]}
      />
      <Component {...pageProps} />
    </ChakraProvider>
  )

}

export default MyApp
