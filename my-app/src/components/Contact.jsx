// import React from 'react'
// import { useParams } from 'react-router-dom'

// export default function Contact() {         //give url(give us information that we are on which page)
//     const params = useParams()
//     console.log(params)
//   return (
//     <h1>Contact</h1>
//   )
// }




// import { useContext } from 'react' 
// import { ThemeContext } from '../contexts/ThemeContext'
// import { useParams } from 'react-router-dom'

// export default function Contact() {   
// const a = useContext('theme')
// console.log(a)
//   return (
//     <h1>Contact</h1>
//   )
// }



// import { useContext } from 'react' 
// import { ThemeContext } from '../contexts/ThemeContext'
// import { useParams } from 'react-router-dom'

// export default function Contact() {        //Pass the context object, not a string
// const a = useContext(ThemeContext)
// console.log(a)
//   return (
//     <h1>Contact</h1>
//   )
// }


// import { useContext } from 'react' 
// import { ThemeContext } from '../contexts/ThemeContext'
// import { useParams } from 'react-router-dom'

// export default function Contact() {        
// const a = useContext(ThemeContext)    //Yes, exactly! When you destructure both [isDark, setIsDark], the value will appear in the console because you're properly accessing the context value.
// console.log(a)
//   return (
//     <h1>Contact</h1>
//   )
// }


import { useContext } from 'react' 
import { ThemeContext } from '../contexts/ThemeContext'
import { useParams } from 'react-router-dom'

export default function Contact() {                     //Only isDark value in console the value not come
const [isDark] = useContext(ThemeContext)       
  return (
    <h1>Contact</h1>
  )
}




