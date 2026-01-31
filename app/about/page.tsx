import { Metadata } from 'next';
import Link from 'next/link';

import FeaturesList from '@/components/about/feature-list';
import { createPageMetadata } from '@/lib/seo/metadata/create-page-metadata';
import AboutSchema from '@/lib/seo/schema/about';

export const metadata: Metadata = createPageMetadata({
    path: 'about',
    description:
    'Build a custom Shopify storefront with Next.js. Server-first rendering, baked-in SEO, MDX content, and Shopify products/checkout via the Storefront API.'
});

export default function AboutPage() {
    return (
        <main role='main' className='min-h-screen'>
            <AboutSchema />
            <div className='mx-auto max-w-[90%] py-10 sm:py-16 xl:max-w-[1280px]'>
                {/* Page Header */}
                <header role='banner' className='mx-auto mb-16 max-w-3xl text-center'>
                    <div className='mb-6 flex flex-wrap items-center justify-center gap-2 px-4'>
                        <div className='flex items-center gap-2'>
                            <p className='text-canvas-text text-base leading-relaxed font-normal tracking-normal md:text-lg'>
                                Powered by
                            </p>
                            <Link
                                href='https://github.com/vercel/commerce'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-primary-solid hover:text-primary-solid-hover transition-colors'>
                                Vercel
                            </Link>
                        </div>
                        <div className='flex items-center gap-2'>
                            <p className='text-canvas-text text-base leading-relaxed font-normal tracking-normal md:text-lg'>
                                Authored by
                            </p>
                            <Link
                                href='https://github.com/oye-hunter'
                                target='_blank'
                                rel='noopener noreferrer'
                                className='text-primary-solid hover:text-primary-solid-hover transition-colors'>
                                Hassan Mughal
                            </Link>
                        </div>
                    </div>
                    <h1
                        id='about-page-title'
                        className='from-primary-solid via-primary-subtle to-primary-text-contrast bg-gradient-to-r bg-clip-text text-transparent mb-4 text-4xl leading-tight font-bold tracking-tight md:text-6xl'>
                        Custom Shopify Storefront with Next.js
                    </h1>
                    <h2
                        id='about-page-subtitle'
                        className='text-canvas-text text-lg leading-relaxed font-semibold tracking-normal text-balance md:text-xl'>
                        Design a bespoke, fast storefront backed by Shopify products and checkout—SEO, performance, and content workflows included.
                    </h2>
                </header>

                {/* Features */}
                <section aria-labelledby='features-title' className='mb-16'>
                    <FeaturesList />
                </section>
            </div>
        </main>
    );
}
