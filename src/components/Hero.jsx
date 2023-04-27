import { useId, useRef, useState } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import { motion, useInView, useMotionValue } from 'framer-motion'
import { Header } from '@/components/Header'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'
import { Logomark } from '@/components/Logo'
import screenGoal from '@/images/screen-goal.png'

function BackgroundIllustration(props) {
  let id = useId()
  return (
    <div {...props}>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-slow"
      >
        <path
          d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
        />
        <path
          d="M513 1025C230.23 1025 1 795.77 1 513"
          stroke={`url(#${id}-gradient-1)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-1`}
            x1="1"
            y1="513"
            x2="1"
            y2="1025"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2DD4BF" />
            <stop offset="1" stopColor="#2DD4BF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <svg
        viewBox="0 0 1026 1026"
        fill="none"
        aria-hidden="true"
        className="absolute inset-0 h-full w-full animate-spin-reverse-slower"
      >
        <path
          d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
          stroke="#D4D4D4"
          strokeOpacity="0.7"
          strokeWidth="1"
        />
        <path
          d="M913 513c0 220.914-179.086 400-400 400"
          stroke={`url(#${id}-gradient-2)`}
          strokeLinecap="round"
        />
        <defs>
          <linearGradient
            id={`${id}-gradient-2`}
            x1="913"
            y1="513"
            x2="913"
            y2="913"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#2DD4BF" />
            <stop offset="1" stopColor="#2DD4BF" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  )
}

function PlayIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" {...props}>
      <circle cx="12" cy="12" r="11.5" stroke="#D4D4D4" />
      <path
        d="M9.5 14.382V9.618a.5.5 0 0 1 .724-.447l4.764 2.382a.5.5 0 0 1 0 .894l-4.764 2.382a.5.5 0 0 1-.724-.447Z"
        fill="#A3A3A3"
        stroke="#A3A3A3"
      />
    </svg>
  )
}

export function Hero() {
  return (
    <div className="py-none overflow-hidden bg-gradient-to-b from-teal-100 pt-4">
      <Container>
        <div className="lg:gap-y-none lg:grid lg:grid-cols-12 lg:gap-x-8">
          <div className="py-none relative z-10 mx-auto max-w-2xl pt-8 text-center lg:col-span-7 lg:max-w-none lg:py-32 lg:text-left xl:col-span-6">
            <Logomark className="mx-auto mb-6 h-8 lg:h-9 lg:mx-0 lg:mb-10 lg:w-auto" />
            <h1 className="font-title text-4xl font-bold text-gray-900 lg:text-5xl leading-10 lg:leading-normal">
              Meet your fitness avatar
            </h1>
            <p className="mt-5 mb-6 lg:mb-10 text-md lg:text-xl text-gray-600">
              Motion makes fitness progress fun. Level up by hitting your personalised weekly activity
              and fitness goals.
            </p>

            <Button
              color="gray"
              className="cursor-pointer px-5"
              href="https://motion-app.typeform.com/to/KO4QimKk#name=xxxxx"
            >
              <span className="text-lg">Get early access</span>
            </Button>
          </div>
          <div className="relative lg:col-span-5 lg:row-span-2 mt-6 lg:mt-8 xl:col-span-6">
            <BackgroundIllustration className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_100%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-top-10 lg:-bottom-20 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
              <PhoneFrame
                className="mx-auto max-w-[366px] transition hover:scale-[1.02] duration-500 ease-in-out"
                priority
              >
                <Image src={screenGoal} alt="The goal screen of the app" />
                <video
                  autoPlay
                  muted
                  loop
                  playsinline=""
                  className="absolute ml-[calc(60/366*100%)] mt-[calc(50/366*100%)] w-[calc(240/366*100%)] bg-transparent"
                >
                  <source src={'/level10-content.mp4'} />
                </video>
              </PhoneFrame>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}
