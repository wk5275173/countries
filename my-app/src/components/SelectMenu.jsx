

// export default function SelectMenu() {
//   return (
//     <select className="filter-by-region">
//           <option hidden>Filter by Region</option>
//           <option value="Africa">Africa</option>
//           <option value="America">America</option>
//           <option value="Asia">Asia</option>
//           <option value="Europe">Europe</option>
//           <option value="Oceania">Oceania</option>
//         </select>
//   )
// }


export default function SelectMenu({setQuery}) {   //Receives setQuery as a prop//or here we destructure it //setQuery(e.target.value)  ← Updates state in App // App re-renders with new query
  return (
    <select className="filter-by-region" onChange={(e) => setQuery(e.target.value.toLowerCase())}>
          <option hidden>Filter by Region</option>
          <option value="Africa">Africa</option>
          <option value="Americas">Americas</option>
          <option value="Asia">Asia</option>
          <option value="Europe">Europe</option>
          <option value="Oceania">Oceania</option>
        </select>
  )
}