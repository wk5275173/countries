
// import React, { useEffect, useState } from 'react'
// import { Link, useLocation } from 'react-router-dom';

// import './CountryDetail.css'
// import { useNavigate, useParams } from 'react-router-dom'


// export default function CountryDetail() {
//   const params = useParams()
//   const location = useLocation()
//   // console.log(location)
//   console.log(location.state)
//   const countryName = params.country
  
  

//   const [countryData, setCountryData] = useState(null)
//   const [notFound, setNotFound] = useState(false)
//   const navigate = useNavigate() 
//   useEffect(() =>{
//   console.log('hi')
//   const url = `https://api.restcountries.com/countries/v5/names.common/${countryName}?pretty=1&api-key=rc_live_605ebf66a6544395a253e2d4832952c5`
//     fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//     console.log(data.data.objects[0])
//     setCountryData({
//       name: data.data.objects[0].names.common,
//       nativeName: Object.values(data.data.objects[0].names.native)[0].common,
//       population: data.data.objects[0].population,
//       region: data.data.objects[0].region,
//       subRegion: data.data.objects[0].subregion,
//       capital: Object.values(data.data.objects[0].capitals)[0].name,
//       flag: data.data.objects[0].flag.url_svg,
//       tld: data.data.objects[0].tlds,
//       currency: Object.values(data.data.objects[0].currencies)[0].name,
//       language: Object.values(data.data.objects[0].languages)[0].name,
//       // borders:['germany']
//       borders: []
//     })
//     // console.log(data.data.objects[0].borders)
//     data.data.objects[0].borders.map((border) => {
//       fetch(`https://api.restcountries.com/countries/v5/codes.alpha_3/${border}?pretty=1&api-key=rc_live_605ebf66a6544395a253e2d4832952c5`)
//       .then((res) => res.json())
//       .then((borderData) => {
//         // console.log(borderData.data.objects[0].names.common)
//         setCountryData((prevState) => ({...prevState, borders: [...prevState.borders, borderData.data.objects[0].names.common]}))
//       })
//     })
//   }).catch((err) =>{
//    setNotFound(true)
//   })
//   // }, [])
//  }, [countryName])
//   if(notFound) {
//     return <div>Country Not Found</div>
//   }
//   return (
//   countryData === null? 'loading......' : (
//     <main>
//       <div className="country-details-container">
//           <span className="Back-button" onClick={() => navigate(-1)}>
//          ← Back</span>
//         <div className="country-details">
//         <img src={countryData.flag} alt={`${countryData.name} flag`}/>
//           <div className="details-text-container">
//             <h1>{countryData.name}</h1>
//           <div className="details-text">
//             <p><b>Native Name: {countryData.nativeName}</b><span className="native-name"></span></p>
//             <p><b>Population: {countryData.population.toLocaleString('en-IN')}</b><span className="population"></span></p>
//             <p><b>Region: {countryData.region}</b><span className="region"></span></p>
//             <p><b>Sub-Region: {countryData.subRegion}</b><span className="sub-region"></span></p>
//             <p><b>Capital: {countryData.capital}</b><span className="capital"></span></p>
//             <p><b>Top Level Domain: {countryData.tld}</b><span className="top-level-domain"></span></p> 
//             <p><b>Currencies: {countryData.currency}</b><span className="currencies"></span></p>
//             <p><b>Languages: {countryData.language}</b><span className="languages"></span></p>
//            </div>
//             {countryData.borders.length !== 0 && <div className="border-countries">
//            <b>Border Countries: &nbsp;</b>
//             {
//               countryData.borders.map((border) => <Link key={border} to={`/${border}`}>{border}</Link>)
//             }
//             </div>}
//           </div>
//          </div>
//       </div>
//     </main>
//    )
//   )
// }                                                    







// import React, { useEffect, useState } from 'react'
// import { Link, useLocation } from 'react-router-dom';

// import './CountryDetail.css'
// import { useNavigate, useParams } from 'react-router-dom'


