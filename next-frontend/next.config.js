/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        // Link to page install extension by browsers
        FIREFOX_EXT: '#',
        CHROME_EXT: '#',
        EDGE_EXT: '#',
    }
}

module.exports = nextConfig