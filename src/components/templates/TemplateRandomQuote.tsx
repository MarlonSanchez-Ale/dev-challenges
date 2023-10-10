import { useEffect, useState } from 'react'
import RandomQuote from '../modules/RandomQuote'
import FormRandomQuote from '../modules/FormRandomQuote'
import { QuoteRandom } from '../../interfaces/QuoteRandom'


export default function TemplateRandomQuote() {

  const [quote, setQuote] = useState<QuoteRandom>()
  const [error, setError] = useState<string>('')


  const handleRandomQuote = () => {
    fetch('https://api.quotable.io/random')
      .then(response => response.json())
      .then(data => {
        setQuote(data)
      })
      .catch(error => {
        setError(error)
      })
  }

  useEffect(() => {
    handleRandomQuote()
  }, [])

  return (
    <div className='grid place-items-center p-32'>
      <RandomQuote quote={quote} error={error} />
      <FormRandomQuote handleQuoteRandom={handleRandomQuote} content={quote?.content} author={quote?.author} />
    </div>
  )
}
