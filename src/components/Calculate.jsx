/* eslint-disable react/prop-types */
import React from 'react'
import styles from './Calculate.module.css'
import FormCalculate from './FormCalculate'
const Calculate = (props) => {
  const calculateStateHandler = () => {
    props.onCalculateModal(false)
  }
  return (
    <div className={styles.calculate}>
      <div className={styles.modal}>
        <div className={styles.title}>
          <h3>Calculate price:</h3>
        </div>
        <FormCalculate currencies={props.currencies} />
        <div className={styles.btn}>
          <button
            onClick={calculateStateHandler}
            className={styles['btn-close']}
          >
            Close
          </button>
          <button className={styles['btn-calculate']}>Calculate</button>
        </div>
      </div>
    </div>
  )
}
export default Calculate
