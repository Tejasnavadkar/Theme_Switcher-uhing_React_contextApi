import { createContext,useContext } from "react";

export const ThemeContext = createContext({
    themeMode:"light",
    darkTheme: () =>{},      //hum initialy bhi context ko kuch value de sakate hai
    lightTheme: ()=>{},
})
                                //these both works same but syntax is differen like creat routs

export const ThemeProvider = ThemeContext.Provider   // here we directly create provider and store it in variable

export default function useTheme(){
    return useContext(ThemeContext)      // here wwe create custom hook that returns thememode,darktheme,lighttheme once
}