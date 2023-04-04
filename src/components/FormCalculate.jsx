/* eslint-disable react/prop-types */
import React from 'react'
const FormCalculate = (props) => {
  const changeHandler = (e) => {
    props.onSelectCurrency(e.target.value)
  }
  return (
    <form>
      <div>
        <label htmlFor='currency'>Currency:</label>
        <select id='currency' onChange={changeHandler}>
          <option value={null}>Select a currency</option>
          {props.currencies
            ? (
                props.currencies.map((currency) => (
                  <option key={Math.random()}>{currency.curr}</option>
                ))
              )
            : (
                <option>Error</option>
              )}
        </select>
      </div>
      <div>
        <label htmlFor='amount'>Amount {'(€)'}:</label>
        <input type='number' id='amount' min={1} ref={props.priceRef} />
      </div>
    </form>
  )
}
export default FormCalculate
