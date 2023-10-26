/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        // Link to page install extension by browsers
        FIREFOX_EXT: 'https://linkfirefox.com',
        CHROME_EXT: 'https://linkchrome.com',
        EDGE_EXT: 'https://linkedge.com',
    }
}

module.exports = nextConfig