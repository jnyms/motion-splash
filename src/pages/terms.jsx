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
        <title>Motion - Terms and Conditions</title>
        <meta
          name="description"
          content="Terms and Conditions for the Motion app by Always Together Ltd."
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
            <article className="prose prose-h1:font-title prose-h1:font-bold prose-h1:text-4xl prose-h2:font-title">
              <h1>Terms and Conditions</h1>
              <p className="lead">
                We hate legalese, so we’ve tried to make ours readable.
              </p>

              <p>
                Always Together Ltd (’we’, ’us’, ’our’, ’Motion’) present the
                following terms and conditions, which govern your use of the
                Motion site and services (Website/App), and all content,
                services, and products available at or through the Website/App,
                including but not limited to Motion-app.com
              </p>

              <p>
                The Website/App is offered subject to your acceptance, without
                modification, of all of the terms and conditions contained
                within, along with all other operating rules, policies
                (including, without limitation, Always Together’s Privacy
                Policy) and procedures that may be published from time to time
                on this Website/App or APP by us (collectively, the Agreement).
              </p>
              <p>
                Please read this Agreement carefully before accessing or using
                the Website/App. By accessing or using any part of the
                Website/App, you agree that you are bound by the terms and
                conditions of this Agreement. If you do not agree to all the
                terms and conditions of this Agreement, then you may not access
                the Website/App or use any services. If these terms and
                conditions are considered an offer by Always Together,
                acceptance is expressly limited to these terms. The Website/App
                is available only to individuals who are at least 13 years old.
              </p>

              <p>
                If you operate an account, comment on an account, post material
                to the Website/App, post links on the Website/App, or otherwise
                make (or allow any third party to make) material available by
                means of the Website/App (any such material, also known as
                ’Content’), you are entirely responsible for that Content and
                any harm that may result from it. That is the case regardless of
                whether the Content in question constitutes text, graphics, an
                audio file, a video file, or computer software.
              </p>

              <h2>Your Account</h2>
              <p>
                If you create an account on the Website/App, you are responsible
                for maintaining the security of your account. You are
                responsible for all activities that occur under the account and
                any other actions taken in connection with the account. You must
                take reasonable steps to guard the security of your account. We
                will not be liable for any acts or omissions resulting from a
                breach of security, including any damages of any kind incurred
                as a result of such acts or omissions.
              </p>

              <h2>Account Structure</h2>
              <p>Motion is currently provided as a free service.</p>
              <p>
                By using this Service, you agree to Always Together’s right to
                change, modify, or discontinue any type of account or the
                features available to it at any time.
              </p>

              <h2>Privacy Policy</h2>
              <p>
                Your use of the Website/App is governed by the{' '}
                <Link href="/privacy">Privacy Policy</Link>
              </p>

              <h2>Indemnity</h2>
              <p>
                You agree to indemnify and hold harmless Always Together, its
                contractors, its licensors, and their respective directors,
                officers, employees and agents from and against any and all
                claims and expenses, including attorneys’ fees, arising out of
                your use of the Website/App, including but not limited to out of
                your violation of this Agreement.
              </p>

              <h2>Termination</h2>
              <p>
                We may terminate your access to all or any part of the
                Website/App at any time, at our sole discretion, if we believe
                that you have violated this Agreement. You agree that any
                termination of your access to the Website/App may involve
                removing or discarding any content you have provided. We may, at
                our sole discretion, discontinue providing the Website/App at
                any time, with or without notice.
              </p>
              <p>
                If you wish to terminate this Agreement, you may delete your
                account and cease using the Website/App. You agree that, upon
                deletion of your account, we may, but are not required to,
                remove any content you have provided, at any time past the
                deletion of your account.
              </p>
              <p>
                All provisions of this Agreement which by their nature should
                survive termination shall survive termination, including,
                without limitation, ownership provisions, warranty disclaimers,
                indemnity and limitations of liability.
              </p>
              <h2>License to Reproduce Content</h2>
              <p>
                By submitting Content to us for inclusion on the Website/App,
                you grant us a world-wide, royalty-free, and non-exclusive
                license to reproduce, modify, adapt and publish the Content,
                solely for the purpose of displaying, distributing and promoting
                the contents of your account, including through downloadable
                clients and external feeds.
              </p>
              <p>
                If you delete Content, we will use reasonable efforts to remove
                it from the Website/App, but you acknowledge that caching or
                references to the Content may not be made immediately
                unavailable.
              </p>

              <h2>Account Content</h2>
              <p className="lead">
                You agree to the following provisions for posting Content to the
                Website/App:
              </p>
              <ol>
                <li>
                  We claim no ownership or control over any Content that you
                  post to the Website/App. You retain any intellectual property
                  rights to the Content you post, in accordance with applicable
                  law. By posting Content, you represent that you have the
                  rights to reproduce that Content (and the right to allow us to
                  serve such Content) without violation of the rights of any
                  third party. You agree that you will bear any liability
                  resulting from the posting of any Content that you do not have
                  the rights to post.
                </li>
                <li>
                  All Content posted to the Website/App in any way is the
                  responsibility of the owner. Within the confines of
                  international and local law, we will generally not place a
                  restriction on the type or appropriateness of any Content. If
                  Content is deemed illegal by any law having jurisdiction over
                  you, you agree that we may submit any necessary information to
                  the proper authorities.
                </li>
                <li>
                  We do not pre-screen Content. However, you acknowledge that we
                  have the right (but not the obligation), in our sole
                  discretion, to remove or refuse to remove any Content from the
                  service. You also agree that we may, without limitation, take
                  any steps necessary to remove Content from the site search
                  engine or member directory, at our sole discretion.
                </li>
                <li>
                  If any Content you have submitted is reported to us as
                  violating this Agreement, you agree that we may call upon you
                  to change, modify, or remove that Content, within a reasonable
                  amount of time, as defined by us. If you do not follow this
                  directive, we may terminate your account.
                </li>
                <li>
                  Respect each other. ANY OFFENSIVE CONTENT OR ANY FORM OF
                  HARASSMENT FROM ONE USER TO ANOTHER WILL NOT BE TOLERATED AND
                  THE OFFENDING USERS WILL BE REMOVED FROM THE SYSTEM ONCE
                  REPORTED.
                </li>
              </ol>
              <h2>Content Posted on Other Website/Apps</h2>
              <p>
                We have not reviewed, and cannot review, all of the material,
                including computer software, made available through the
                Website/Apps and webpages to which we, any user, or any provider
                of Content links, or that link to us. We do not have any control
                over those Website/Apps and webpages, and are not responsible
                for their contents or their use. By linking to an external
                Website/App or webpage, we do not represent or imply that we
                endorse such Website/App or webpage. You are responsible for
                taking precautions as necessary to protect yourself and your
                computer systems from viruses, worms, Trojan horses, and other
                harmful or destructive content. We disclaim any responsibility
                for any harm resulting from your use of external Website/Apps
                and webpages, whether that link is provided by us or by any
                provider of Content on the Website/App.
              </p>

              <h2>No Resale of Services</h2>
              <p>
                You agree not to reproduce, duplicate, copy, sell, resell, or
                exploit any portion of the Website/App, use of the Website/App,
                or access to the Website/App.
              </p>

              <h2>Exposure to Content</h2>
              <p>
                You agree that by using the service, you may be exposed to
                Content you find offensive or objectionable. If such Content is
                reported to us, it will be our sole discretion as to what
                action, if any, should be taken.
              </p>

              <h2>Member Conduct</h2>
              <p className="lead">
                You agree that you will not use the Website/App to:
              </p>
              <ol>
                <li>
                  Upload, post, or otherwise transmit any Content that is
                  harmful, threatening, abusive, hateful, invasive to the
                  privacy and publicity rights of any person, or that violates
                  any applicable local, national, or international law,
                  including any regulation having the force of law;
                </li>
                <li>
                  Upload, post, or otherwise transmit any Content that is spam,
                  or contains unethical or unwanted commercial content designed
                  to drive traffic to third-party sites or boost the search
                  engine rankings of third-party sites, or to further unlawful
                  acts (such as phishing) or mislead recipients as to the source
                  of the material (such as spoofing);
                </li>

                <li>
                  Maliciously impersonate any real person or entity, including
                  but not limited to a Always Together staff member or
                  volunteer, or to otherwise misrepresent your affiliation with
                  any person or entity;
                </li>
                <li>
                  Upload, post or otherwise transmit any Content that you do not
                  have a right to transmit under any law or under contractual or
                  fiduciary relationships (such as inside information,
                  proprietary and confidential information learned or disclosed
                  as part of employment relationships or under nondisclosure
                  agreements);
                </li>
                <li>
                  Upload, post or otherwise transmit any Content that infringes
                  any patent, trademark, trade secret, copyright, or other
                  proprietary rights of any party;
                </li>
                <li>
                  Interfere with or disrupt the Website/App or servers or
                  networks connected to the Website/App, or disobey any
                  requirements, procedures, policies or regulations of networks
                  connected to the Website/App;
                </li>
                <li>
                  Solicit passwords or personal identifying information for
                  unintended, commercial or unlawful purposes from other users;
                </li>
                <li>
                  Upload, post or otherwise transmit any Content that contains
                  viruses, worms, malware, Trojan horses or other harmful or
                  destructive content;
                </li>
                <li>
                  Allow usage by others in such a way as to violate this
                  Agreement;
                </li>
                <li>
                  Make excessive or otherwise harmful automated use of the
                  Website/App;
                </li>
                <li>
                  Access any other person’s account, or exceed the scope of the
                  Website/App that you have signed up for; for example,
                  accessing and using features you don’t have a right to use.
                </li>
              </ol>
              <h2>Copyright Infringement</h2>
              <p>
                If you believe that material located on the Website/App violates
                your copyright, you may notify us in accordance with our Digital
                Millennium Copyright Act (’DMCA’) Policy. We will respond to all
                such notices as required by law, including by removing the
                infringing material or disabling access to the infringing
                material. As set forth by law, we will, in our sole discretion,
                terminate or deny access to the Website/App to users of the site
                who have repeatedly infringed upon the copyrights or
                intellectual property rights of others.
              </p>
              <h2>Changes</h2>
              <p>
                We reserve the right, at our sole discretion, to modify or
                replace any part of this Agreement at any time. We will take
                reasonable steps to notify you of any substantial changes to
                this Agreement; however, it is your responsibility to check this
                Agreement periodically for changes. Your continued use of or
                access to the Website/App following the posting of any changes
                to this Agreement constitutes acceptance of those changes.
              </p>
              <p>
                We may also, in the future, offer new services and/or features
                through the Website/App (including the release of new tools and
                resources). Such new features and/or services shall be subject
                to the terms and conditions of this Agreement.
              </p>
              <h2>Disclaimer of Warranties</h2>
              <p>
                This Website/App is provided ’as is’. Always Together and its
                suppliers and licensors hereby disclaim all warranties of any
                kind, express or implied, including, without limitation, the
                warranties of merchantability, fitness for a particular purpose
                and non-infringement. Neither Always Together, nor its suppliers
                and licensors, makes any warranty that the Website/App will be
                error-free or that access to the Website/App will be continuous
                or uninterrupted. You agree that any interruptions to the
                service will not qualify for reimbursement or compensation. You
                understand that you download from, or otherwise obtain content
                or services through, the Website/App at your own discretion and
                risk.
              </p>
              <p>
                No advice or information, whether oral or written, obtained by
                you in any fashion shall create any warranty not expressly
                stated in this Agreement.
              </p>
              <h2>Limitation of Liability</h2>
              <p>
                You expressly understand and agree that in no event will Always
                Together, or its suppliers or licensors, be liable with respect
                to any subject matter of this agreement under any contract,
                negligence, strict liability or other legal or equitable theory
                for: (i) any special, incidental or consequential damages; (ii)
                the cost of procurement or substitute products or services;
                (iii) interruption of use or loss or corruption of data; (iv)
                any statements or conduct of any third party on the service; or
                (v) any unauthorized access to or alterations of your Content.
                We shall have no liability for any failure or delay due to
                matters beyond our reasonable control.
              </p>
              <p>
                The foregoing shall not apply to the extent prohibited by
                applicable law.
              </p>

              <h2>General Information</h2>
              <p>
                This Agreement constitutes the entire agreement between us and
                you concerning your use of the Website/App. This Agreement may
                only be modified by a written amendment signed by an authorized
                representative of Always Together, or by the posting of a
                revised version to this location. Except to the extent that
                applicable law (if any) provides otherwise, any dispute arising
                between you and Always Together regarding these Terms of Service
                and/or your use or access of the Website/App will be governed by
                the laws of England and Wales, excluding any conflict of law
                provisions. You agree to submit to the jurisdiction of the
                courts of England and Wales for any disputes arising out of or
                relating to your use of the Website/App or your acceptance of
                this Agreement.
              </p>
              <p>
                If any part of this Agreement is held invalid or unenforceable,
                that part will be construed to reflect the parties’ original
                intent, and the remaining portions will remain in full force and
                effect. A waiver by either party of any term or condition of
                this Agreement or any breach thereof, in any one instance, will
                not waive such term or condition or any subsequent breach
                thereof.
              </p>

              <p>
                The section titles in this Agreement are for convenience only
                and have no legal or contractual effect.
              </p>

              <h2>Reporting Violations</h2>
              <p>
                Please {' '}
                <Link href="info@Motion-app.com">email us</Link> to
                report a violation.
              </p>
              <p>
                Creative Commons: This Terms of Service document is based on one developed by 
                {' '}<Link href="http://wordpress.com/tos/">Automattic</Link> and is
                licensed under a Creative Commons Attribution-ShareAlike 2.5
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
