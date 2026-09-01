
// import React, { useEffect, useState } from 'react'
// import CountryCard from './CountryCard'
// import CountriesListShimmer from './CountriesListShimmer'
// export default function CountriesList({query}) {          

// const [countriesData, setCountriesData] = useState([])


// useEffect(() =>{                               
//   const url = 'https://api.restcountries.com/countries/v5?limit=100'
// fetch(url,{
//     headers: {
//     Authorization: "Bearer rc_live_605ebf66a6544395a253e2d4832952c5",
//   },
// })
// .then(response => response.json())
// .then((data) =>{
// setCountriesData(data.data.objects)
// })     
// }, []) 

// // if(countriesData.length === 0) {
// //   return <CountriesListShimmer />
// // }

// if(!countriesData.length) {
//   return <CountriesListShimmer />
// }


//   return (
//     <>
//     <div className="countries-container">{
//    countriesData.filter(country => country.flag?.url_svg && country.capitals?.[0]?.name)
//    .filter((country) => country.names.common.toLowerCase().includes(query))
//    .map((country) =>{
//     return (
//       <CountryCard
//       key={country.names.common}
//       name={country.names.common}
//       flag={country.flag.url_svg}
//       population={country.population.toLocaleString('en-IN')}
//       region={country.region}
//       capital={country.capitals?.[0]?.name}
//       />
//     )
//    })
//   }</div>
 
//   </>
//   )
// } 



// import React, { useEffect, useState } from 'react'
// import CountryCard from './CountryCard'
// import CountriesListShimmer from './CountriesListShimmer'
// export default function CountriesList({query}) {          

// const [countriesData, setCountriesData] = useState([])


// useEffect(() =>{                               
//   const url = 'https://api.restcountries.com/countries/v5?limit=100'
// fetch(url,{
//     headers: {
//     Authorization: "Bearer rc_live_605ebf66a6544395a253e2d4832952c5",
//   },
// })
// .then(response => response.json())
// .then((data) =>{
// setCountriesData(data.data.objects)
// })     
// }, []) 

// // if(countriesData.length === 0) {
// //   return <CountriesListShimmer />
// // }

// if(!countriesData.length) {
//   return <CountriesListShimmer />
// }


//   return (
//     <>
//     <div className="countries-container">{
//    countriesData.filter(country => country.flag?.url_svg && country.capitals?.[0]?.name)
//    .filter((country) => country.names.common.toLowerCase().includes(query))
//    .map((country) =>{
//     return (
//       <CountryCard
//       key={country.names.common}
//       name={country.names.common}
//       flag={country.flag.url_svg}
//       population={country.population.toLocaleString('en-IN')}
//       region={country.region}
//       capital={country.capitals?.[0]?.name}
//       data={country}
//       />
//     )
//    })
//   }</div>
 
//   </>
//   )
// } 



import React, { useEffect, useState } from 'react'
import CountryCard from './CountryCard'
import CountriesListShimmer from './CountriesListShimmer'
export default function CountriesList({query}) {          

const [countriesData, setCountriesData] = useState([])

// console.log(countriesData)
useEffect(() =>{                               
  const url = 'https://api.restcountries.com/countries/v5?limit=100'
fetch(url,{
    headers: {
    Authorization: "Bearer rc_live_605ebf66a6544395a253e2d4832952c5",
  },
})
.then(response => response.json())
.then((data) =>{
setCountriesData(data.data.objects)
})     
}, []) 

// if(countriesData.length === 0) {
//   return <CountriesListShimmer />
// }

if(!countriesData.length) {
  return <CountriesListShimmer />
}


  return (
    <>
    <div className="countries-container">{
   countriesData.filter(country => country.flag?.url_svg && country.capitals?.[0]?.name)
   .filter((country) => country.names.common.toLowerCase().includes(query) || country.region.toLowerCase().includes(query))
   .map((country) =>{
    return (
      <CountryCard
      key={country.names.common}
      name={country.names.common}
      flag={country.flag.url_svg}
      population={country.population.toLocaleString('en-IN')}
      region={country.region}
      capital={country.capitals?.[0]?.name}
      data={country}
      />
    )
   })
  }</div>
 
  </>
  )
} 