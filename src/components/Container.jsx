import clsx from 'clsx'

export function Container({ className, ...props }) {
  return (
    <div
      className={clsx('mx-auto max-w-7xl px-6 sm:px-6 lg:px-12', className)}
      {...props}
    />
  )
}
