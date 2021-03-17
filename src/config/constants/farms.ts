import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const farms: FarmConfig[] = [
  {
    // CARROT-BNB
    pid: 0,
    risk: 4,
    lpSymbol: 'CARROT-BNB LP',
    lpAddresses: {
      97: '0x6328bAb82B1425D991181a67826698D54f34d56C',
      56: '0x9FF7679a5F50079Fd526eAe3923de0D980301535',
    },
    tokenSymbol: 'CARROT',
    tokenAddresses: {
      97: '0xE5e9c9ff25E8E756494169aC4E27468aE9cb8780',
      56: '0x1e754907314962Dc6f4256044711FA249332721f',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  // {
  //   // CARROT-BUSD
  //   pid: 1,
  //   risk: 4,
  //   lpSymbol: 'CARROT-BUSD LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x05E09FB8Bb834e455652BF76b5029bF800BAc31C',
  //   },
  //   tokenSymbol: 'CARROT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xFe9751eB2daDA3E3B707694D1db098F4f2864615',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   // CARROT-CAKE
  //   pid: 2,
  //   risk: 5,
  //   lpSymbol: 'CARROT-CAKE LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xEac3EEE407Ee2603369D6D6DC8C029Dba04C49e2',
  //   },
  //   tokenSymbol: 'CARROT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xFe9751eB2daDA3E3B707694D1db098F4f2864615',
  //   },
  //   quoteTokenSymbol: QuoteToken.CAKE,
  //   quoteTokenAdresses: contracts.cake,
  // },
  // {
  //   // CARROT-EGG
  //   pid: 3,
  //   risk: 5,
  //   lpSymbol: 'CARROT-EGG LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x1f8a6aF23A598002E5F888742B4Ac076cc5bD233',
  //   },
  //   tokenSymbol: 'CARROT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xFe9751eB2daDA3E3B707694D1db098F4f2864615',
  //   },
  //   quoteTokenSymbol: QuoteToken.EGG,
  //   quoteTokenAdresses: contracts.egg,
  // },
  // {
  //   // CARROT-BANANA
  //   pid: 4,
  //   risk: 5,
  //   lpSymbol: 'CARROT-BANANA LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x0a2b08151a3f3844b3c41d3ebcb8d8fcd82d3b2e',
  //   },
  //   tokenSymbol: 'CARROT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xFe9751eB2daDA3E3B707694D1db098F4f2864615',
  //   },
  //   quoteTokenSymbol: QuoteToken.BANANA,
  //   quoteTokenAdresses: contracts.banana,
  // },
  {
    // BNB-BUSD
    pid: 5,
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '0x7918e3f649c4ffe9c32798e85bf035894a10736c',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f',
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '0x2b8ff854c5e16cf35b9a792390cc3a2a60ec9ba2',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  // {
  //   pid: 6,
  //   risk: 2,
  //   lpSymbol: 'BTCB-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x7561eee90e24f3b348e1087a005f78b4c8453524',
  //   },
  //   tokenSymbol: 'BTC',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x7130d2a12b9bcbfae4f2634d864a1ee1ce3ead9c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 7,
  //   risk: 2,
  //   lpSymbol: 'CAKE-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xa527a61703d82139f8a06bc30097cc9caa2df5a6',
  //   },
  //   tokenSymbol: 'CAKE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 8,
  //   risk: 3,
  //   lpSymbol: 'EGG-BNB LP',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xd1b59d11316e87c3a0a069e80f590ba35cd8d8d3',
  //   },
  //   tokenSymbol: 'EGG',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
  //   },
  //   quoteTokenSymbol: QuoteToken.BNB,
  //   quoteTokenAdresses: contracts.wbnb,
  // },
  // {
  //   pid: 9,
  //   risk: 3,
  //   isTokenOnly: true,
  //   lpSymbol: 'CARROT',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x11c0e7dd8f1ede7b69cf8f5cc07b5a8d2a7fcf03',
  //   },
  //   tokenSymbol: 'CARROT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x0c34C1Ab7b0D7A6e47500e579102E8840bf334B4',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 10,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'WBNB',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD LP
  //   },
  //   tokenSymbol: 'WBNB',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 11,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'BUSD',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x11c0e7dd8f1ede7b69cf8f5cc07b5a8d2a7fcf03', // VIRUS-BUSD LP (BUSD-BUSD will ignore)
  //   },
  //   tokenSymbol: 'BUSD',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 12,
  //   risk: 2,
  //   isTokenOnly: true,
  //   lpSymbol: 'ETH',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xd9a0d1f5e02de2403f68bb71a15f8847a854b494', // ETH-BUSD LP
  //   },
  //   tokenSymbol: 'ETH',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 13,
  //   risk: 1,
  //   isTokenOnly: true,
  //   lpSymbol: 'USDT',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd', // USDT-BUSD LP
  //   },
  //   tokenSymbol: 'USDT',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x55d398326f99059ff775485246999027b3197955',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 14,
  //   risk: 5,
  //   isTokenOnly: true,
  //   lpSymbol: 'CAKE',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x0Ed8E0A2D99643e1e65CCA22Ed4424090B8B7458', // CAKE-BUSD LP
  //   },
  //   tokenSymbol: 'CAKE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 15,
  //   risk: 5,
  //   isTokenOnly: true,
  //   lpSymbol: 'BAKE',
  //   lpAddresses: {
  //     97: '',
  //     56: '0xE2D1B285d83efb935134F644d00FB7c943e84B5B', // BAKE-BUSD LP
  //   },
  //   tokenSymbol: 'BAKE',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xE02dF9e3e622DeBdD69fb838bB799E3F168902c5',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
  // {
  //   pid: 16,
  //   risk: 5,
  //   isTokenOnly: true,
  //   lpSymbol: 'EGG',
  //   lpAddresses: {
  //     97: '',
  //     56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // EGG-BUSD LP
  //   },
  //   tokenSymbol: 'EGG',
  //   tokenAddresses: {
  //     97: '',
  //     56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
  //   },
  //   quoteTokenSymbol: QuoteToken.BUSD,
  //   quoteTokenAdresses: contracts.busd,
  // },
]

export default farms
