import React from 'react'
import { Layout, HomePageHero, OurFavorites, Banner } from '../../components'

export const Home = () => {
  return (
    <Layout pageTitle="Fitout">
      <section className="mb-16 lg:mb-32">
        <HomePageHero />
      </section>

      <section className="layout lg:container">
        <OurFavorites />
      </section>

      <section className="layout">
        <Banner
          src="https://i.imgur.com/7J4y54L.png"
          title="The Breeze Is Built In"
          description="Shop flats that feel like a spring day and look good with any outfit."
          buttonLabel="SHOP TREE BREEZERS"
          buttonHref="#"
        />
      </section>

      <section className="layout">
        <Banner
          src="https://i.imgur.com/3mth66Q.png"
          title="Meet The Tree Dasher 2"
          description="Cushier foam. Softer landings. Extra grip."
          buttonLabel="SHOP MEN"
          buttonHref="#"
          secondButtonLabel="SHOP WOMEN"
          secondButtonHref="#"
        />
      </section>

      <section className="layout">
        <Banner
          src="https://i.imgur.com/fQzD2LY.png"
          title="Reversing Climate Change Through Better Business"
          description="Reducing our environmental impact has been a top priority since day one. But now, we’re taking things further. Explore our overall sustainability approach, our progress thus far, and our bold list of commitments for 2025."
          buttonLabel="OUR SUSTAINABLE PRACTICES"
          buttonHref="#"
          breakButtonText
        />
      </section>
    </Layout>
  )
}