// export default function CountryDetail() {
//   const params = useParams()
//   const location = useLocation()
//   // console.log(location)
//   console.log(location.state)
//   const countryName = params.country
  
  

//   const [countryData, setCountryData] = useState(null)
//   const [notFound, setNotFound] = useState(false)
//   const navigate = useNavigate() 
//   function updateCountryData(data) {
//     setCountryData({
//       name: data.data.objects[0].names.common,
//       nativeName: Object.values(data.data.objects[0].names.native)[0].common,
//       population: data.data.objects[0].population,
//       region: data.data.objects[0].region,
//       subRegion: data.data.objects[0].subregion,
//       capital: Object.values(data.data.objects[0].capitals)[0].name,
//       flag: data.data.objects[0].flag.url_svg,
//       tld: data.data.objects[0].tlds,
//       currency: Object.values(data.data.objects[0].currencies)[0].name,
//       language: Object.values(data.data.objects[0].languages)[0].name,
//       // borders:['germany']
//       borders: []
//     })
//     if(!data.data.objects[0].borders) {
//      data.data.objects[0] = []
//     }
//     data.data.objects[0].borders.map((border) => {
//       fetch(`https://api.restcountries.com/countries/v5/codes.alpha_3/${border}?pretty=1&api-key=rc_live_605ebf66a6544395a253e2d4832952c5`)
//       .then((res) => res.json())
//       .then((borderData) => {
//         // console.log(borderData.data.objects[0].names.common)
//         setCountryData((prevState) => ({...prevState, borders: [...prevState.borders, borderData.data.objects[0].names.common]}))
//       })
//     })
//   }
//   useEffect(() =>{
  
//   // if(location.state) {
//   // updateCountryData(location.state)
//   // return
//   // }

//   const url = `https://api.restcountries.com/countries/v5/names.common/${countryName}?pretty=1&api-key=rc_live_605ebf66a6544395a253e2d4832952c5`
//     fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//    // console.log(data.data.objects[0])
//   updateCountryData(data)
//   }).catch((err) =>{
//    setNotFound(true)
//   })
//   // }, [])
//  }, [countryName])
//   if(notFound) {
//     return <div>Country Not Found</div>
//   }
//   return (
//   countryData === null? 'loading......' : (
//     <main>
//       <div className="country-details-container">
//           <span className="Back-button" onClick={() => navigate(-1)}>
//          ← Back</span>
//         <div className="country-details">
//         <img src={countryData.flag} alt={`${countryData.name} flag`}/>
//           <div className="details-text-container">
//             <h1>{countryData.name}</h1>
//           <div className="details-text">
//             <p><b>Native Name: {countryData.nativeName}</b><span className="native-name"></span></p>
//             <p><b>Population: {countryData.population.toLocaleString('en-IN')}</b><span className="population"></span></p>
//             <p><b>Region: {countryData.region}</b><span className="region"></span></p>
//             <p><b>Sub-Region: {countryData.subRegion}</b><span className="sub-region"></span></p>
//             <p><b>Capital: {countryData.capital}</b><span className="capital"></span></p>
//             <p><b>Top Level Domain: {countryData.tld}</b><span className="top-level-domain"></span></p> 
//             <p><b>Currencies: {countryData.currency}</b><span className="currencies"></span></p>
//             <p><b>Languages: {countryData.language}</b><span className="languages"></span></p>
//            </div>
//             {countryData.borders.length !== 0 && <div className="border-countries">
//            <b>Border Countries: &nbsp;</b>
//             {
//               countryData.borders.map((border) => <Link key={border} to={`/${border}`}>{border}</Link>)
//             }
//             </div>}
//           </div>
//          </div>
//       </div>
//     </main>
//    )
//   )
// }    



// import React, { useEffect, useState, useContext } from 'react'
// import { Link, useLocation } from 'react-router-dom';

// import './CountryDetail.css'
// import { useNavigate, useParams } from 'react-router-dom'
// import { ThemeContext } from '../contexts/ThemeContext';


