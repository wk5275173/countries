// import { useEffect, useState } from "react"

// export function getWindowSize() {
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
//     return windowSize
// }


import { useEffect, useState } from "react"

export function useWindowSize() {
    const [windowSize, setWindowSize] = useState({width: window.innerWidth, height: window.innerHeight})
    useEffect(() =>{
        window.addEventListener('resize', () =>{
            // console.log(window.innerWidth)
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        })
    }, [])
    return windowSize
}