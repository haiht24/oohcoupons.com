/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        // Link to page install extension by browsers
        FIREFOX_EXT: '#',
        CHROME_EXT: 'https://chrome.google.com/webstore/detail/oohcoupons-automatic-coup/dcifkfjlcblnhbpobekjhnfmnpcdojkd',
        EDGE_EXT: 'https://microsoftedge.microsoft.com/addons/detail/oohcoupons-automatic-co/onmmocohcfnlohnoolaihphgpfhceokp',
    }
}

module.exports = nextConfig