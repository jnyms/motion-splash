import Image from 'next/image'
import Link from 'next/link'

import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { TextField } from '@/components/Fields'
import { AppIcon } from '@/components/Logo'
import { NavLinks } from '@/components/NavLinks'
import qrCode from '@/images/qr-code.svg'

function QrCodeBorder(props) {
  return (
    <svg viewBox="0 0 96 96" fill="none" aria-hidden="true" {...props}>
      <path
        d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  )
}

export function Footer() {
  return (
    <footer className="border-t border-gray-200">
      <Container>
        <div className="flex flex-col items-start justify-between gap-y-12 pt-16 pb-6 lg:flex-row lg:items-center lg:py-16">
          <div>
            <div className="flex items-center text-gray-900">
              <AppIcon className="h-12 w-12 flex-none" />
              <div className="ml-4">
                <p className="text-base font-semibold leading-snug">Motion</p>
                {/* <p className="mt-none text-sm">Fitness progress made fun.</p> */}
                <p className="mt-none text-sm text-gray-500">
            &copy; Copyright {new Date().getFullYear()}. All rights reserved.
          </p>
              </div>
            </div>
            <nav className="mt-11 flex gap-8 hidden">
              <NavLinks />
            </nav>
          </div>

        </div>
x
      </Container>
    </footer>
  )
}
