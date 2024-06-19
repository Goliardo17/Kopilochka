import React from "react"
import "./slice.css"

export const Slice = ({ label, action }) => {
  return (
    <div className="main-slice" onClick={() => action()}>
      <h3>{label}</h3>
      <img />
    </div>
  )
}