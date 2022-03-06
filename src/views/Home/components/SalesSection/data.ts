import { SalesSectionProps } from '.'

export const swapSectionData: SalesSectionProps = {
  headingText: 'Trade ANONSHIB. No registration, no hassle, no worries.',
  bodyText: 'Trade tokens on Binance Smart Chain in seconds, just by connecting your wallet.',
  reverse: false,
  primaryButton: {
    to: '/swap',
    text: 'Trade Now',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/trade/',
    attributes: [
      { src: 'BNB', alt: 'BNB token' },
      { src: 'shib', alt: 'ANON token' },
     // { src: 'CAKE', alt: 'CAKE token' },
    ],
  },
}

export const earnSectionData: SalesSectionProps = {
  headingText: 'Earn passive income with crypto.',
  bodyText: 'ANONSHIB makes it easy to make your crypto work for you.',
  reverse: true,
  primaryButton: {
    to: '/pools',
    text: 'Explore',
    external: false,
  },
  secondaryButton: {
    to: 'https://docs.pancakeswap.finance/products/yield-farming',
    text: 'Learn',
    external: true,
  },
  images: {
    path: '/images/home/earn/',
    attributes: [
      { src: 'pie', alt: 'Pie chart' },
      { src: 'shib', alt: 'SHIB' },
    //  { src: 'folder', alt: 'Folder with cake token' },
    ],
  },
}

export const cakeSectionData: SalesSectionProps = {
  headingText: 'ANONSHIB makes our world go round.',
  bodyText:
    'ANONSHIB token is at the heart of the PancakeSwap ecosystem. Buy it, win it, farm it, spend it, stake it... heck, you can even vote with it!',
  reverse: false,
  primaryButton: {
    to: '/swap?outputCurrency=0x41c1Fb8d73a522D7629EFb5DC8E3092BFEf85FA4',
    text: 'Buy ANONSHIB',
    external: false,
  },
  secondaryButton: {
    to: 'https://anonshib.com',
    text: 'Learn',
    external: true,
  },

  images: {
    path: '/images/home/cake/',
    attributes: [
      { src: 'bottom-right', alt: 'Small 3d pancake' },
      { src: 'top-right', alt: 'Small 3d pancake' },
      { src: 'shib', alt: 'CAKE token' },
     // { src: 'top-left', alt: 'Small 3d pancake' },
    ],
  },
}
