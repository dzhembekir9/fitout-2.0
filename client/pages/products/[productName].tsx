import React from 'react'
import { useRouter } from 'next/router'
import { useProduct } from '../../hooks'
import { GET_PRODUCT } from '../../operations/queries'
import { Product } from '../../components'
import { ProductContextProvider } from '../../components/Product/Product.context'
import { useProductInfo } from '../../components/Product/Product.context'

function ProductPage() {
  const product = useProductInfo()

  console.log(product)

  // if (isProductLoading || isVariantsLoading) return 'loading...'

  // if (productError) return <h1>Error: {productError.message}</h1>

  return (
    <ProductContextProvider>
      {/* <Product
        product={product?.getProductBySlug}
        variants={variants?.getAllVariants}
        selectVariantById={selectVariantById}
        selectedVariant={selectedVariant}
      /> */}
    </ProductContextProvider>
  )
}

export default ProductPage
