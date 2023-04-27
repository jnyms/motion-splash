import Image from 'next/image'
import { Fragment, useEffect, useId, useRef, useState } from 'react'
import { Tab } from '@headlessui/react'
import clsx from 'clsx'
import { AnimatePresence, motion } from 'framer-motion'
import { useDebouncedCallback } from 'use-debounce'

import { AppScreen } from '@/components/AppScreen'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { PhoneFrame } from '@/components/PhoneFrame'
import TargetIconAsset from '@/images/icon-target.svg'
import TrophyIconAsset from '@/images/icon-trophy.svg'
import DumbbellIconAsset from '@/images/icon-dumbbell.svg'
import screenGoal from '@/images/screen-goal.png'
import imageSmart from '@/images/screen-analyse.png'
import imageGrow from '@/images/screen-grow.png'
import imageSocial from '@/images/screen-social.png'
import imageIntegrate from '@/images/screen-integrate.png'
const MotionAppScreenHeader = motion(AppScreen.Header)
const MotionAppScreenBody = motion(AppScreen.Body)

const features = [
  {
    name: 'Link with fitness apps + wearables',
    description:
      'By connecting directly to your smartwatch or through your health app, we can synchronise your data automatically and instantly.',
    icon: DumbbellIcon,
    screen: InviteScreen,
    screenshot: screenIntegrate,
  },
  {
    name: 'Get smart weekly fitness goals',
    description:
      'Motion analyses your average activity levels from your fitness data and translates them into a simple score we call activity points.',
    icon: TrophyIcon,
    screen: InviteScreen,
    screenshot: screenSmart,
  },
  {
    name: 'Hit goals. Earn shakes. Level up.',
    description:
      'When you hit your goals, you earn shakes, which level up your Avatar. Keep your Avatar fit and healthy by doing the same!',
    icon: TargetIcon,
    screen: InvestScreen,
    screenshot: screenGrow,
  },
]

function TargetIcon(props) {
  return (
    <Image
      src={TargetIconAsset}
      alt="Icon of a target"
      unoptimized
      {...props}
    />
  )
}
function TrophyIcon(props) {
  return (
    <Image
      src={TrophyIconAsset}
      alt="Icon of a target"
      unoptimized
      {...props}
    />
  )
}
function DumbbellIcon(props) {
  return (
    <Image
      src={DumbbellIconAsset}
      alt="Icon of a target"
      unoptimized
      {...props}
    />
  )
}

function screenSmart(props) {
  return (
    <div>
      <Image
        src={imageSmart}
        alt="A smart goal being calculated from user fitness data"
        unoptimized
        {...props}
      />
      <video
        autoPlay
        muted
        loop
        playsinline=""
        className="absolute top-[calc(20/366*100%)] w-full"
      >
        <source src={'/screen-analyse.mp4'} />
      </video>
    </div>
  )
}

function screenIntegrate(props) {
  return (
    <div>
      <Image
        src={imageIntegrate}
        alt="Fitness apps and wearables"
        unoptimized
        {...props}
      />
    </div>
  )
}
function screenGrow(props) {
  return (
    <div>
      <Image src={imageGrow} alt="Icon of a target" unoptimized {...props} />
      <video
        autoPlay
        muted
        loop
        playsinline=""
        className="absolute top-[calc(40/366*100%)] ml-[calc(80/366*100%)] w-[calc(220/366*100%)]"
      >
        <source src={'/level5-content.mp4'} />
      </video>
    </div>
  )
}
function screenSocial(props) {
  return (
    <Image src={imageSocial} alt="Icon of a target" unoptimized {...props} />
  )
}

const headerAnimation = {
  initial: { opacity: 0, transition: { duration: 0.3 } },
  animate: { opacity: 1, transition: { duration: 0.3, delay: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.3 } },
}

const maxZIndex = 2147483647

const bodyVariantBackwards = {
  opacity: 0.4,
  scale: 0.8,
  zIndex: 0,
  filter: 'blur(4px)',
  zIndex: 0,
  transition: { duration: 0.4 },
}

