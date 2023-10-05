import React from 'react'
import RandomQuote from '../modules/RandomQuote'
import FormRandomQuote from '../modules/FormRandomQuote'

export default function TemplateRandomQuote() {
  return (
    <div className='grid place-items-center p-32'>
      <RandomQuote />
      <FormRandomQuote />
    </div>
  )
}
