import { useState } from 'react'
import reactLogo from './assets/react.svg'
import { DarkTheme } from './Theme.js'
import './App.css'
import WaifuFeed from './WaifuFeed.jsx'

const AppGridTemplateAreas = {
    navArea: "nav",
    mainArea: "main",
    footerArea: "footer",
}

const Theme = DarkTheme

function SideMenu() {
}

function Footer() {
    return (
        <div className='footer' style={{
            color: Theme.textPrimary,
            backgroundColor: Theme.backgroundSecondary,
        }}>Footerです</div>
    )
}

function Main() {


    return (
        <div className='main' style={{
            color: Theme.textPrimary,
            margin: "auto",

        }}>
          <WaifuFeed/>
        </div>
    )
}


function App() {
  const {navArea, mainArea, footerArea} = AppGridTemplateAreas

  

  return (
    <div  className="App" 
      style={{
          backgroundColor: Theme.backgroundPrimary,
          color: Theme.highlightPrimary,
          height: "100vh",
          display: "grid",
          gridTemplateAreas: `
            ${navArea} ${mainArea} ${footerArea}
          `,
          gridTemplateRows: "1fr 10fr 1fr",
      }
    }>

      <nav style={{
          backgroundColor: Theme.backgroundSecondary,
          minHeight: "50px",
      }}>Nav</nav>
      <Main/>
      <Footer/>
    </div>
  )
}

export default App
