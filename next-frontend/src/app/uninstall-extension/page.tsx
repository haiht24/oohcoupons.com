import { Metadata } from 'next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import '@/assets/css/uninstall-extension.scss'
import UninstallExtensionBody from '@/components/UninstallExtensionBody'

/* Metadata */
export const metadata: Metadata = {
    alternates: {
        canonical: '/uninstall-extension',
    },
    title: `Uninstall - oOhcoupons`,
    description: 'Successfully uninstalled. Help us improve the oOhcoupons browser extension.',
}

const UninstallExt = () => {
    return (
        <>
            <Nav />
            <UninstallExtensionBody />
            <Footer />
        </>
    )
}

export default UninstallExt;