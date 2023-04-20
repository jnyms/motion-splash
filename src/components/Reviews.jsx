import { useEffect, useMemo, useRef, useState } from 'react'
import clsx from 'clsx'
import {
  motion,
  useAnimationFrame,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from 'framer-motion'

import { Container } from '@/components/Container'

const reviews = [
  {
    title: 'Best fitness app around',
    body: 'Very user friendly and easy to understand info! Found it great at getting me off my rear and completing my goals. Great app wouldn’t be without it!',
    author: 'Burnoburns',
    rating: 5,
  },
  {
    title: 'Easy to use and great motivation!',
    body: 'It’s not intense in terms of notifications, but it does send me enough to keep coming back each day.',
    author: 'oliviamhunt',
    rating: 5,
  },
  {
    title: 'Motion is awesome',
    body: 'Really enjoyed using the different features motion has to offer. Allowed me to reach my goals and compete with my mates. Would recommend for anyone that is looking to enjoy their fitness journey through friendly competitive spirit.',
    author: 'Max_Mca',
    rating: 5,
  },
  {
    title: 'Motion > Strava',
    body: 'The guys at motion are on to something, keep it up. Would recommend to anyone interested in tracking their fitness and teaming up with and against their mates',
    author: 'Jesus89898',
    rating: 5,
  },
  {
    title: 'A great new app!',
    body: "Have been using the app since Christmas and love it. Have managed to add the app widget to my phone screen and it keeps me motivated to keep up with my weekly goals.",
    author: 'FMc2437',
    rating: 4,
  },
  {
    title: 'The coolest and cutest reason to exercise',
    body: 'I love my little dude. You have to hit that goal every week.',
    author: 'sophievzxx',
    rating: 5,
  },
  {
    title: 'Great fun way to keep motivated',
    body: 'Connects to Strava and most smart/sport watches so once set up it’s hassle free. It’s a fun way to keep you hitting weekly activity goals and have a bit of banter with friends. Good for just generally maintaining fitness or working towards an event.',
    author: 'Matt Rantell',
    rating: 5,
  },
  {
    title: 'If Carlsberg did fitness apps',
    body: "This app makes it so much easier to track my progress and reach my weekly goals. The fact it's so easy now to track how active you are week in, week out is brilliant.",
    author: 'Honeybadger444',
    rating: 5,
  },
  {
    title: 'Great for motivation!',
    body: "Love this app - great for setting goals, I use it with my friends and we cheer each other on. 5/5 - I've told anyone who will listen about it!",
    author: '28Sol92',
    rating: 5,
  },
  {
    title: 'Great app',
    body: 'So good for tracking your fitness and your steps! I love being able to see my friends steps as well',
    author: 'sophievzxx',
    rating: 5,
  },
  {
    title: 'Weekly report',
    body: 'The weekly report is so good, it motivated me to do more each week.',
    author: 'choc and sweet',
    rating: 5,
  },
  {
    title: 'Efficient app',
    body: 'This app does exactly what it promises and does it well. Really impressive synchronisation with Apple Watch as well. Top stuff.',
    author: 'BenWood979',
    rating: 5,
  },
  {
    title: 'Great fitness app',
    body: 'Would recommend it to anyone. Love how it syncs with my other apps.',
    author: 'Callum Paris',
    rating: 5,
  },
  {
    title: "Possibly the only app to keep me accountable for my training",
    body: "I've struggled with consistence with my training in the past and then a friend introduced me to motion and how I love it's been gamified. Being someone that's extremely competitive but equally wanting to ensure everyone does well too, my friends and I have been in competition on step counts, number of training sessions we've done on a weekly basis and made my training soo much more fun :)",
    author: 'jwshwa',
    rating: 5,
  },
]

function StarIcon(props) {
  return (
    <svg viewBox="0 0 20 20" aria-hidden="true" {...props}>
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  )
}

function StarRating({ rating }) {
  return (
    <div className="flex">
      {[...Array(5).keys()].map((index) => (
        <StarIcon
          key={index}
          className={clsx(
            'h-5 w-5',
            rating > index ? 'fill-teal-400' : 'fill-gray-300'
          )}
        />
      ))}
    </div>
  )
}

function Review({ title, body, author, rating, className, ...props }) {
  let animationDelay = useMemo(() => {
    let possibleAnimationDelays = ['0s', '0.1s', '0.2s', '0.3s', '0.4s', '0.5s']
    return possibleAnimationDelays[
      Math.floor(Math.random() * possibleAnimationDelays.length)
    ]
  }, [])

  return (
    <figure
      className={clsx(
        'animate-fade-in rounded-3xl bg-white p-6 opacity-0 shadow-md shadow-gray-900/5',
        className
      )}
      style={{ animationDelay }}
      {...props}
    >
      <blockquote className="text-gray-900">
        <StarRating rating={rating} />
        <p className="mt-4 text-lg font-semibold leading-6 before:content-['“'] after:content-['”']">
          {title}
        </p>
        <p className="mt-3 text-base leading-7">{body}</p>
      </blockquote>
      <figcaption className="mt-3 text-sm text-gray-600 before:content-['–_']">
        {author}
      </figcaption>
    </figure>
  )
}

function splitArray(array, numParts) {
  let result = []
  for (let i = 0; i < array.length; i++) {
    let index = i % numParts
    if (!result[index]) {
      result[index] = []
    }
    result[index].push(array[i])
  }
  return result
}

function ReviewColumn({
  className,
  reviews,
  reviewClassName = () => {},
  msPerPixel = 0,
}) {
  let columnRef = useRef()
  let [columnHeight, setColumnHeight] = useState(0)
  let duration = `${columnHeight * msPerPixel}ms`

  useEffect(() => {
    let resizeObserver = new window.ResizeObserver(() => {
      setColumnHeight(columnRef.current.offsetHeight)
    })

    resizeObserver.observe(columnRef.current)

    return () => {
      resizeObserver.disconnect()
    }
  }, [])

  return (
    <div
      ref={columnRef}
      className={clsx('animate-marquee space-y-8 py-4', className)}
      style={{ '--marquee-duration': duration }}
    >
      {reviews.concat(reviews).map((review, reviewIndex) => (
        <Review
          key={reviewIndex}
          aria-hidden={reviewIndex >= reviews.length}
          className={reviewClassName(reviewIndex % reviews.length)}
          {...review}
        />
      ))}
    </div>
  )
}

function ReviewGrid() {
  let containerRef = useRef()
  let isInView = useInView(containerRef, { once: true, amount: 0.4 })
  let columns = splitArray(reviews, 3)
  columns = [columns[0], columns[1], splitArray(columns[2], 2)]

  return (
    <div
      ref={containerRef}
      className="relative -mx-4 mt-16 grid h-[49rem] max-h-[150vh] grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3"
    >
      {isInView && (
        <>
          <ReviewColumn
            reviews={[...columns[0], ...columns[2].flat(), ...columns[1]]}
            reviewClassName={(reviewIndex) =>
              clsx(
                reviewIndex >= columns[0].length + columns[2][0].length &&
                  'md:hidden',
                reviewIndex >= columns[0].length && 'lg:hidden'
              )
            }
            msPerPixel={10}
          />
          <ReviewColumn
            reviews={[...columns[1], ...columns[2][1]]}
            className="hidden md:block"
            reviewClassName={(reviewIndex) =>
              reviewIndex >= columns[1].length && 'lg:hidden'
            }
            msPerPixel={15}
          />
          <ReviewColumn
            reviews={columns[2].flat()}
            className="hidden lg:block"
            msPerPixel={10}
          />
        </>
      )}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-teal-50" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-teal-50" />
    </div>
  )
}

export function Reviews() {
  return (
    <section
      id="reviews"
      aria-labelledby="reviews-title"
      className="pt-20 pb-16 sm:pt-32 sm:pb-24 bg-teal-50"
    >
      <Container>
        <h2
          id="reviews-title"
          className="text-3xl font-bold font-title tracking-normal leading-tight text-gray-900 sm:text-center"
        >
          People get fitter with Motion.
        </h2>
        <p className="mt-4 text-lg text-gray-600 sm:text-center">
          Join the thousands of people who are getting fitter with the app.
        </p>
        <ReviewGrid />
      </Container>
    </section>
  )
}
