import React from 'react';
import ThemedImage from '@theme/ThemedImage';
import clsx from 'clsx';


export default function HomeFooter({ className }) {
  return (
    <footer className="bg-secondary-900">
      <div
        className={clsx(
          'mx-auto flex max-w-7xl flex-col gap-4 px-10 py-8 lg:flex-row lg:items-center lg:gap-8',
          className
        )}
      >
        <div>
          <ThemedImage
            sources={{ light: '/logo/koibanx.svg', dark: '/logo/koibanx.svg' }}
            alt="Logo"
            className="h-10"
          />
        </div>
        <div className="flex-1 text-zinc-400 lg:text-right">
          Copyright &copy; Koibanx since 2020. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
