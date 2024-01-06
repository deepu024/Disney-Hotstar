/** @type {import('next').NextConfig} */
const nextConfig = {
    dangerouslyAllowSVG: true,
    images: {
        domains: ["image.tmdb.org", "placehold.co"]
    }
}

module.exports = nextConfig
