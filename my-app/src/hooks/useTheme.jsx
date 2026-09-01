// import { useContext } from "react";
// import { ThemeContext } from "../contexts/ThemeContext";


// export function useTheme() {
//     const [isDark, setIsDark] = useContext(ThemeContext) 
//     return [isDark, setIsDark]
// }


// import { useContext } from "react";
// import { ThemeContext } from "../contexts/ThemeContext";


// export function useTheme() {                                   //any name we can gave it is just varaible name
//     const [theme, setTheme] = useContext(ThemeContext) 
//     return [theme, setTheme]
// }

// import { useContext } from "react";
// import { ThemeContext } from "../contexts/ThemeContext";


// export function useTheme() {                           //ways to create hooks        
//     return useContext(ThemeContext) 
// }


import { useContext } from "react";
import { ThemeContext } from "../contexts/ThemeContext";


export const useTheme = () => useContext(ThemeContext)