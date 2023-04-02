import React, { useEffect, useState } from 'react'
import { transformCurrencies } from './utils/transform'
// import styles from './App.module.css'
import CurrenciesList from './components/CurrenciesList'
import Header from './components/Header'
import Calculate from './components/Calculate'
const App = () => {
  const [data, setData] = useState()
  const [currencies, setCurrencies] = useState()
  const [calculateModalIsVisible, setCalculateModalIsVisible] = useState(false)
  useEffect(() => {
    const get = async () => {
      const res = await fetch('https://www.frankfurter.app/latest/')
      const data = await res.json()
      const obj = data.rates
      setCurrencies(transformCurrencies(obj))
      setData(data)
    }
    get()
  }, [])
  console.log(currencies)
  return (
    <>
      <Header date={data?.date} onCalculateModal={setCalculateModalIsVisible} />
      <CurrenciesList currencies={currencies} />
      {calculateModalIsVisible && (
        <Calculate
          onCalculateModal={setCalculateModalIsVisible}
          currencies={currencies}
        />
      )}
    </>
  )
}
export default App
