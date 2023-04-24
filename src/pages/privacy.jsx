import Head from 'next/head'
import Link from 'next/link'

import { CallToAction } from '@/components/CallToAction'
import { Faqs } from '@/components/Faqs'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { Container } from '@/components/Container'
import { Hero } from '@/components/Hero'
import { Pricing } from '@/components/Pricing'
import { PrimaryFeatures } from '@/components/PrimaryFeatures'
import { Reviews } from '@/components/Reviews'
import { SecondaryFeatures } from '@/components/SecondaryFeatures'
    


export default function Home() {
  return (
    <>
      <Head>
        <title>Motion - Privacy policy</title>
        <meta
          name="description"
          content="Grow your Activatar by hitting your personalised weekly activity and fitness goals. Keep your Activatar fit and healthy by doing the same!"
        />
      </Head>
      
      <main>
        <Header />
            <section id="faqs" aria-labelledby="faqs-title" className="border-t border-gray-200 py-20 sm:py-24 bg-white">
                <Container>
                    <div className="mb-10">
                        <h2 id="faqs-title" className="text-4xl font-bold font-title text-gray-900 tracking-normal leading-tight">
                            Privacy policy
                        </h2>
                        <p className="mt-4 text-lg text-gray-600">
                            If you have anything else you want to ask,{' '}
                            <Link href="mailto: founders@motion-app.com" className="text-gray-900 underline">
                                reach out to us
                            </Link>.
                        </p>
                    </div>

                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                        This is a heading
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">
                        Grow your Activatar by hitting your personalised weekly activity and fitness goals. Keep your Activatar fit and healthy by doing the same!
                    </p>       
                </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
