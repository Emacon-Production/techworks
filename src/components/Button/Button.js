import React from 'react'
import './button.css'

const Button = ({ type, bgcolor, Placeholder }) => {
  return (
    <React.Fragment>
        {
            type === "route" ? (
                <></>
            ) : (
                <button className={`${bgcolor === "secondary" ? "secondary" : "main"}`}>
                    <span>{Placeholder}</span>
                </button>
            )
        }
    </React.Fragment>
  )
}

export default Button