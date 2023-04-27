import Link from 'next/link'

import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'Can I connect my Samsung watch?',
      answer:
        "Samsung and Google have introduced their 'Health Connect' platform that lets many apps and trackers share data. It's still in beta but we are actively working to integrate it. In the meantime, many of our users have success connecting their galaxy watches to Google Fit, and then connecting Google Fit to motion.",
    },
    {
      question: 'How do I meet new people on the app?',
      answer:
        "We're building a large and inclusive community for Motion fans. Please join us on our <a class='font-medium underline' href='https://www.facebook.com/groups/1205085826621607'>Facebook page</a>. It's a great place to meet likeminded people, and you'll be the first to know the latest Motion news.",
    },

  ],
  [
    {
      question: 'How are activity points calculated?',
      answer:
        'Firstly we import your activity data from any smartwatch or fitness app you use, including workouts, step count, distance travelled, and active calories. Our algorithm then combines this with your other health data to create an activity points score.',
    },
    {
      question: 'How do I change my weekly goal?',
      answer:
        'Your weekly activity points goal is derived from your personal info and your historic activity data, and will adjust to you each week depending on how well you do. You can earn more points by exercising, tracking steps or workouts on your phone or smart watch.',
    },

  ],
  [
    {
      question: 'How do I level up my avatar?',
      answer:
        'You can grow your Activatar by hitting your personalised weekly activity and fitness goals. By hitting these goals, you earn Shakes, which can be claimed to progress to the enxt level. Keep your Activatar fit and healthy by doing the same!',
    },
  ],

]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 bg-white py-12 lg:py-24"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="font-title text-3xl font-bold leading-tight tracking-normal text-gray-900"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            If you have anything else you want to ask,{' '}
            <Link
              href="mailto: founders@motion-app.com"
              className="text-gray-900 underline"
            >
              reach out to us
            </Link>
            .
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="space-y-10">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      {faq.question}
                    </h3>
                    <p className="mt-4 text-sm text-gray-700" dangerouslySetInnerHTML={{ __html: faq.answer }}></p>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
