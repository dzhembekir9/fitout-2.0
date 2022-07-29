import React from 'react'
import { Layout } from '../../components'
import { Images, ProductInfo } from './Components'
import { useProductContext } from './Product.context'

export const Product = () => {
  const { name, isLoading } = useProductContext()

  if (!name) return <h1>Error page</h1>

  if (isLoading) return <h1>loading...</h1>

  return (
    <Layout pageTitle={name}>
      <div className="pt-16">
        <div className="container flex">
          <Images />
          <ProductInfo />
        </div>
        <div>html</div>
      </div>
    </Layout>
  )
}
