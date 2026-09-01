import React from 'react'

export default function SearchBar({setQuery}) {    //Passes setQuery as prop//or here we destructure it //setQuery(e.target.value)  ← Updates state in App // App re-renders with new query
  return (
     <div className="search-container">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input onChange={(e) => setQuery(e.target.value.toLowerCase())} type="text" placeholder="Search for a country..."/>
        </div>
  )
}
