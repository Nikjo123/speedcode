'use client';

import React from 'react';
import { CheckIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames';

const ThirdSection = () => {
  const features = [
    'Coding Practice',
    'Multiple Languages',
    '1v1 Live Battle',
    'Global Leaderboard',
  ];

  const tiers = [
    {
      name: 'Hobby',
      id: 'tier-hobby',
      href: '#',
      priceMonthly: '$0',
      description:
        "The perfect plan if you're just getting started with our product.",
      features: [
        'Lifetime free',
        'Undisturbed coding practice',
        'One language',
        'Account progress tracking',
      ],
      featured: false,
    },
    {
      name: 'Pro',
      id: 'tier-enterprise',
      href: '/getpro',
      priceMonthly: '$5',
      description:
        'The best plan if you want to use the full potential of our product.',
      features: [
        'Unlimited coding practice',
        'Multiple languages',
        '1 v 1 coding battle',
        'Global leaderboard ranking',
        'Lifetime pro user',
        'Free upgrade to pro on our other products.',
      ],
      featured: true,
    },
  ];

  return (
    <section className="panel font-sans min-h-screen mb-[20vh] w-full flex justify-center items-center p-4 sm:p-6 md:p-8 bg-#black">
      <div className="relative isolate bg-black px-6 py-24 sm:py-32 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-3 -z-10 transform-gpu overflow-hidden px-36 blur-3xl"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="mx-auto aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#71c569] to-[#229e36] opacity-30"
          />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          {/* <h2 className="text-base/7 font-semibold text-[#29b960]">Pricing</h2> */}
          <p className="block-appear mt-2 text-balance text-5xl font-semibold tracking-tight text-white sm:text-6xl">
            Choose the right plan for you
          </p>
        </div>
        <p className="block-slide-in-left mx-auto mt-6 max-w-2xl text-pretty text-center text-lg font-medium text-gray-300 sm:text-xl/8">
          Choose an affordable plan that you think is more valuable and worthy
          to you. The differences are shown here.
        </p>
        <div className="block-slide-in-right mx-auto mt-16 grid max-w-lg grid-cols-1 items-center gap-y-6 sm:mt-20 sm:gap-y-0 lg:max-w-4xl lg:grid-cols-2">
          {tiers.map((tier, tierIdx) => (
            <div
              key={tier.id}
              className={classNames(
                tier.featured
                  ? 'relative bg-[#1a1a1a] shadow-2xl'
                  : 'bg-[#000000] sm:mx-8 lg:mx-0',
                tier.featured
                  ? ''
                  : tierIdx === 0
                  ? 'rounded-t-3xl sm:rounded-b-none lg:rounded-bl-3xl lg:rounded-tr-none'
                  : 'sm:rounded-t-none lg:rounded-bl-none lg:rounded-tr-3xl',
                'rounded-3xl p-8 sm:p-10'
              )}
            >
              <h3
                id={tier.id}
                className={classNames(
                  tier.featured ? 'text-[#29b960]' : 'text-[#29b960]',
                  'text-base/7 font-semibold'
                )}
              >
                {tier.name}
              </h3>
              <p className="mt-4 flex items-baseline gap-x-2">
                <span
                  className={classNames(
                    tier.featured ? 'text-white' : 'text-gray-100',
                    'text-5xl font-semibold tracking-tight'
                  )}
                >
                  {tier.priceMonthly}
                </span>
                <span
                  className={classNames(
                    tier.featured ? 'text-gray-400' : 'text-gray-500',
                    'text-base'
                  )}
                >
                  /month
                </span>
              </p>
              <p
                className={classNames(
                  tier.featured ? 'text-gray-400' : 'text-gray-400',
                  'mt-6 text-base/7'
                )}
              >
                {tier.description}
              </p>
              <ul
                role="list"
                className={classNames(
                  tier.featured ? 'text-gray-400' : 'text-gray-400',
                  'mt-8 space-y-3 text-sm/6 sm:mt-10'
                )}
              >
                {tier.features.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      aria-hidden="true"
                      className={classNames(
                        tier.featured ? 'text-[#29b960]' : 'text-[#29b960]',
                        'h-6 w-5 flex-none'
                      )}
                    />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={tier.href}
                aria-describedby={tier.id}
                className={classNames(
                  tier.featured
                    ? 'bg-[#29b960] text-white shadow-sm hover:bg-green-500 focus-visible:outline-[#29b960]'
                    : 'text-[#29b960] ring-1 ring-inset ring-[#29b960] hover:ring-green-300 focus-visible:outline-[#29b960]',
                  'mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:mt-10'
                )}
              >
                I prefer this.
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
