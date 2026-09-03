
// import { Routes, Route, Link } from 'react-router-dom';
// import { useState } from "react"
// import Header from "./components/Header"
// import SearchBar from "./components/SearchBar"
// import SelectMenu from "./components/SelectMenu"
// import CountriesList from "./components/CountriesList"
// import './App.css'
// import CountryDetail from './components/CountryDetail';
// import Contact from './components/Contact';
// import { ThemeProvider } from './contexts/ThemeContext';



// const App = () =>{                             
//     const [query, setQuery] = useState('')
//     return (                                   
//         <ThemeProvider>
//         <Header/>               
//         <main>
//         <Routes>
//          {/* <Route path="/" element={<h1>Welcome to Countries App</h1>} />  */}
//          <Route path="/" element={
//         <>
//         <div className="search-filter-container">
//         <SearchBar setQuery={setQuery}/>
//         <SelectMenu/>
//         </div>
//         {
//         query === 'unmount'? '' :<CountriesList query={query}/>
//         }
//         </>
//         }/>                                                      
//         <Route path="/:country" element={<CountryDetail/>}/>     
//         <Route path="/contact" element={<Contact/>}/>            
//         </Routes>
//         </main>
//         </ThemeProvider>
//     )                                                           
// }                                           
// export default App



// import { Routes, Route, Link } from 'react-router-dom';
// import { use, useEffect, useState } from "react"
// import Header from "./components/Header"
// import SearchBar from "./components/SearchBar"
// import SelectMenu from "./components/SelectMenu"
// import CountriesList from "./components/CountriesList"
// import './App.css'
// import CountryDetail from './components/CountryDetail';
// import Contact from './components/Contact';
// import { ThemeProvider } from './contexts/ThemeContext';



// const App = () =>{                             
//     const [query, setQuery] = useState('')
//     useEffect(() =>{
//         window.addEventListener('resize', () =>{
//             console.log(window.innerWidth)
//         })
//     }, [])
//     return (                                   
//         <ThemeProvider>
//         <Header/>               
//         <main>
//         <Routes>
//          {/* <Route path="/" element={<h1>Welcome to Countries App</h1>} />  */}
//          <Route path="/" element={
//         <>
//         <div className="search-filter-container">
//         <SearchBar setQuery={setQuery}/>
//         <SelectMenu/>
//         </div>
//         <h1 style={{textAlign: 'center'}}>hii</h1>
//         {
//         query === 'unmount'? '' :<CountriesList query={query}/>
//         }
//         </>
//         }/>                                                      
//         <Route path="/:country" element={<CountryDetail/>}/>     
//         <Route path="/contact" element={<Contact/>}/>            
//         </Routes>
//         </main>
//         </ThemeProvider>
//     )                                                           
// }                                           
// export default App




// import { Routes, Route, Link } from 'react-router-dom';
// import { use, useEffect, useState } from "react"
// import Header from "./components/Header"
// import SearchBar from "./components/SearchBar"
// import SelectMenu from "./components/SelectMenu"
// import CountriesList from "./components/CountriesList"
// import './App.css'
// import CountryDetail from './components/CountryDetail';
// import Contact from './components/Contact';
// import { ThemeProvider } from './contexts/ThemeContext';



// const App = () =>{                             
//     const [query, setQuery] = useState('')
//     const [width, setWidth] = useState(window.innerWidth)
//     useEffect(() =>{
//         window.addEventListener('resize', () =>{
//             // console.log(window.innerWidth)
//             setWidth(window.innerWidth)
//         })
//     }, [])
//     return (                                   
//         <ThemeProvider>
//         <Header/>               
//         <main>
//         <Routes>
//          {/* <Route path="/" element={<h1>Welcome to Countries App</h1>} />  */}
//          <Route path="/" element={
//         <>
//         <div className="search-filter-container">
//         <SearchBar setQuery={setQuery}/>
//         <SelectMenu/>
//         </div>
//         <h1 style={{textAlign: 'center'}}>{width}</h1>
//         {
//         query === 'unmount'? '' :<CountriesList query={query}/>
//         }
//         </>
//         }/>                                                      
//         <Route path="/:country" element={<CountryDetail/>}/>     
//         <Route path="/contact" element={<Contact/>}/>            
//         </Routes>
//         </main>
//         </ThemeProvider>
//     )                                                           
// }                                           
// export default App



