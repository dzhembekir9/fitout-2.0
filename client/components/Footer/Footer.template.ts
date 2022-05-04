type FooterProps = {
  firstRow: {
    title: string
    content: { label: string; url?: string }[]
  }[]
  secondRow: {
    social: {
      title: string
      text: string
    }
    singleImage: {
      url: string
      alt: string
      width: number
      height: number
    }
  }
  thirdRow: {
    text: string
  }
}

export const footerData: FooterProps = {
  firstRow: [
    {
      title: 'HELP',
      content: [
        { label: '1-888-963-8944', url: '#' },
        { label: '1-814-251-9966 (Text)', url: '#' },
        { label: 'help@fitout.com', url: '#' },
        { label: 'Returns/Exchanges', url: '#' },
        { label: 'FAQ/Contact Us', url: '#' },
        { label: 'Afterpay', url: '#' },
      ],
    },
    {
      title: 'SHOP',
      content: [
        { label: "Men's Shoes", url: '#' },
        { label: "Women's Shoes", url: '#' },
        { label: "Men's Apparel", url: '#' },
        { label: "Women's Apparel", url: '#' },
        { label: 'Socks', url: '#' },
        { label: 'Gift Cards', url: '#' },
        { label: 'Refer a Friend', url: '#' },
        { label: 'Download the Fitout App' },
      ],
    },
    {
      title: 'COMPANY',
      content: [
        { label: 'Our Stores', url: '#' },
        { label: 'Our Story', url: '#' },
        { label: 'Our Materials', url: '#' },
        { label: 'Sustainability', url: '#' },
        { label: 'Investors', url: '#' },
        { label: 'Partnerships', url: '#' },
        { label: 'Product Testing', url: '#' },
        { label: 'Affiliates', url: '#' },
        { label: 'Bulk Orders', url: '#' },
        { label: 'Careers', url: '#' },
        { label: 'Press', url: '#' },
        { label: 'California Transparency Act', url: '#' },
      ],
    },
  ],
  secondRow: {
    social: {
      title: 'FOLLOW THE FLOCK',
      text: 'Exclusive offers, a heads up on new things, and sightings of Fitout in the wild. Oh, we have cute sheep, too. #wearefitout',
    },
    singleImage: {
      url: 'https://i.imgur.com/Y8y03BY.png',
      alt: 'Certified Corporation',
      width: 78,
      height: 120,
    },
  },
  thirdRow: {
    text: '© 2022 Fitout, Inc. All Rights Reserved. Terms, Privacy & Accessibility',
  },
}
