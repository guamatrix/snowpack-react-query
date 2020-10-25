import React, { useCallback, useDebugValue, useState } from 'react'
import { useCharacters } from '../hooks/useCharacters'

const CharacterList = () => {
  const [page, setPage] = useState(1)
  const response = useCharacters(page)
  const onNext = useCallback(() => {
    setPage(page + 1)

  }, [])

  const onNavigate = useCallback((newPage: number) => {
    return () => {
      setPage(newPage)
    }
  }, [])

  console.log('yeah', page)
  if (response.isLoading) {
    return <span>Loading...</span>
  }
  if (response.status === 'success') {
    const { data: { characters: { results, info } } } = response
    return (<div>
      <ul>
        {results.map((info: any) => 
        <li key={info.id}>{info.name}</li>  
        )}
      </ul>
      {info?.prev && (
        <button onClick={onNavigate(info.prev)} >Prev</button>
      )}
      {info?.next &&
        <button onClick={onNavigate(info.next)} >Next</button>
      }
      </div>
    )
  }
  return null
}

export default CharacterList
