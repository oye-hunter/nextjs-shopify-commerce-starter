

import { FaFileAlt, FaTachometerAlt, FaTerminal } from 'react-icons/fa';

interface Feature {
    icon: React.ReactElement;
    title: string;
    descriptionStart: string;
    code?: string;
    descriptionEnd?: string;
}

// Features array with updated structure and react-icons/fa
const features: Feature[] = [
    {
        icon: <FaFileAlt className='h-5 w-5' />,
        title: 'Custom Next.js UI',
        descriptionStart: 'Design a bespoke storefront with Next.js and Tailwind — no theme constraints.',
        // code: 'Next.js App Router',
        // descriptionEnd: ', React Server Components and Tailwind — no theme constraints.'
    },
    {
        icon: <FaTachometerAlt className='h-5 w-5' />,
        title: 'Performance & Caching',
        descriptionStart: 'Server‑side rendering and smart caching keep product data fast and fresh without full redeploys.',
        // code: 'SSR',
        // descriptionEnd: ' keep product data fast and fresh without full redeploys.'
    },
    {
        icon: <FaTerminal className='h-5 w-5' />,
        title: 'Shopify‑Native Checkout',
        descriptionStart: 'Connect products via Shopify Storefront API and route customers through secure Shopify Checkout.',
        // code: 'Shopify Storefront API',
        // descriptionEnd: ' and route customers through secure Shopify Checkout.'
    },
];
export default features;
