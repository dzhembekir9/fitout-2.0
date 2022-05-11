import { NavigationProps } from './Navbar.props'

export const menuData: NavigationProps[] = [
  {
    key: 'men',
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
]
