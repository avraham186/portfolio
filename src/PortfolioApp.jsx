// import React, { StrictMode, useState } from 'react'
import React, { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
// import { Routes, Route, HashRouter, BrowserRouter } from 'react-router-dom'
import { routes } from './routes'
import { Header } from './cmps/Header'
import { Footer } from './cmps/Footer'
import { Weather } from './cmps/Weather'
export const PortfolioApp = () => {
  const [position, setPosition] = useState(null)
  return (
    <div className='app flex column space-between'>
      {/* <HashRouter> */}
      <BrowserRouter>
        {/* <StrictMode> */}
        <Header position={position} setPosition={setPosition} />
        <Weather />
        {/* <div className="weather-homepage flex align-center justify-end"><Weather /></div> */}
        <Routes>
          {routes.map(route => <Route key={route.path} path={route.path} element={<route.element position={position} setPosition={setPosition} />} />)}
        </Routes>
        <Footer />
        {/* </StrictMode> */}
      </BrowserRouter>
      {/* </HashRouter> */}
    </div>
  )
}