// export default function CountryDetail() {             //The CountryDetail component only displays content and doesn't need to change the theme, so it only needs isDark. //Display dark/light mode icon // It only reads the value, never changes it
//   const [isDark] = useContext(ThemeContext)  
//   const params = useParams()
//   const location = useLocation()
//   // console.log(location)
//   console.log(location.state)
//   const countryName = params.country
  
  

//   const [countryData, setCountryData] = useState(null)
//   const [notFound, setNotFound] = useState(false)
//   const navigate = useNavigate() 
//   function updateCountryData(data) {
//     setCountryData({
//       name: data.data.objects[0].names.common,
//       nativeName: Object.values(data.data.objects[0].names.native)[0].common,
//       population: data.data.objects[0].population,
//       region: data.data.objects[0].region,
//       subRegion: data.data.objects[0].subregion,
//       capital: Object.values(data.data.objects[0].capitals)[0].name,
//       flag: data.data.objects[0].flag.url_svg,
//       tld: data.data.objects[0].tlds,
//       currency: Object.values(data.data.objects[0].currencies)[0].name,
//       language: Object.values(data.data.objects[0].languages)[0].name,
//       // borders:['germany']
//       borders: []
//     })
//     if(!data.data.objects[0].borders) {
//      data.data.objects[0] = []
//     }
//     data.data.objects[0].borders.map((border) => {
//       fetch(`https://api.restcountries.com/countries/v5/codes.alpha_3/${border}?pretty=1&api-key=rc_live_605ebf66a6544395a253e2d4832952c5`)
//       .then((res) => res.json())
//       .then((borderData) => {
//         // console.log(borderData.data.objects[0].names.common)
//         setCountryData((prevState) => ({...prevState, borders: [...prevState.borders, borderData.data.objects[0].names.common]}))
//       })
//     })
//   }
//   useEffect(() =>{
  
//   // if(location.state) {
//   // updateCountryData(location.state)
//   // return
//   // }

//   const url = `https://api.restcountries.com/countries/v5/names.common/${countryName}?pretty=1&api-key=rc_live_605ebf66a6544395a253e2d4832952c5`
//     fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//    // console.log(data.data.objects[0])
//   updateCountryData(data)
//   }).catch((err) =>{
//    setNotFound(true)
//   })
//   // }, [])
//  }, [countryName])
//   if(notFound) {
//     return <div>Country Not Found</div>
//   }
//   return (
//   countryData === null? 'loading......' : (
//     <main>
//       <div className="country-details-container">
//           <span className="Back-button" onClick={() => navigate(-1)}>
//          ← Back</span>
//         <div className="country-details">
//         <img src={countryData.flag} alt={`${countryData.name} flag`}/>
//           <div className="details-text-container">
//             <h1>{countryData.name}</h1>
//           <div className="details-text">
//             <p><b>Native Name: {countryData.nativeName}</b><span className="native-name"></span></p>
//             <p><b>Population: {countryData.population.toLocaleString('en-IN')}</b><span className="population"></span></p>
//             <p><b>Region: {countryData.region}</b><span className="region"></span></p>
//             <p><b>Sub-Region: {countryData.subRegion}</b><span className="sub-region"></span></p>
//             <p><b>Capital: {countryData.capital}</b><span className="capital"></span></p>
//             <p><b>Top Level Domain: {countryData.tld}</b><span className="top-level-domain"></span></p> 
//             <p><b>Currencies: {countryData.currency}</b><span className="currencies"></span></p>
//             <p><b>Languages: {countryData.language}</b><span className="languages"></span></p>
//            </div>
//             {countryData.borders.length !== 0 && <div className="border-countries">
//            <b>Border Countries: &nbsp;</b>
//             {
//               countryData.borders.map((border) => <Link key={border} to={`/${border}`}>{border}</Link>)
//             }
//             </div>}
//           </div>
//          </div>
//       </div>
//     </main>
//    )
//   )
// }    





// import React, { useEffect, useState, useContext } from 'react'
// import { Link, useLocation } from 'react-router-dom';

