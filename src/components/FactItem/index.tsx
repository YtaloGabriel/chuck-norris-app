'use client'

import React from 'react'

import Image from 'next/image'

import { Button } from '../utils/Button'
import { LoadingSpinner } from '../utils/Loading'

import { useGetFact } from './hooks/useGetFacts'

export const FactItem = () => {
  const { fact, getFact, loading, error } = useGetFact()

  if (!fact) return null
  if (error) return <p>{error}</p>

  return (
    <section
      className="flex flex-col items-center justify-center min-h-[25rem] w-screen max-w-[40rem] p-6 rounded-lg border-2 border-neutral-200 shadow-sm gap-6"
      id="factItem"
    >
      <Image
        src="https://api.chucknorris.io/img/avatar/chuck-norris.png"
        alt="Chuck Norris Icon"
        width={75}
        height={75}
        id="chuckNorrisIcon"
      />

      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="flex flex-nowrap gap-2">
            <span className="text-8xl text-neutral-400">{'"'}</span>
            <h1 className="text-3xl italic text-neutral-700 text-center">
              {fact.value}
            </h1>
          </div>

          <h3 className="text-base text-blue-400">
            - Written by someone who only tells the truth
          </h3>
        </>
      )}

      <Button title="Random Fact" onClick={getFact} />
    </section>
  )
}
