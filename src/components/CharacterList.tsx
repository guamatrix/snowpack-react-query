import React,  { useCallback, useState } from 'react'
import { useCharacters } from '../hooks/useCharacters'
import Character from './Character'
import './CharacterList.module.css'

const CharacterList = () => {
  const [page, setPage] = useState(1)
  const response = useCharacters(page)

  const onNavigate = useCallback((newPage: number) => {
    return () => {
      setPage(newPage)
    }
  }, [])

  if (response.isLoading) {
    return <span>Loading...</span>
  }
  if (response.status === 'success') {
    const { data: { characters: { results, info } } } = response
    return (<div>
      <ul>
        {results.map((info: any) => 
        <li key={info.id}>
          <Character {...info} />
        </li>  
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
