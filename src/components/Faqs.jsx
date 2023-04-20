import Link from 'next/link'

import { Container } from '@/components/Container'

const faqs = [
  [
    {
      question: 'How do I get to use Motion?',
      answer:
        'Grow your Activatar by hitting your personalised weekly activity and fitness goals. Keep your Activatar fit and healthy by doing the same!',
    },
    {
      question: 'Can I invite my friends to join me?',
      answer:
        'Grow your Activatar by hitting your personalised weekly activity and fitness goals. Keep your Activatar fit and healthy by doing the same!',
    },
  ],
  [
    {
      question: 'Is my fitness data private and secure?',
      answer:
      'Grow your Activatar by hitting your personalised weekly activity and fitness goals. Keep your Activatar fit and healthy by doing the same!',
    },
    {
      question: 'Can I manually add workouts?',
      answer:
      'Grow your Activatar by hitting your personalised weekly activity and fitness goals. Keep your Activatar fit and healthy by doing the same!',
    },
  ],
  [
    {
      question: 'Why does my weekly distance look low?',
      answer:
      'Grow your Activatar by hitting your personalised weekly activity and fitness goals. Keep your Activatar fit and healthy by doing the same!',
    },
    {
      question: 'Can I keep using my other fitness apps?',
      answer:
      'Grow your Activatar by hitting your personalised weekly activity and fitness goals. Keep your Activatar fit and healthy by doing the same!',
    },
  ],
]

export function Faqs() {
  return (
    <section
      id="faqs"
      aria-labelledby="faqs-title"
      className="border-t border-gray-200 py-20 sm:py-32 bg-white"
    >
      <Container>
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2
            id="faqs-title"
            className="text-3xl font-bold font-title text-gray-900 tracking-normal leading-tight"
          >
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            If you have anything else you want to ask,{' '}
            <Link
              href="mailto:info@example.com"
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
                    <p className="mt-4 text-sm text-gray-700">{faq.answer}</p>
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
