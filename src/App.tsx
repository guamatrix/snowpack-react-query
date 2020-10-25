import React, { useEffect } from 'react'
import style from './App.module.css'
import { QueryCache, ReactQueryCacheProvider } from 'react-query'
import CharacterList from './components/CharacterList'

interface App {}

const queryCache = new QueryCache()

const App = (props: App) => {
  return (
    <ReactQueryCacheProvider queryCache={queryCache}>
      <div>
        <h1 className={style.title}>Welcome to React with Snowpack - Rick and Morty</h1>
        <CharacterList />
      </div>
    </ReactQueryCacheProvider>
  )
}

export default App
