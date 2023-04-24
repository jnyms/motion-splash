import { useId } from 'react'
import { Container } from '@/components/Container'

import Image from 'next/image'
import featureApps from '@/images/feature-apps.png'
import featureWearable from '@/images/feature-wearable.png'
import featureAchievement from '@/images/feature-achievement.png'

const features = [
  {
    name: 'Connects to your fitness apps',
    description:
      'Grow your Activatar by hitting your personalised weekly activity and fitness goals.',
    icon: featureApps,
  },
  {
    name: 'Unlock secret achievements',
    description:
      'Grow your Activatar by hitting your personalised weekly activity and fitness goals.',
    icon: featureAchievement,
  },
  {
    name: 'Connect your wearable',
    description:
      'Grow your Activatar by hitting your personalised weekly activity and fitness goals.',
    icon: featureWearable,
  },
]

export function SecondaryFeatures() {
  return (
    <section
      id="secondary-features"
      aria-label="Features for building a portfolio"
      className="py-20 sm:py-32"
    >
      <Container>
        <div className="mx-auto max-w-2xl sm:text-center">
          <h2 className="text-3xl font-bold tracking-normal leading-tight text-gray-900 font-title">
            Everything you need to make progress.
          </h2>
          <p className="mt-4 text-lg text-gray-600">
          Grow your Activatar by hitting your personalised weekly activity and fitness goals. Keep your Activatar fit and healthy by doing the same!</p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-16 md:grid-cols-3 md:gap-y-10 lg:max-w-none lg:grid-cols-3"
        >
          {features.map((feature) => (
            <li
              key={feature.name}
              className="rounded-2xl border border-gray-200 p-8 text-center hover:shadow-md transition"
            >
              <Image src={feature.icon} alt="Image showing the feature" className="h-24 w-auto mx-auto hover:scale-105 transition" />
              <h3 className="mt-5 text-lg font-semibold text-gray-900 leading-snug">
                {feature.name}
              </h3>
              <p className="mt-2 text-gray-700">{feature.description}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
