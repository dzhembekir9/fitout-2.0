import React from 'react'
import { Layout, HomePageHero, OurFavorites } from '../../components'

export const Home = () => {
  return (
    <Layout pageTitle="Fitout">
      <HomePageHero />
      <OurFavorites />
    </Layout>
  )
}
