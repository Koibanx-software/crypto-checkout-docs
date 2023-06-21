import React from 'react';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import ThemedImage from '@theme/ThemedImage';

export default function HeroSection() {
  return (
    <section className="noise-bg no-underline-links px-4 pt-16 lg:py-0">
      <Head>
        <link rel="prefetch" href="/static/landing-page/hero-light.png" />
        <link rel="prefetch" href="/static/landing-page/hero-dark.png" />
      </Head>
      <div className="mx-auto flex max-w-7xl flex-col items-center lg:h-[540px] lg:flex-row">
        <div className="flex-1 text-center lg:text-left">
          <h1 className="mb-6 text-4xl font-bold lg:text-6xl">
            Build with Checkout
          </h1>
          <p className="text-sm text-text-400 lg:max-w-lg lg:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin id risus accumsan urna egestas feugiat quis et tortor. Donec efficitur eleifend enim sed gravida. Fusce mollis ligula nec diam semper facilisis. Maecenas dictum et neque ac suscipit. In efficitur erat id pulvinar malesuada
          </p>
          <div className="mt-8 flex flex-col gap-4 lg:flex-row">
            <Link
              href="#start-building"
              className="rounded-sm bg-primary px-12 py-2.5 text-center font-semibold text-white hover:text-white"
            >
              Start building
            </Link>
            <Link
              href="/getting-started"
              className="rounded-sm border border-solid border-primary bg-primary/10 px-12 py-2.5 text-center font-semibold text-primary hover:text-primary dark:border-primary-100 dark:text-primary-100"
            >
              Getting started
            </Link>
          </div>
        </div>
        <div className="mt-6 flex-1 lg:mt-0 xl:flex-none">
          <ThemedImage
            sources={{
              light: '/static/landing-page/hero-light.png',
              dark: '/static/landing-page/hero-dark.png',
            }}
            alt="Preview of using Dyte SDKs"
            className="max-w-[420px] lg:max-w-[560px]"
          />
        </div>
      </div>
    </section>
  );
}
