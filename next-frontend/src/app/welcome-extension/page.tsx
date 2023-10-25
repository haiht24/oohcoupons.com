import { Metadata } from 'next'

/* Metadata */
export const metadata: Metadata = {
  alternates: {
    canonical: '/welcome-extension',
  },
  title: `Welcome`,
  description: '',
}

const WelcomeExt = () => {
  return (
    <div>WelcomeExt</div>
  )
}

export default WelcomeExt