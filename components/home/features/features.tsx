'use client';

import { motion } from 'framer-motion';
import { FaBolt, FaReact, FaSearch, FaShopify } from 'react-icons/fa';

const featuresData = [
    {
        id: 1,
        title: 'Shopify Native',
        description: 'Secure, trusted checkout',
        details: 'Use the Shopify Storefront API for products, carts and payments. Keep commerce on Shopify while you design freely in Next.js.',
        icon: FaShopify,
        color: 'text-[#95BF47]' // Shopify green-ish
    },
    {
        id: 2,
        title: 'Next.js Powered',
        description: 'Bespoke storefronts',
        details: 'Build with the App Router, React Server Components and Tailwind. Ship pixel‑perfect product, collection and content layouts.',
        icon: FaReact,
        color: 'text-[#61DAFB]' // React blue
    },
    {
        id: 3,
        title: 'High Performance',
        description: 'Fast by default',
        details: 'Server‑side rendering and smart caching keep product data fresh and snappy — great Core Web Vitals out of the box.',
        icon: FaBolt,
        color: 'text-[#F59E0B]' // Amber
    },
    {
        id: 4,
        title: 'SEO Ready',
        description: 'Built‑in discoverability',
        details: 'Sitemap, robots.txt and JSON‑LD schema with dynamic Open Graph. Plug your analytics and CDP with minimal setup.',
        icon: FaSearch,
        color: 'text-[#EC4899]' // Pink
    }
];

export default function Features() {
    return (
        <section className='py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
            <div className='text-center mb-16'>
                <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className='text-3xl md:text-5xl font-bold text-canvas-text-contrast mb-4'>
                    Everything you need
                </motion.h2>
                <motion.p 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className='text-lg text-canvas-text max-w-2xl mx-auto'>
                    A powerful stack designed for modern commerce.
                </motion.p>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
                {featuresData.map((feature, index) => (
                    <motion.div
                        key={feature.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -5 }}
                        className='group relative overflow-hidden rounded-3xl border border-canvas-line bg-canvas-base p-8 hover:border-primary-border transition-colors duration-300'
                    >
                        <div className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-canvas-bg-subtle ${feature.color}`}>
                            <feature.icon className="h-6 w-6" />
                        </div>
                        <h3 className='text-xl font-bold text-canvas-text-contrast mb-2 group-hover:text-primary-text transition-colors'>
                            {feature.title}
                        </h3>
                        <p className='text-sm font-medium text-primary-text mb-4'>
                            {feature.description}
                        </p>
                        <p className='text-canvas-text leading-relaxed'>
                            {feature.details}
                        </p>
                        
                        {/* Hover Gradient */}
                        <div className='absolute inset-0 bg-gradient-to-br from-primary-bg-subtle/0 via-primary-bg-subtle/0 to-primary-bg-subtle/30 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none' />
                    </motion.div>
                ))}
            </div>
        </section>
    );
}
