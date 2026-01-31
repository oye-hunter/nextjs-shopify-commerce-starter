'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function Cta() {
    return (
        <section className='py-24 px-4'>
            <div className='max-w-7xl mx-auto relative overflow-hidden rounded-[2rem] border border-canvas-line bg-canvas-bg px-8 py-20 text-center shadow-sm'>
                
                {/* Abstract Background Shapes */}
                <div className='absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none'>
                    <div className='absolute -top-[50%] left-[20%] w-[60%] h-[60%] rounded-full bg-primary-bg-subtle blur-[120px] opacity-60' />
                    <div className='absolute top-[40%] right-[10%] w-[40%] h-[40%] rounded-full bg-secondary-bg-subtle blur-[100px] opacity-50' />
                </div>

                <div className='relative z-10 flex flex-col items-center'>
                    <div className='inline-flex items-center justify-center p-2 mb-8 rounded-full bg-canvas-base border border-canvas-line shadow-sm'>
                        <span className='px-3 py-1 text-sm font-medium text-primary-text'>
                            Ready to build?
                        </span>
                    </div>

                    <h2 className='text-4xl md:text-5xl font-bold text-canvas-text-contrast mb-6 tracking-tight max-w-3xl'>
                        Start your next commerce project with the Next.js and Shopify today.
                    </h2>
                    
                    <p className='text-lg md:text-xl text-canvas-text mb-10 max-w-2xl leading-relaxed'>
                        The modern stack for headless Shopify storefronts. Performance, SEO, and design freedom out of the box.
                    </p>
                    
                    <div className='flex flex-col sm:flex-row gap-4 w-full sm:w-auto'>
                        <Link href='/docs' className='w-full sm:w-auto'>
                            <Button 
                                size='lg' 
                                className='w-full sm:w-auto rounded-full px-8 h-12 text-base font-medium bg-primary-solid text-primary-on-primary hover:bg-primary-solid-hover border-none shadow-md hover:shadow-lg transition-all'
                            >
                                Get Started
                            </Button>
                        </Link>
                        <Link href='https://github.com/oye-hunter/nextjs-shopify-commerce-starter' className='w-full sm:w-auto'>
                            <Button 
                                size='lg' 
                                variant='outline' 
                                className='w-full sm:w-auto rounded-full px-8 h-12 text-base font-medium border-canvas-line bg-canvas-base text-canvas-text-contrast hover:bg-canvas-bg-hover'
                            >
                                View Source
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
