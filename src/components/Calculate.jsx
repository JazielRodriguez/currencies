/* eslint-disable react/prop-types */
import React, { useState, useRef } from 'react'
import styles from './Calculate.module.css'
import FormCalculate from './FormCalculate'
import Price from './Price'
const Calculate = (props) => {
  const priceRef = useRef()
  const [showPriceState, setShowPriceState] = useState(false)
  const [priceOfEuros, setPriceOfEuros] = useState(0)
  const [selectedCurrency, setSelectedCurrency] = useState('')

  const calculateStateHandler = () => {
    props.onCalculateModal(false)
  }
  const calculatePriceHandler = () => {
    const priceOfCurrency = props.currencies.filter(
      (currency) => selectedCurrency === currency.curr
    )

    setShowPriceState(true)
    setPriceOfEuros(() => {
      return priceRef.current.value * priceOfCurrency[0].price
    })
  }
  return (
    <div className={styles.calculate}>
      <div className={styles.modal}>
        <div className={styles.title}>
          <h3>Calculate price:</h3>
        </div>
        <FormCalculate
          currencies={props.currencies}
          priceRef={priceRef}
          onSelectCurrency={setSelectedCurrency}
        />
        {showPriceState && (
          <Price
            priceOfEuros={priceOfEuros}
            selectedCurrency={selectedCurrency}
          />
        )}
        <div className={styles.btn}>
          <button
            onClick={calculateStateHandler}
            className={styles['btn-close']}
          >
            Close
          </button>
          <button
            className={styles['btn-calculate']}
            onClick={calculatePriceHandler}
          >
            Calculate
          </button>
        </div>
      </div>
    </div>
  )
}
export default Calculate
