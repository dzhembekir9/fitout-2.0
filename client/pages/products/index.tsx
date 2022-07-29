import React, { useEffect } from 'react'
import { NextPage } from 'next'
import { useRouter } from 'next/router'

const Products: NextPage = () => {
  const router = useRouter()

  useEffect(() => {
    router.push('/')
  }, [])

  return <h1>LOADING...</h1>
}

export default Products
