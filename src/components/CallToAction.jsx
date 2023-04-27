import { AppStoreLink } from '@/components/AppStoreLink'
import { CircleBackground } from '@/components/CircleBackground'
import { Container } from '@/components/Container'
import { AppIcon } from '@/components/Logo'
import { Button } from '@/components/Button'
export function CallToAction() {
  return (
    <section
      id="get-free-shares-today"
      className="relative overflow-hidden bg-gray-900 py-12 lg:py-24"
    >
      <div className="absolute top-1/2 left-20 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
        <CircleBackground color="#fff" className="animate-spin-slower hidden sm:block" />
      </div>
      <Container className="relative">
        <div className="mx-auto max-w-lg text-center">
          <AppIcon className="h-16 w-auto mb-7 mx-auto" />
          <h2 className="text-3xl font-bold font-title tracking-normal leading-tight text-white lg:text-4xl">
            Claim your Avatar today
          </h2>
          <p className="mt-4 text-md lg:text-lg text-gray-300">
          Motion is in early access, so there is limited space for users to test the app. Secure your place now.
          </p>
          <div className="mt-8 flex justify-center">
            <Button color="white" className="px-5 cursor-pointer" >
              <span className="text-lg text-black">Get early access</span>  
            </Button>
          </div>
        </div>
      </Container>
    </section>
  )
}
