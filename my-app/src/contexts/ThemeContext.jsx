// import { createContext } from "react";

//    //createContext() 

// const ThemeContext = createContext()

// console.log(ThemeContext)



// import { createContext } from "react";

// export const ThemeContext = createContext()     //when drfault values are not it gives undefined



// import { createContext } from "react";

// export const ThemeContext = createContext('Theme')  //this value is over ride because we use it in ThemeContext.provider


// import { createContext } from "react";

// export const ThemeContext = createContext()




// import { useState } from "react";
// import { createContext } from "react";

// export const ThemeContext = createContext()

// export function ThemeProvider() {
//     const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))
//     return <h1>hii</h1>
// }
 


// import { useState } from "react";
// import { createContext } from "react";

// export const ThemeContext = createContext()

// export function ThemeProvider(props) {
//     console.log(props)
//     const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))
//     return <h1>hii</h1>
// }



// import { useState } from "react";
// import { createContext } from "react";

// export const ThemeContext = createContext()

// export function ThemeProvider(props) {
//     console.log(props.children)
//     const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))
//     return <div>{props.children}</div>
// }


import { useState } from "react";
import { createContext } from "react";

export const ThemeContext = createContext()

export function ThemeProvider(props) {
    console.log(props.children)
    const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))
    return <ThemeContext.Provider value={[isDark, setIsDark]}>{props.children}</ThemeContext.Provider>
}
