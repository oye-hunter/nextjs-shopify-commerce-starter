import { getURL } from '@/lib/utils/url';

export const siteConfig = {
    title: 'Next.js Shopify Commerce Starter',
    description:
        'Launch your shopify store front site with Next.js Shopify Commerce Starter featuring Global Metadata Configuration, MDX blog pages, shopify collection, products and productDetails data fetching, cart and chechout integration dynamic OG images, JSON-LD and more.',
    baseUrl: getURL(),
    creator: 'Hassan Mughal',
    publisher: 'Hassan Mughal',
    keywords: [
        'e-commerce',
        'shopify store front',
        'nextjs shopify commerce starter',
        'seo',
        'shopify',
        'storeFront',
        'shopify integrations',
        'json-ld',
        'mdx',
        'mdx-content',
        'nextjs',
        'tailwindcss',
        'fumadocs',
    ],
    alternateNames: [
        'nextjs shopify commerce starter',
        'nextjs shopify commerce template',
        'nextjs shopify starter',
        'nextjs shopify template'
    ],
    author: {
        name: 'Hassan Mughal',
        url: 'https://www.silverthreadlabs.com',
        logo: 'https://www.silverthreadlabs.com/favicon/favicon.ico',
        twitterHandle: '@syedsaif_666'
    },
    
    getImageConfig: (title: string) => ({
        url: `${getURL()}/og?title=${encodeURIComponent(title)}`,
        width: 1200,
        height: 630,
        alt: title,
        description: title
    }),
    social: {
        sameAs: []

    },
    sitemap: {
        staticRoutes: ['', '/contact', '/about', '/blog', '/products', '/product']
    }
};
