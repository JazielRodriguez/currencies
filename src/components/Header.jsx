/* eslint-disable react/prop-types */
import React from 'react'
import styles from './Header.module.css'
const Header = (props) => {
  const calculateStateHandler = () => {
    props.onCalculateModal(true)
  }
  return (
    <header className={styles.title}>
      <div>
        <h1>Euro prices</h1>
        <p>Last Update: {props.date}</p>
      </div>
      <div>
        <button onClick={calculateStateHandler}>Calculate</button>
      </div>
    </header>
  )
}
export default Header
