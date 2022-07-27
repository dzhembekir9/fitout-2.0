import React from 'react'
import { Button } from '../../../Common'

export const ProductInfo = () => {
  return (
    <div className="pl-9 w-1/3">
      <div className="mb-6">
        <p>Home / Women's Shoes / Everyday Sneakers /</p>
        <h1 className="text-4xl font-bold tracking-wider">
          Women's Tree Runners
        </h1>
        <p>$105</p>
        <div>★ ★ ★ ★ ★ (502)</div>
      </div>
      <div>
        <span>Colors</span>
        <span>Mist (White sole)</span>
        <div>0 0 0 0 0 0 0 0</div>
        <div className="mt-5 mb-4">
          <div className="mb-3">Select size:</div>
          <div className="flex flex-wrap gap-2">
            <div className="py-4 px-6 border inline-flex cursor-pointer hover:bg-grey transition">
              5
            </div>
            <div className="py-4 px-6 border inline-flex cursor-pointer hover:bg-grey transition">
              6
            </div>
            <div className="py-4 px-6 border inline-flex cursor-pointer hover:bg-grey transition">
              7
            </div>
            <div className="py-4 px-6 border inline-flex cursor-pointer hover:bg-grey transition">
              8
            </div>
            <div className="py-4 px-6 border inline-flex cursor-pointer hover:bg-grey transition">
              9
            </div>
            <div className="py-4 px-6 border inline-flex cursor-pointer hover:bg-grey transition">
              10
            </div>
            <div className="py-4 px-6 border inline-flex cursor-pointer hover:bg-grey transition">
              11
            </div>
          </div>
        </div>
        <p className="mb-5 text-sm">
          This style is available in whole sizes only. In between sizes? We
          recommend you size down.See Size Chart
        </p>
        <Button type="secondary" width="100%">
          ADD TO CART - $105
        </Button>
        <span className="block text-center mt-3 text-sm">
          Free shipping on orders over $50. Free returns.
        </span>
      </div>
    </div>
  )
}
