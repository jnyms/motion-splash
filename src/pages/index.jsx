import Head from 'next/head'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
    


export default function Home() {
  return (
    <>
      <Head>
        <title>Motion - Fitness progress made fun.</title>
        <meta
          name="description"
          content="Grow your Activatar by hitting your personalised weekly activity and fitness goals. Keep your Activatar fit and healthy by doing the same!"
        />
      </Head>
      
      <main>
        <Hero /> 
        <PrimaryFeatures />
        <Reviews />
        <CallToAction />
        <Faqs />
      </main>
      <Footer />
    </>
  )
}
