import Script from 'next/script'

const tagId = 'G-DDC4P2TZ1Q'

const GoogleTag = () => {
    return (
        <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${tagId}`} />
            <Script id="google-analytics">
            {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
    
            gtag('config', '${tagId}');
            `}
            </Script>
        </>
    )
}

export default GoogleTag
