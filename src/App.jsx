import { useEffect, useState } from 'react'
import './App.css'
import ThemeBtn from './components/ThemeBtn'
import Card from './components/card'
import { ThemeProvider } from './Context/Theme'


function App() {
 const [themeMode,setThemeMode] = useState("light")

 const lightTheme = () =>{
  setThemeMode("light")
 }

 
 const darkTheme = () =>{
  setThemeMode("dark")
 }

 //actual change in a theme 

 useEffect(() =>{
  document.querySelector('html').classList.remove("light","dark")   // pehele wala class remove kardo
  document.querySelector('html').classList.add(themeMode)
 },[themeMode]  )  //jab bhi thememode change ho ye vala function chala do

  return (
   <ThemeProvider value={{themeMode,lightTheme,darkTheme}}> {/*here lightTheme and darkTheme are functions not states */}                  {/* wrap kar diya  */}
      <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                       <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                       <Card />
                    </div>
                </div>
      </div>
    </ThemeProvider>

  )
}

export default App
