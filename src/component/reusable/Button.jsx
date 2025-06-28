import React from 'react'

const Button = (props) => {
  return (
    <div>
      <button style={{backgroundColor:props.bgColor,color:props.textColor,fontSize:props.size, padding:props.pad,borderRadius:props.radius}}>{props.title}</button>
    </div>
  )
}

export default Button
