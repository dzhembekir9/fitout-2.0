import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

export default function Products() {
  const router = useRouter()

  useEffect(() => {
    router.push('/')
  }, [])

  return 'LOADING...'
}
