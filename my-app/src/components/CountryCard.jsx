
// import React from 'react';
// import { Link } from 'react-router-dom';
// export default function CountryCard({name, flag, population, region, capital}) {  
//   return (
//     <Link className="country-card" to={`/${name}`} state="country state"> 
//         <img src={flag} alt={`${name} flag`} />
//           <div className="card-text">
//               <h3 className="card-title">{name}</h3>
//               <p><b>Population: </b>{population}</p>
//               <p><b>Region: </b>{region}</p>
//               <p><b>Capital: </b>{capital}</p>
//           </div>
//     </Link>
 
//   )
// }


// import React from 'react';
// import { Link } from 'react-router-dom';
// export default function CountryCard({name, flag, population, region, capital}) {  
//   return (
//     <Link className="country-card" to={`/${name}`} state={{name, flag, population, region, capital}}> 
//         <img src={flag} alt={`${name} flag`} />
//           <div className="card-text">
//               <h3 className="card-title">{name}</h3>
//               <p><b>Population: </b>{population}</p>
//               <p><b>Region: </b>{region}</p>
//               <p><b>Capital: </b>{capital}</p>
//           </div>
//     </Link>
 
//   )
// }


import React from 'react';
import { Link } from 'react-router-dom';
export default function CountryCard({name, flag, population, region, capital, data}) {  //Where to navigate to= and //What data to pass state  ( If name = "Germany" → to="/Germany") //User clicks Germany card,Link navigates to "/Germany",Route matches path="/:country",:country = "Germany",CountryDetail renders,useParams() → { country: "Germany" },Fetches data for Germany
  return (
    <Link className="country-card" to={`/${name}`} state={data}>          
        <img src={flag} alt={`${name} flag`} />
          <div className="card-text">
              <h3 className="card-title">{name}</h3>
              <p><b>Population: </b>{population}</p>
              <p><b>Region: </b>{region}</p>
              <p><b>Capital: </b>{capital}</p>
          </div>
    </Link>
 
  )
}