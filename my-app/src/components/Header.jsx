

// export default function Header() {
//   return (
//    <header className="header-container">
//     <div className="header-content">
//     <h2 className="title"><a href="/">Where in the world?</a></h2>
//     <p className="theme-changer" onClick={() => {
//       document.body.classList.toggle('dark')
//     }}><i className="fa-solid fa-moon"></i>&nbsp;&nbsp;Dark mode</p>
//     </div>
//    </header>
//   )
// }


// import { useState } from 'react'
// export default function Header() {
//   const [isDark, setIsDark] = useState(false)
//   return (
//    <header className="header-container">
//     <div className="header-content">
//     <h2 className="title"><a href="/">Where in the world?</a></h2>
//     <p className="theme-changer" onClick={() => {
//       document.body.classList.toggle('dark')
//       setIsDark(!isDark)
//     }}>
//     <i className={`fa-solid fa-${isDark ? 'sun' : 'moon'}`}></i>&nbsp;&nbsp;{isDark ? 'Light' : 'Dark'} mode</p>
//     </div>
//    </header>
//   )
// }



// import { useState } from 'react'
// export default function Header() {
//   const [isDark, setIsDark] = useState(false)
//   // console.log(localStorage.getItem('isDarkMode'))
//   console.log(JSON.parse(localStorage.getItem('isDarkMode')))
//   return (
//    <header className="header-container">
//     <div className="header-content">
//     <h2 className="title"><a href="/">Where in the world?</a></h2>
//     <p className="theme-changer" onClick={() => {
//       document.body.classList.toggle('dark')
//       setIsDark(!isDark)
//       localStorage.setItem('isDarkMode', !isDark)
//     }}>
//     <i className={`fa-solid fa-${isDark ? 'sun' : 'moon'}`}></i>&nbsp;&nbsp;{isDark ? 'Light' : 'Dark'} mode</p>
//     </div>
//    </header>
//   )
// }



// import { useState } from 'react'
// export default function Header() {
//   const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))
//   return (
//    <header className="header-container">
//     <div className="header-content">
//     <h2 className="title"><a href="/">Where in the world?</a></h2>
//     <p className="theme-changer" onClick={() => {
//       document.body.classList.toggle('dark')
//       setIsDark(!isDark)
//       localStorage.setItem('isDarkMode', !isDark)
//     }}>
//     <i className={`fa-solid fa-${isDark ? 'sun' : 'moon'}`}></i>&nbsp;&nbsp;{isDark ? 'Light' : 'Dark'} mode</p>
//     </div>
//    </header>
//   )
// }


// import { useContext, useState } from 'react'
// import { ThemeContext } from '../contexts/ThemeContext'
// export default function Header() {

//   const [isDark, setIsDark] = useContext(ThemeContext)   //The Header component changes the theme, so it needs the setIsDark function.//

//   if(isDark) {
//     document.body.classList.add('dark')
//   }else {
//     document.body.classList.remove('dark')
//   }

//   return (
//    <header className="header-container">
//     <div className="header-content">
//     <h2 className="title"><a href="/">Where in the world?</a></h2>
//     <p className="theme-changer" onClick={() => {
//       setIsDark(!isDark)
//       localStorage.setItem('isDarkMode', !isDark)
//     }}>
//     <i className={`fa-solid fa-${isDark ? 'sun' : 'moon'}`}></i>&nbsp;&nbsp;{isDark ? 'Light' : 'Dark'} mode</p>
//     </div>
//    </header>
//   )
// }




import { useContext, useState } from 'react'

import { useTheme } from '../hooks/useTheme'
export default function Header() {

  const [theme, myTheme] = useTheme()   

  if(theme) {
    document.body.classList.add('dark')
  }else {
    document.body.classList.remove('dark')
  }

  return (
   <header className="header-container">
    <div className="header-content">
    <h2 className="title"><a href="/">Where in the world?</a></h2>
    <p className="theme-changer" onClick={() => {
      myTheme(!theme)
      localStorage.setItem('isDarkMode', !theme)
    }}>
    <i className={`fa-solid fa-${theme ? 'sun' : 'moon'}`}></i>&nbsp;&nbsp;{theme ? 'Light' : 'Dark'} mode</p>
    </div>
   </header>
  )
}

