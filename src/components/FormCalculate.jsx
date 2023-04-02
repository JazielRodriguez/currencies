/* eslint-disable react/prop-types */
import React from 'react'
const FormCalculate = (props) => {
  return (
    <form>
      <div>
        <label htmlFor='currency'>Currency:</label>
        <select id='currency'>
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
        <label htmlFor='amount'>Amount:</label>
        <input type='number' id='amount' min={1} />
      </div>
      <div>
        <label htmlFor='name'>Name:</label>
        <input type='text' id='name' min={1} />
      </div>
      <div>
        <label htmlFor='email'>Email:</label>
        <input type='number' id='email' min={1} />
      </div>
    </form>
  )
}
export default FormCalculate