// import './CountryDetail.css'
// import { useNavigate, useParams } from 'react-router-dom'
// import { useTheme } from '../hooks/useTheme';


// export default function CountryDetail() {     //we use useTheme        
//   const [isDark] = useTheme()
//   const params = useParams()
//   const location = useLocation()
//   // console.log(location)
//   console.log(location.state)
//   const countryName = params.country
  
  

//   const [countryData, setCountryData] = useState(null)
//   const [notFound, setNotFound] = useState(false)
//   const navigate = useNavigate() 
//   function updateCountryData(data) {
//     setCountryData({
//       name: data.data.objects[0].names.common,
//       nativeName: Object.values(data.data.objects[0].names.native)[0].common,
//       population: data.data.objects[0].population,
//       region: data.data.objects[0].region,
//       subRegion: data.data.objects[0].subregion,
//       capital: Object.values(data.data.objects[0].capitals)[0].name,
//       flag: data.data.objects[0].flag.url_svg,
//       tld: data.data.objects[0].tlds,
//       currency: Object.values(data.data.objects[0].currencies)[0].name,
//       language: Object.values(data.data.objects[0].languages)[0].name,
//       // borders:['germany']
//       borders: []
//     })
//     if(!data.data.objects[0].borders) {
//      data.data.objects[0] = []
//     }
//     data.data.objects[0].borders.map((border) => {
//       fetch(`https://api.restcountries.com/countries/v5/codes.alpha_3/${border}?pretty=1&api-key=rc_live_605ebf66a6544395a253e2d4832952c5`)
//       .then((res) => res.json())
//       .then((borderData) => {
//         // console.log(borderData.data.objects[0].names.common)
//         setCountryData((prevState) => ({...prevState, borders: [...prevState.borders, borderData.data.objects[0].names.common]}))
//       })
//     })
//   }
//   useEffect(() =>{
  
//   // if(location.state) {
//   // updateCountryData(location.state)
//   // return
//   // }

//   const url = `https://api.restcountries.com/countries/v5/names.common/${countryName}?pretty=1&api-key=rc_live_605ebf66a6544395a253e2d4832952c5`
//     fetch(url)
//   .then((res) => res.json())
//   .then((data) => {
//    // console.log(data.data.objects[0])
//   updateCountryData(data)
//   }).catch((err) =>{
//    setNotFound(true)
//   })
//   // }, [])
//  }, [countryName])
//   if(notFound) {
//     return <div>Country Not Found</div>
//   }
//   return (
//   countryData === null? 'loading......' : (
//     <main>
//       <div className="country-details-container">
//           <span className="Back-button" onClick={() => navigate(-1)}>
//          ← Back</span>
//         <div className="country-details">
//         <img src={countryData.flag} alt={`${countryData.name} flag`}/>
//           <div className="details-text-container">
//             <h1>{countryData.name}</h1>
//           <div className="details-text">
//             <p><b>Native Name: {countryData.nativeName}</b><span className="native-name"></span></p>
//             <p><b>Population: {countryData.population.toLocaleString('en-IN')}</b><span className="population"></span></p>
//             <p><b>Region: {countryData.region}</b><span className="region"></span></p>
//             <p><b>Sub-Region: {countryData.subRegion}</b><span className="sub-region"></span></p>
//             <p><b>Capital: {countryData.capital}</b><span className="capital"></span></p>
//             <p><b>Top Level Domain: {countryData.tld}</b><span className="top-level-domain"></span></p> 
//             <p><b>Currencies: {countryData.currency}</b><span className="currencies"></span></p>
//             <p><b>Languages: {countryData.language}</b><span className="languages"></span></p>
//            </div>
//             {countryData.borders.length !== 0 && <div className="border-countries">
//            <b>Border Countries: &nbsp;</b>
//             {
//               countryData.borders.map((border) => <Link key={border} to={`/${border}`}>{border}</Link>)
//             }
//             </div>}
//           </div>
//          </div>
//       </div>
//     </main>
//    )
//   )
// } 




import React, { useEffect, useState, useContext } from 'react'
import { Link, useLocation } from 'react-router-dom';

