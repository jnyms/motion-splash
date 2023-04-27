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
          content="Privacy policy for the Motion app by Always Together Ltd."
        />
      </Head>

      <main>
        <Header />
        <section
          id="faqs"
          aria-labelledby="faqs-title"
          className="border-t border-gray-200 bg-white py-20 sm:py-20"
        >
          <Container>
            <article className="prose prose-h1:font-title prose-h1:text-4xl prose-h1:font-bold prose-h2:font-title">
              <h1>Privacy policy</h1>
              <p className="lead">
                Your privacy is critically important to us. At Always Together
                we have a few fundamental principles:
              </p>
              <ul>
                <li>
                  We don’t ask you for personal information unless we truly need
                  it.
                </li>
                <li>
                  We don’t share your personal information with anyone except to
                  comply with the law, develop our products, or protect our
                  rights.
                </li>
                <li>
                  We don’t store personal information on our servers unless
                  required for the on-going operation of one of our services.
                </li>
              </ul>
              <p>Below is our privacy policy which incorporates these goals.</p>
              <p>
                If you have questions about deleting or correcting your personal
                data please contact our{' '}
                <a href="mailto:info@motion-app.com">support team</a>.
              </p>

              <h2>Website/App Visitors</h2>
              <p>
                Like most internet-service operators, Always Together collects
                non-personally-identifying information of the sort that web
                browsers, apps, and servers typically make available, such as
                the browser type, language preference, referring site, and the
                date and time of each visitor request. Always Together’s purpose
                in collecting non-personally identifying information is to
                better understand how Always Together’s visitors use its
                website/app. From time to time, Always Together may release
                non-personally-identifying information in the aggregate, e.g.,
                by publishing a report on trends in the usage of its website.
              </p>

              <p>
                Always Together also collects potentially personally-identifying
                information like Internet Protocol (IP) addresses for users that
                use the services and visitors.
              </p>

              <h2>Gathering of Personally-Identifying Information</h2>
              <p>
                Certain visitors to Always Together’s websites and users of
                Always Together’s apps choose to interact with Always Together
                in ways that require Always Together to gather
                personally-identifying information. The amount and type of
                information that Always Together gathers depends on the nature
                of the interaction. For example, we ask users of our app to
                provide a phone number. In each case, Always Together collects
                such information only insofar as is necessary or appropriate to
                fulfil the purpose of the visitor’s interaction with Always
                Together. Always Together does not disclose
                personally-identifying information other than as described
                below. And visitors can always refuse to supply
                personally-identifying information, with the caveat that it may
                prevent them from engaging in certain product-related
                activities.
              </p>

              <p>
                Health and Activity data gathered as part of the fulfilment of
                the purpose of the platform (e.g. Steps and Workouts data from
                all sources connected to us such as Google Fit or Apple Health)
                will be stored securely and only shared with 3rd parties that
                facilitate the better working of the platform (e.g. analytics
                platform) and other users whom the data providing user
                explicitly approves (e.g. joining a team with friends).
              </p>

              <h2>Google Fit</h2>

              <p>
                We only collect Steps, Workouts, and distance data from the user
                and this data is stored in on encrypted servers and only shared
                according to the above, with the explicit permission of the
                user.
              </p>
              <p>
                We read users daily/weekly steps, as well as user
                Sessions(workouts) added to Google Fit storage by other third
                party apps. Each Session is being read with basic details that
                let us add those values to their total weekly progress:
              </p>

              <ul>
                <li>type/name/description for display purposes</li>
                <li>start/end time which tells us the duration</li>
                <li>total calories burned during this workout</li>
                <li>
                  total distance travelled during this workout(relevant for
                  workouts like Running etc.)
                </li>
              </ul>

              <h2>Aggregated Statistics</h2>

              <p>
                Always Together may collect statistics about the behavior of
                visitors to its websites/apps. However, Always Together does not
                disclose personally-identifying information other than as
                described below.
              </p>
              <h2>Protection of Certain Personally-Identifying Information</h2>

              <p>
                Always Together discloses potentially personally-identifying and
                personally-identifying information only to those of its
                employees, contractors and affiliated organizations that (i)
                need to know that information in order to process it on Always
                Together’s behalf or to provide services available at Always
                Together’s web-services, and (ii) that have agreed not to
                disclose it to others. Some of those employees, contractors and
                affiliated organizations may be located outside of your home
                country; by using Always Together’s web-services, you consent to
                the transfer of such information to them. Always Together will
                not rent or sell potentially personally-identifying and
                personally-identifying information to anyone. Other than to its
                employees, contractors and affiliated organizations, as
                described above, Always Together discloses potentially
                personally-identifying and personally-identifying information
                only in response to a subpoena, court order or other
                governmental request, or when Always Together believes in good
                faith that disclosure is reasonably necessary to protect the
                property or rights of Always Together, third parties or the
                public at large. If you are a registered user of Always Together
                and have supplied your email address, Always Together may
                occasionally send you an email to tell you about new features,
                solicit your feedback, or just keep you up to date with what’s
                going on with Always Together and our products. We primarily use
                our various product blogs to communicate this type of
                information, so we expect to keep this type of email to a
                minimum. If you send us a request (for example via a support
                email or via one of our feedback mechanisms), we reserve the
                right to publish it in order to help us clarify or respond to
                your request or to help us support other users. Always Together
                takes all measures reasonably necessary to protect against the
                unauthorized access, use, alteration or destruction of
                potentially personally-identifying and personally-identifying
                information.
              </p>
              <h2>Cookies</h2>
              <p>
                A cookie is a string of information that a website stores on a
                visitor’s computer, and that the visitor’s browser provides to
                the website each time the visitor returns. Always Together uses
                cookies to help Always Together identify and track visitors,
                their usage of Always Together website, and their website access
                preferences. Always Together visitors who do not wish to have
                cookies placed on their computers should set their browsers to
                refuse cookies before using Always Together’s websites, with the
                drawback that certain features of Always Together’s websites may
                not function properly without the aid of cookies.
              </p>

              <h2>Business Transfers</h2>
              <p>
                If Always Together, or substantially all of its assets, were
                acquired, or in the unlikely event that Always Together goes out
                of business or enters bankruptcy, user information would be one
                of the assets that is transferred or acquired by a third party.
                You acknowledge that such transfers may occur, and that any
                acquirer of Always Together may continue to use your personal
                information as set forth in this policy.
              </p>
              <h2>Privacy Policy Changes</h2>
              <p>
                Although most changes are likely to be minor, Always Together
                may change its Privacy Policy from time to time, and in Always
                Together’s sole discretion. Always Together encourages visitors
                to frequently check this page for any changes to its Privacy
                Policy. Your continued use of these services after any change in
                this Privacy Policy will constitute your acceptance of such
                change.
              </p>

              <h2>Contacting us</h2>

              <p>
                If you have questions about this policy, please{' '}
                <a href="info@motion-app.com">email us</a>.
              </p>
              <p>
                Creative Commons: This privacy policy is based on one developed
                by <a href="http://automattic.com/privacy/">Automattic</a> and
                is licensed under a Creative Commons Attribution-ShareAlike 2.5
                License.
              </p>
            </article>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  )
}