// import { Routes, Route, Link } from 'react-router-dom';
// import { use, useEffect, useState } from "react"
// import Header from "./components/Header"
// import SearchBar from "./components/SearchBar"
// import SelectMenu from "./components/SelectMenu"
// import CountriesList from "./components/CountriesList"
// import './App.css'
// import CountryDetail from './components/CountryDetail';
// import Contact from './components/Contact';
// import { ThemeProvider } from './contexts/ThemeContext';



// const App = () =>{                             
//     const [query, setQuery] = useState('')
//     const [windowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight})
//     useEffect(() =>{
//         window.addEventListener('resize', () =>{
//             // console.log(window.innerWidth)
//             setWindowSize({
//                 width: window.innerWidth,
//                 height: window.innerHeight
//             })
//         })
//     }, [])
//     return (                                   
//         <ThemeProvider>
//         <Header/>               
//         <main>
//         <Routes>
//          {/* <Route path="/" element={<h1>Welcome to Countries App</h1>} />  */}
//          <Route path="/" element={
//         <>
//         <div className="search-filter-container">
//         <SearchBar setQuery={setQuery}/>
//         <SelectMenu/>
//         </div>
//         <h1 style={{textAlign: 'center'}}>{windowSize.width} X {windowSize.height}</h1>
//         {
//         query === 'unmount'? '' :<CountriesList query={query}/>
//         }
//         </>
//         }/>                                                      
//         <Route path="/:country" element={<CountryDetail/>}/>     
//         <Route path="/contact" element={<Contact/>}/>            
//         </Routes>
//         </main>
//         </ThemeProvider>
//     )                                                           
// }                                           
// export default App




// import { Routes, Route, Link } from 'react-router-dom';
// import { use, useEffect, useState } from "react"
// import Header from "./components/Header"
// import SearchBar from "./components/SearchBar"
// import SelectMenu from "./components/SelectMenu"
// import CountriesList from "./components/CountriesList"
// import './App.css'
// import CountryDetail from './components/CountryDetail';
// import Contact from './components/Contact';
// import { ThemeProvider } from './contexts/ThemeContext';
// import { getWindowSize } from '../../utility';



// const App = () =>{                             
//     const [query, setQuery] = useState('')
//     const size = getWindowSize()
//     return (                                   
//         <ThemeProvider>
//         <Header/>               
//         <main>
//         <Routes>
//          {/* <Route path="/" element={<h1>Welcome to Countries App</h1>} />  */}
//          <Route path="/" element={
//         <>
//         <div className="search-filter-container">
//         <SearchBar setQuery={setQuery}/>
//         <SelectMenu/>
//         </div>
//         <h1 style={{textAlign: 'center'}}>{size.width} X {size.height}</h1>
//         {
//         query === 'unmount'? '' :<CountriesList query={query}/>
//         }
//         </>
//         }/>                                                      
//         <Route path="/:country" element={<CountryDetail/>}/>     
//         <Route path="/contact" element={<Contact/>}/>            
//         </Routes>
//         </main>
//         </ThemeProvider>
//     )                                                           
// }                                           
// export default App





// import { Routes, Route, Link } from 'react-router-dom';
// import { use, useEffect, useState } from "react"
// import Header from "./components/Header"
// import SearchBar from "./components/SearchBar"
// import SelectMenu from "./components/SelectMenu"
// import CountriesList from "./components/CountriesList"
// import './App.css'
// import CountryDetail from './components/CountryDetail';
// import Contact from './components/Contact';
// import { ThemeProvider } from './contexts/ThemeContext';
// import { useWindowSize } from './hooks/useWindowSize'