const bodyVariantForwards = (custom) => ({
  y: '100%',
  zIndex: maxZIndex - custom.changeCount,
  transition: { duration: 0.4 },
})

const bodyAnimation = {
  initial: 'initial',
  animate: 'animate',
  exit: 'exit',
  variants: {
    initial: (custom) =>
      custom.isForwards ? bodyVariantForwards(custom) : bodyVariantBackwards,
    animate: (custom) => ({
      y: '0%',
      opacity: 1,
      scale: 1,
      zIndex: maxZIndex / 2 - custom.changeCount,
      filter: 'blur(0px)',
      transition: { duration: 0.4 },
    }),
    exit: (custom) =>
      custom.isForwards ? bodyVariantBackwards : bodyVariantForwards(custom),
  },
}

function InviteScreen({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenHeader {...(animated ? headerAnimation : {})}>
        <AppScreen.Title>Invite people</AppScreen.Title>
        <AppScreen.Subtitle>
          Get tips <span className="text-white">5s sooner</span> for every
          invite.
        </AppScreen.Subtitle>
      </MotionAppScreenHeader>
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className="px-4 py-6">
          <div className="space-y-6">
            {[
              { label: 'Full name', value: 'Albert H. Wiggin' },
              { label: 'Email address', value: 'awiggin@chase.com' },
            ].map((field) => (
              <div key={field.label}>
                <div className="text-sm text-gray-500">{field.label}</div>
                <div className="mt-2 border-b border-gray-200 pb-2 text-sm text-gray-900">
                  {field.value}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-lg bg-cyan-500 py-2 px-3 text-center text-sm font-semibold text-white">
            Invite person
          </div>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function InvestScreen({ custom, animated = false }) {
  return (
    <AppScreen className="w-full">
      <MotionAppScreenBody {...(animated ? { ...bodyAnimation, custom } : {})}>
        <div className="px-4 py-6">
          <div className="space-y-4">
            {[
              { label: 'Number of shares', value: '100' },
              {
                label: 'Current market price',
                value: (
                  <div className="flex">
                    $34.28
                    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
                      <path
                        d="M17 15V7H9M17 7 7 17"
                        stroke="#06B6D4"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                ),
              },
              { label: 'Estimated cost', value: '$3,428.00' },
            ].map((item) => (
              <div
                key={item.label}
                className="flex justify-between border-b border-gray-100 pb-4"
              >
                <div className="text-sm text-gray-500">{item.label}</div>
                <div className="text-sm font-semibold text-gray-900">
                  {item.value}
                </div>
              </div>
            ))}
            <div className="rounded-lg bg-cyan-500 py-2 px-3 text-center text-sm font-semibold text-white">
              Buy shares
            </div>
          </div>
        </div>
      </MotionAppScreenBody>
    </AppScreen>
  )
}

function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

function FeaturesDesktop() {
  let [changeCount, setChangeCount] = useState(0)
  let [selectedIndex, setSelectedIndex] = useState(0)
  let prevIndex = usePrevious(selectedIndex)
  let isForwards = prevIndex === undefined ? true : selectedIndex > prevIndex

  let onChange = useDebouncedCallback(
    (selectedIndex) => {
      setSelectedIndex(selectedIndex)
      setChangeCount((changeCount) => changeCount + 1)
    },
    100,
    { leading: true }
  )

  return (
    <Tab.Group
      as="div"
      className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24"
      selectedIndex={selectedIndex}
      onChange={onChange}
      vertical
    >
      <Tab.List className="relative z-10 order-last col-span-6 space-y-6">
        {features.map((feature, featureIndex) => (
          <div
            key={feature.name}
            className="relative rounded-2xl transition-colors hover:bg-gray-800/30"
          >
            {featureIndex === selectedIndex && (
              <motion.div
                layoutId="activeBackground"
                className="absolute inset-0 bg-gray-800"
                initial={{ borderRadius: 16 }}
              />
            )}
            <div className="relative z-10 p-8">
              <feature.icon className="h-8 w-8" />
              <h3 className="mt-6 font-title text-2xl font-medium text-white">
                <Tab className="text-left tracking-wide [&:not(:focus-visible)]:focus:outline-none">
                  <span className="absolute inset-0 rounded-2xl" />
                  {feature.name}
                </Tab>
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </Tab.List>
      <div className="relative col-span-6">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <CircleBackground color="#13B5C8" className="animate-spin-slower" />
        </div>
        <PhoneFrame className="z-10 mx-auto w-full max-w-[366px]">
              {features.map((feature, featureIndex) =>
                selectedIndex === featureIndex ? (
                  <feature.screenshot />
                ) : null
              )}
        </PhoneFrame>
      </div>
    </Tab.Group>
  )
}

function FeaturesMobile() {
  let [activeIndex, setActiveIndex] = useState(0)
  let slideContainerRef = useRef()
  let slideRefs = useRef([])

  useEffect(() => {
    let observer = new window.IntersectionObserver(
      (entries) => {
        for (let entry of entries) {
          if (entry.isIntersecting) {
            setActiveIndex(slideRefs.current.indexOf(entry.target))
            break
          }
        }
      },
      {
        root: slideContainerRef.current,
        threshold: 0.6,
      }
    )

    for (let slide of slideRefs.current) {
      if (slide) {
        observer.observe(slide)
      }
    }

    return () => {
      observer.disconnect()
    }
  }, [slideContainerRef, slideRefs])

  return (
    <>
      <div
        ref={slideContainerRef}
        className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&::-webkit-scrollbar]:hidden"
      >
        {features.map((feature, featureIndex) => (
          <div
            key={featureIndex}
            ref={(ref) => (slideRefs.current[featureIndex] = ref)}
            className="w-full flex-none snap-center px-4 sm:px-6"
          >
            <div className="relative transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <CircleBackground
                  color="#13B5C8"
                  className={featureIndex % 2 === 1 ? 'rotate-180' : undefined}
                />
              </div>
              <PhoneFrame className="relative mx-auto w-full max-w-[366px]">
                <feature.screenshot />
              </PhoneFrame>
              <div className="absolute inset-x-0 bottom-0 bg-gray-800/95 p-6 backdrop-blur sm:p-10">
                <feature.icon className="h-8 w-8" />
                <h3 className="text-lg mt-4 font-semibold text-white sm:text-lg">
                  {feature.name}
                </h3>
                <p className="mt-2 text-sm text-gray-400">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 flex justify-center gap-3">
        {features.map((_, featureIndex) => (
          <button
            type="button"
            key={featureIndex}
            className={clsx(
              'relative h-0.5 w-4 rounded-full',
              featureIndex === activeIndex ? 'bg-gray-300' : 'bg-gray-500'
            )}
            aria-label={`Go to slide ${featureIndex + 1}`}
            onClick={() => {
              slideRefs.current[featureIndex].scrollIntoView({
                block: 'nearest',
                inline: 'nearest',
              })
            }}
          >
            <span className="absolute -inset-x-1.5 -inset-y-3" />
          </button>
        ))}
      </div>
    </>
  )
}

export function PrimaryFeatures() {
  return (
    <section
      id="features"
      aria-label=""
      className="bg-gray-900 py-12 lg:py-24"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center lg:max-w-3xl">
          <h2 className="font-title text-3xl font-bold leading-tight tracking-normal text-white">
            Hit your weekly goals to level up
          </h2>
          <p className="mt-4 text-md lg:text-xl text-gray-400">
            We sync and then analyse your fitness data to set smart weekly fitness goals. Hit your targets and you’ll start levelling up your Avatar!
          </p>
        </div>
      </Container>
      <div className="mt-6 md:hidden">
        <FeaturesMobile />
      </div>
      <Container className="hidden md:mt-16 md:block">
        <FeaturesDesktop />
      </Container>
    </section>
  )
}
