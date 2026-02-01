'use client';

import { useState } from 'react';

import { PiCaretDown } from "react-icons/pi";

interface FAQItem {
    id: number;
    question: string;
    answer: string;
}

const faqData: FAQItem[] = [
    {
        id: 1,
        question: 'What is this Shopify + Next.js starter?',
        answer:
            "A production‑ready starter that pairs Shopify's products, carts and checkout with a fully custom Next.js 16 UI. You keep Shopify for commerce while designing your storefront with modern React and Tailwind."
    },
    {
        id: 2,
        question: 'How do I get started?',
        answer:
            'Run `git clone https://github.com/oye-hunter/nextjs-shopify-commerce-starter`, add your Shopify Storefront API credentials, and start the dev server. Design pages, map collections, and deploy to Vercel in minutes.'
    },
    {
        id: 3,
        question: 'What SEO & performance features are built‑in?',
        answer:
            'You get sitemap and robots.txt generation, JSON‑LD schema, dynamic Open Graph images, and canonical tags. Server rendering, route‑level caching, and ISR keep pages fast and fresh.'
    },
    // {
    //     id: 4,
    //     question: 'Can I bring my own content system?',
    //     answer:
    //         'Yes. MDX works out of the box for guides and blogs. You can also integrate a headless CMS later without reworking your storefront logic.'
    // },
    {
        id: 5,
        question: 'Is the design fully customizable?',
        answer:
            'Absolutely. Build with the App Router, React Server Components and Tailwind. Swap themes, extend tokens, and compose pixel‑perfect product and content pages.'
    }
];

interface FAQItemComponentProps {
    item: FAQItem;
    isOpen: boolean;
    onToggle: (id: number) => void;
}

const formatAnswer = (answer: string) => {
    // Handle code snippets
    const codeRegex = /`([^`]+)`/g;
    let formattedAnswer = answer.replace(
        codeRegex,
        '<code class="bg-canvas-bg-active px-2 py-1 rounded text-sm font-mono">$1</code>'
    );

    // Handle line breaks and bullet points (• or -)
    formattedAnswer = formattedAnswer.replace(/\n\n/g, '<br><br>');
    formattedAnswer = formattedAnswer.replace(/\n[•-]/g, (m) => `<br>${m.slice(1)}`);

    return formattedAnswer;
};

function FAQItemComponent({ item, isOpen, onToggle }: FAQItemComponentProps) {
    return (
        <div
            className='border-canvas-line hover:border-canvas-border-hover border-b transition-colors duration-300'
            role='listitem'>
            {/* Question Button */}
            <div
                onClick={() => onToggle(item.id)}
                className='flex w-full items-center justify-between px-6 py-5 text-left transition-colors duration-300 hover:cursor-pointer'
                aria-expanded={isOpen}
                aria-controls={`faq-answer-${item.id}`}
                role='button'
                aria-label={`${item.question} - Click to ${isOpen ? 'collapse' : 'expand'}`}>
                <span className='text-canvas-text-contrast pr-4 text-lg font-semibold select-none'>
                    {item.question}
                </span>
                <div className='flex-shrink-0'>
                    <PiCaretDown
                        className={`text-canvas-text h-5 w-5 transition-transform duration-300 ${
                            isOpen ? 'rotate-180' : 'rotate-0'
                        }`}
                        aria-hidden='true'
                    />
                </div>
            </div>

            {/* Answer Content */}
            <div
                id={`faq-answer-${item.id}`}
                className={`grid transition-all duration-300 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                }`}
                role='region'
                aria-labelledby={`${item.question}`}>
                <div className='overflow-hidden'>
                    <div className='px-6 pb-5'>
                        <div
                            className='text-canvas-text leading-relaxed'
                            dangerouslySetInnerHTML={{ __html: formatAnswer(item.answer) }}
                        />
                        {/* Special handling for the DesignRift link */}
                        {item.id === 5 && (
                            <p className='text-canvas-text mt-2 leading-relaxed'>
                                Visit{' '}
                                <a
                                    href='https://www.designrift.dev/'
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className='text-primary-text-contrast duration-300 hover:underline'>
                                    Designrift
                                </a>{' '}
                                to get started with theme customization.
                            </p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function Faq() {
    const [openItems, setOpenItems] = useState<Set<number>>(new Set());

    const toggleItem = (id: number) => {
        setOpenItems((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            
            return newSet;
        });
    };

    return (
        <section className='py:10 pt-20 w-full px-4 sm:px-6 lg:px-8 xl:py-16' aria-label='Frequently Asked Questions'>
            <div className='mx-auto max-w-4xl'>
                {/* Header */}
                <div className='mb-12 text-center'>
                    <h2 className='text-canvas-text-contrast mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl'>
                        Frequently Asked Questions
                    </h2>
                </div>

                {/* FAQ Items */}
                <div className='space-y-0' role='list'>
                    {faqData.map((item) => (
                        <FAQItemComponent
                            key={item.id}
                            item={item}
                            isOpen={openItems.has(item.id)}
                            onToggle={toggleItem}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
