import React, { useEffect, useState } from 'react'
import { BtnSwitch } from './BtnSwitch';
export const Weather = () => {
  const [weather, setWeather] = useState({
    pos: '',
    currC: '',
    currF: '',
    err: '',
    icon: '',
    iconText: '',
    isFer: false
  })
  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  };
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(success, error, options);
  })

  useEffect(() => {
    if (weather.pos) {
      getWeather()
    }
  })

  const success = (pos) => {
    setWeather(() => {
      return {
        ...weather,
        pos: {
          lat: pos.coords.latitude,
          long: pos.coords.longitude
        }
      }
    })
  }

  const error = (err) => {
    setWeather(() => {
      return {
        ...weather,
        err
      }
    })
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }
  const getWeather = async () => {
    const url = `${process.env.REACT_APP_CURRENTCONDITION}${weather.pos.lat},${weather.pos.long}`
    const currentReq = await fetch(url,{'Access-Control-Allow-Origin':'*'})
    const currentCond = await currentReq.json()
    const cel = currentCond.current.temp_c.toString().slice(0, 2)
    const fer = currentCond.current.temp_f.toString().slice(0, 2)
    setWeather(() => {
      return {
        ...weather,
        currC: cel,
        currF: fer,
        icon: currentCond.current.condition.icon,
        iconText: currentCond.current.condition.text
      }
    })
  }
  const setFOrC = () => {
    setWeather((prev) => {
      return {
        ...weather,
        isFer: !prev.isFer
      }
    })
  }

  return (
    <section className="weather-wrapper main-layout">
      <div className="flex justify-end">
        <div className='weather flex column justify-center' onClick={setFOrC}>
          {weather.icon !== '' && <img className='weather-icon' src={weather.icon} alt={weather.iconText} />}
          <BtnSwitch isFer={weather.isFer} />
          <span className='degrees'>{weather.isFer ? weather.currF : weather.currC}°</span>
        </div>
      </div>
    </section>
  )
}