// const App = () =>{                             
//     const [query, setQuery] = useState('')
//     const size = useWindowSize()
//     return (                                   
//         <ThemeProvider>
//         <Header/>               
//         <main>
//         <Routes>
//          {/* <Route path="/" element={<h1>Welcome to Countries App</h1>} />  */}
//          <Route path="/" element={
//         <>
//         <div className="search-filter-container">
//         <SearchBar setQuery={setQuery}/>
//         <SelectMenu/>
//         </div>
//         <h1 style={{textAlign: 'center'}}>{size.width} X {size.height}</h1>
//         {
//         query === 'unmount'? '' :<CountriesList query={query}/>
//         }
//         </>
//         }/>                                                      
//         <Route path="/:country" element={<CountryDetail/>}/>     
//         <Route path="/contact" element={<Contact/>}/>            
//         </Routes>
//         </main>
//         </ThemeProvider>
//     )                                                           
// }                                           
// export default App



// import { Routes, Route, Link } from 'react-router-dom';
// import { use, useEffect, useState } from "react"
// import Header from "./components/Header"
// import SearchBar from "./components/SearchBar"
// import SelectMenu from "./components/SelectMenu"
// import CountriesList from "./components/CountriesList"
// import './App.css'
// import CountryDetail from './components/CountryDetail';
// import Contact from './components/Contact';
// import { ThemeProvider } from './contexts/ThemeContext';



// const App = () =>{                             
//     const [query, setQuery] = useState('')
//     return (                                   
//         <ThemeProvider>
//         <Header/>               
//         <main>
//         <Routes>
//          {/* <Route path="/" element={<h1>Welcome to Countries App</h1>} />  */}
//          <Route path="/" element={
//         <>
//         <div className="search-filter-container">
//         <SearchBar setQuery={setQuery}/>
//         <SelectMenu/>
//         </div>
//         {
//         query === 'unmount'? '' :<CountriesList query={query}/>
//         }
//         </>
//         }/>                                                      
//         <Route path="/:country" element={<CountryDetail/>}/>     
//         <Route path="/contact" element={<Contact/>}/>            
//         </Routes>
//         </main>
//         </ThemeProvider>
//     )                                                           
// }                                           
// export default App





import { Routes, Route, Link } from 'react-router-dom';
import { use, useEffect, useState } from "react"
import Header from "./components/Header"
import SearchBar from "./components/SearchBar"
import SelectMenu from "./components/SelectMenu"
import CountriesList from "./components/CountriesList"
import './App.css'
import CountryDetail from './components/CountryDetail';
import Contact from './components/Contact';
import { ThemeProvider } from './contexts/ThemeContext';



const App = () =>{                             
    const [query, setQuery] = useState('')
    return (                                   
        <ThemeProvider>
        <Header/>               
        <main>
        <Routes>
         {/* <Route path="/" element={<h1>Welcome to Countries App</h1>} />  */}
         <Route path="/" element={                        // setQuery is passed as a prop
        <>
        <div className="search-filter-container">
        <SearchBar setQuery={setQuery}/>                
        <SelectMenu setQuery={setQuery}/>
        </div>
        {                                                      //Prop Name(setQuery={setQuery}) before the curley braces //(Can be ANYTHING!) e.g <SelectMenu updateQuery={setQuery}/>, <SelectMenu whatever={setQuery}/> but at the right side of = in curely braces //MUST BE THE SETTER FROM useState //In child component: Must match the prop name (left side) // for example <SelectMenu updateQuery={setQuery}/> // Prop name is "updateQuery" //<SelectMenu updateQuery={setQuery}/> //Must match "updateQuery" //return (  <select onChange={(e) => updateQuery(e.target.value)}> //Called as updateQuery//
        query === 'unmount'? '' :<CountriesList query={query}/>
        }
        </>
        }/>                                                      
        <Route path="/:country" element={<CountryDetail/>}/>     
        <Route path="/contact" element={<Contact/>}/>            
        </Routes>
        </main>
        </ThemeProvider>
    )                                                           
}                                           
export default App