/* eslint-disable react/prop-types */
import React from 'react'
import styles from './Price.module.css'
const Price = (props) => {
  return (
    <div className={styles.price}>
      <p>
        <b>Currency:</b> {props.selectedCurrency}
      </p>
      <p>
        <b>Total:</b> {props.priceOfEuros}
      </p>
    </div>
  )
}
export default Price
