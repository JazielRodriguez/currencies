/* eslint-disable react/prop-types */
import React from 'react'
import styles from './CurrenciesList.module.css'
const CurrenciesList = (props) => {
  return (
    <ul className={styles.list}>
      <div className={styles.header}>
        <h2>Currency</h2>
        <h2>Price</h2>
      </div>
      {props.currencies
        ? (
            props.currencies.map((item) => (
            <li key={Math.random()}>
              <p>{item.curr}</p>
              <p>{item.price.toFixed(2)} €</p>
            </li>
            ))
          )
        : (
        <p></p>
          )}
    </ul>
  )
}
export default CurrenciesList
