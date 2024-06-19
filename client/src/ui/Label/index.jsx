import React from "react"
import "./styles/label-option.css"
import "./styles/label-primary.css"
import "./styles/label-secondary.css"
import "./styles/label-view.css"

export const Label = ({ style, image, text, action }) => {
  return (
    <div className={style} onClick={() => action()}>
      <div className="label-image-wrapper">
        <img src={image} />
      </div>
      <p>{text}</p>
    </div>
  )
}