import { useQuery } from 'react-query'
import { request, gql } from 'graphql-request'

const endpoint = import.meta.env.SNOWPACK_PUBLIC_API

export const useCharacters = (page: Number) => {
  console.log(page)
  return useQuery(['characters', page], async () => {
    const 
      data
     = await request(
      endpoint,
      gql`
        query characters($page: Int) {
          characters(page: $page) {
            info {
              count
              next
              prev
            }
            results {
              id
              name
              status
              species
              gender
              image
            }
          }
        }
      `,
      { page }
    )
    return data
  })
}
