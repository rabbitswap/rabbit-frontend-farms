import { MenuEntry } from '@rabbitswap/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href:
          'https://exchange.pancakeswap.finance/#/swap?outputCurrency=0xbc1285cb5ea607a4f305b6ec20e02734d8b0bc3c48cf6e366d636f6e3e5ae659',
      },
      {
        label: 'Liquidity',
        href:
          'https://exchange.pancakeswap.finance/#/add/0xbb4CdB9CBd36B01bD1cBaEBF2De08d9173bc095c/0xbc1285cb5ea607a4f305b6ec20e02734d8b0bc3c48cf6e366d636f6e3e5ae659',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Clusters',
    icon: 'PoolIcon',
    href: '/clusters',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  // {
  //   label: 'Info',
  //   icon: 'InfoIcon',
  //   items: [
  //     {
  //       label: 'PancakeSwap',
  //       href: 'https://pancakeswap.info/token/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
  //     },
  //     {
  //       label: 'CoinGecko',
  //       href: 'https://www.coingecko.com/en/coins/corona.finance',
  //     },
  //     {
  //       label: 'CoinMarketCap',
  //       href: 'https://coinmarketcap.com/currencies/corona.finance/',
  //     },
  //     {
  //       label: 'AstroTools',
  //       href: 'https://app.astrotools.io/pancake-pair-explorer/0x19e7cbecdd23a16dfa5573df54d98f7caae03019',
  //     },
  //   ],
  // },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Github',
        href: 'https://github.com/coronadefi',
      },
      {
        label: 'Blog',
        href: 'https://coronadefi.medium.com',
      },
    ],
  },
]

export default config
