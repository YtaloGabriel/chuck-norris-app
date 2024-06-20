import React from 'react'

import { IFact, IGetRandomFact } from '@/types/Facts'
import request from 'graphql-request'
import gql from 'graphql-tag'

export const useGetFact = () => {
  const [fact, setFact] = React.useState<IFact>()
  const [loading, setLoading] = React.useState<boolean>(false)
  const [error, setError] = React.useState<string>()

  const getFact = React.useCallback(async () => {
    try {
      setLoading(true)
      setError('')

      const getFactQuery = gql`
        query GetRandomFact {
          getRandomFact {
            id
            icon_url
            url
            value
          }
        }
      `

      const apiData = await request<IGetRandomFact>(
        process.env.NEXT_PUBLIC_API_URL as string,
        getFactQuery
      )

      if (apiData) setFact(apiData.getRandomFact)
    } catch (error: Error | unknown) {
      setError('An error ocurred while fetching the joke.')
    } finally {
      setLoading(false)
    }
  }, [])

  React.useEffect(() => {
    getFact()
  }, [getFact])

  return {
    fact,
    loading,
    error,
    getFact
  }
}
