import Image from 'next/image'
import motionWordmark from '@/images/motion-wordmark.svg'
import motionLogo from '@/images/motion-logo.svg'
import motionIcon from '@/images/motion-icon.svg'

export function Logomark(props) {
  return (
    <Image src={motionWordmark} alt="Motion logo" unoptimized {...props} />
  )
}
export function Logo(props) {
  return (
    <Image src={motionLogo} alt="Motion logo" unoptimized {...props} />
  )
}
export function AppIcon(props) {
  return (
    <Image src={motionIcon} alt="Motion app icon" unoptimized {...props} />
  )
}