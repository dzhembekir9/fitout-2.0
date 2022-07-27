import {
  NavigationProps,
  DesktopNavigationProps,
  MobileNavigationProps,
} from './Navbar.props'

export const desktopMenus: DesktopNavigationProps[] = [
  {
    title: 'MEN',
    isLeft: true,
  },
  {
    title: 'WOMEN',
    isLeft: true,
  },
  {
    title: 'NEW ARRIVALS',
    isLeft: true,
  },
  {
    title: 'SUSTAINABILITY',
  },
  {
    title: 'RERUN',
  },
  {
    title: 'STORES',
  },
]

export const mobileMenus: MobileNavigationProps[] = [
  {
    title: 'MEN',
  },
  {
    title: 'WOMEN',
  },
  {
    title: 'NEW ARRIVALS',
  },
  {
    title: 'SUSTAINABILITY',
  },
  {
    title: 'RERUN',
    href: '#',
  },
  {
    title: 'STORES',
    href: '#',
  },
  {
    title: 'Account',
    href: '#',
    nonBold: true,
  },
  {
    title: 'Help',
    href: '#',
    nonBold: true,
  },
]

export const menuData: NavigationProps[] = [
  {
    menuKey: 'men',
    title: 'MEN',
    menus: [
      {
        title: 'SHOES',
        menuKey: 'shoes',
        href: '#',
        submenus: [
          {
            label: 'Everyday Sneakers',
            href: '#',
          },
          {
            label: 'Running Shoes',
            href: '#',
          },
          {
            label: 'Sandals',
            href: '#',
          },
          {
            label: 'Slip-Ons',
            href: '#',
          },
          {
            label: 'Water-Repellent Sneakers',
            href: '#',
          },
          {
            label: 'Hiking Shoes',
            href: '#',
          },
          {
            label: 'High Tops',
            href: '#',
          },
          {
            label: 'Slippers',
            href: '#',
          },
        ],
      },
      {
        title: 'APPAREL',
        href: '#',
        submenus: [
          {
            label: 'Activewear',
            href: '#',
          },
          {
            label: 'Sweatshirts & Sweatpants',
            href: '#',
          },
          {
            label: 'Tees & Tops',
            href: '#',
          },
          {
            label: 'Bottoms',
            href: '#',
          },
          {
            label: 'Underwear',
            href: '#',
          },
          {
            label: 'Socks',
            href: '#',
          },
        ],
      },
      {
        title: 'ACCESSORIES',
        submenus: [
          {
            label: 'Hats',
            href: '#',
          },
          {
            label: 'Face Masks',
            href: '#',
          },
          {
            label: 'Lace Kits',
            href: '#',
          },
          {
            label: 'Insoles',
            href: '#',
          },
          {
            label: 'Gift Cards',
            href: '#',
          },
        ],
      },
      {
        title: 'FEATURED',
        isFeatured: true,
        submenus: [
          {
            image: {
              label: 'THE SUGAR SERIES',
              src: 'https://i.imgur.com/rMvvqQM.png',
              href: '#',
              width: 422,
              height: 121,
            },
          },
          {
            image: {
              label: 'LIMITED EDITION TRAIL RUNNER',
              src: 'https://i.imgur.com/MPksMYI.png',
              href: '#',
              width: 422,
              height: 121,
            },
          },
        ],
      },
    ],
  },
  {
    menuKey: 'women',
    title: 'WOMEN',
    menus: [
      {
        title: 'SHOES',
        href: '#',
        submenus: [
          {
            label: 'Everyday Sneakers',
            href: '#',
          },
          {
            label: 'Running Shoes',
            href: '#',
          },
          {
            label: 'Sandals',
            href: '#',
          },
          {
            label: 'Flats',
            href: '#',
          },
          {
            label: 'Slip-Ons',
            href: '#',
          },
          {
            label: 'Water-Repellent Sneakers',
            href: '#',
          },
          {
            label: 'Hiking Shoes',
            href: '#',
          },
          {
            label: 'High Tops',
            href: '#',
          },
          {
            label: 'Slippers',
            href: '#',
          },
        ],
      },
      {
        title: 'APPAREL',
        href: '#',
        submenus: [
          {
            label: 'Activewear',
            href: '#',
          },
          {
            label: 'Sweatshirts & Sweatpants',
            href: '#',
          },
          {
            label: 'Tees & Tops',
            href: '#',
          },
          {
            label: 'Bottoms',
            href: '#',
          },
          {
            label: 'Leggings',
            href: '#',
          },
          {
            label: 'Underwear',
            href: '#',
          },
          {
            label: 'Socks',
            href: '#',
          },
        ],
      },
      {
        title: 'ACCESSORIES',
        submenus: [
          {
            label: 'Hats',
            href: '#',
          },
          {
            label: 'Face Masks',
            href: '#',
          },
          {
            label: 'Lace Kits',
            href: '#',
          },
          {
            label: 'Insoles',
            href: '#',
          },
          {
            label: 'Gift Cards',
            href: '#',
          },
        ],
      },
      {
        title: 'FEATURED',
        isFeatured: true,
        submenus: [
          {
            image: {
              label: 'THE SUGAR SERIES',
              src: 'https://i.imgur.com/rMvvqQM.png',
              href: '#',
              width: 422,
              height: 121,
            },
          },
          {
            image: {
              label: 'LIMITED EDITION TRAIL RUNNER',
              src: 'https://i.imgur.com/MPksMYI.png',
              href: '#',
              width: 422,
              height: 121,
            },
          },
        ],
      },
    ],
  },
  {
    menuKey: 'new-arrivals',
    title: 'NEW ARRIVALS',
    menus: [
      {
        title: 'BEST FOR',
        href: '#',
        submenus: [
          {
            label: 'Running',
            href: '#',
          },
          {
            label: 'Warm Weather',
            href: '#',
          },
          {
            label: 'Adventure',
            href: '#',
          },
          {
            label: 'Traveling',
            href: '#',
          },
          {
            label: 'Relaxing',
            href: '#',
          },
          {
            label: 'Rainy Days',
            href: '#',
          },
          {
            label: 'Cold Weather',
            href: '#',
          },
        ],
      },
      {
        title: 'FEATURED',
        isFeatured: true,
        submenus: [
          {
            image: {
              label: "MEN'S NEW ARRIVALS",
              src: 'https://i.imgur.com/wTwYkRg.png',
              href: '#',
              width: 422,
              height: 121,
            },
          },
          {
            image: {
              label: "WOMEN'S NEW ARRIVALS",
              src: 'https://i.imgur.com/aWU0Ndu.png',
              href: '#',
              width: 422,
              height: 121,
            },
          },
        ],
      },
    ],
  },
  {
    menuKey: 'sustainability',
    title: 'SUSTAINABILITY',
  },
  {
    title: 'RERUN',
    href: '#',
  },
  {
    title: 'STORES',
    href: '#',
  },
  {
    title: 'Account',
    href: '#',
    onlyOnMobile: true,
    nonBoldText: true,
  },
  {
    title: 'Help',
    href: '#',
    onlyOnMobile: true,
    nonBoldText: true,
  },
]