import './CountryDetail.css'
import { useNavigate, useParams } from 'react-router-dom'
import { useTheme } from '../hooks/useTheme';


export default function CountryDetail() {     //both work     //any varaible name
  const [darkMode] = useTheme()
  const params = useParams()                               //Gets URL parameters (e.g., /canada → {country: "canada"}) //If URL is /canada, params.country = "canada"
  const location = useLocation()                           //Gets current URL location object
  // console.log(location)
  console.log(location.state)                              //Check if data was passed via state
  const countryName = params.country
  
  

  const [countryData, setCountryData] = useState(null)
  const [notFound, setNotFound] = useState(false)
  const navigate = useNavigate()                                 //For programmatic navigation
  function updateCountryData(data) {
    setCountryData({
      name: data.data.objects[0].names.common,
      nativeName: Object.values(data.data.objects[0].names.native)[0].common,
      population: data.data.objects[0].population,
      region: data.data.objects[0].region,
      subRegion: data.data.objects[0].subregion,
      capital: Object.values(data.data.objects[0].capitals)[0].name,
      flag: data.data.objects[0].flag.url_svg,
      tld: data.data.objects[0].tlds,
      currency: Object.values(data.data.objects[0].currencies)[0].name,
      language: Object.values(data.data.objects[0].languages)[0].name,
      // borders:['germany']
      borders: []
    })
    if(!data.data.objects[0].borders) {
     data.data.objects[0] = []
    }
    data.data.objects[0].borders.map((border) => {
      fetch(`https://api.restcountries.com/countries/v5/codes.alpha_3/${border}?pretty=1&api-key=rc_live_605ebf66a6544395a253e2d4832952c5`)
      .then((res) => res.json())
      .then((borderData) => {
        // console.log(borderData.data.objects[0].names.common)
        setCountryData((prevState) => ({...prevState, borders: [...prevState.borders, borderData.data.objects[0].names.common]}))
      })
    })
  }
  useEffect(() =>{
  
  // if(location.state) {
  // updateCountryData(location.state)
  // return
  // }

  const url = `https://api.restcountries.com/countries/v5/names.common/${countryName}?pretty=1&api-key=rc_live_605ebf66a6544395a253e2d4832952c5`
    fetch(url)
  .then((res) => res.json())
  .then((data) => {
   // console.log(data.data.objects[0])
  updateCountryData(data)
  }).catch((err) =>{
   setNotFound(true)
  })
  // }, [])
 }, [countryName])
  if(notFound) {
    return <div>Country Not Found</div>
  }
  return (
  countryData === null? 'loading......' : (
    <main>
      <div className="country-details-container">
          <span className="Back-button" onClick={() => navigate(-1)}>
         ← Back</span>
        <div className="country-details">
        <img src={countryData.flag} alt={`${countryData.name} flag`}/>
          <div className="details-text-container">
            <h1>{countryData.name}</h1>
          <div className="details-text">
            <p><b>Native Name: {countryData.nativeName}</b><span className="native-name"></span></p>
            <p><b>Population: {countryData.population.toLocaleString('en-IN')}</b><span className="population"></span></p>
            <p><b>Region: {countryData.region}</b><span className="region"></span></p>
            <p><b>Sub-Region: {countryData.subRegion}</b><span className="sub-region"></span></p>
            <p><b>Capital: {countryData.capital}</b><span className="capital"></span></p>
            <p><b>Top Level Domain: {countryData.tld}</b><span className="top-level-domain"></span></p> 
            <p><b>Currencies: {countryData.currency}</b><span className="currencies"></span></p>
            <p><b>Languages: {countryData.language}</b><span className="languages"></span></p>
           </div>
            {countryData.borders.length !== 0 && <div className="border-countries">
           <b>Border Countries: &nbsp;</b>
            {
              countryData.borders.map((border) => <Link key={border} to={`/${border}`}>{border}</Link>)
            }
            </div>}
          </div>
         </div>
      </div>
    </main>
   )
  )
} 