import React from 'react'
import css from './Newsletter.module.css'
import { Button } from '../Common'

export const Newsletter = () => {
  return (
    <div className="lg:container flex flex-col items-center py-16.5 px-10">
      <div className={css.ContentWrapper}>
        <h2 className="text-4xl mb-7.5 font-bold">Want First Dibs?</h2>
        <p className="text-lg mb-7.5">
          Join our email list and be the first to know about new limited edition
          products, material innovations, and lots of other fun updates.
        </p>
      </div>
      <form className="flex flex-col md:flex-row mb-6 w-full md:w-auto">
        <input
          type="text"
          name="email"
          id="email"
          placeholder="Enter Your Email Address"
          className={css.Input}
        />
        <Button type="secondary" className="lg:ml-2">
          SIGN UP
        </Button>
      </form>
      <span className="text-md pb-3 text-center">
        Note: You can opt-out at any time. See our Privacy Policy and Terms.
      </span>
    </div>
  )
}
