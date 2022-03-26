import './App.css';
import React from 'react'
let cardContainer = {
    width: '200px',
    height: '200px',
    margin: '50px',
    position:'relative'
  }

export  let umbrellaStyle = {
    ...cardContainer,
    marginRight: '50px'
  }

export  let downCoatStyle = {
    ...cardContainer,
    marginRight: '50px'
  }

export  let sweaterStyle = {
    ...cardContainer,
    marginRight: '50px'
  }

export  let snowBootStyle = {
    ...cardContainer,
    marginRight: '50px'
  }

export  let rainBootStyle = {
    ...cardContainer,
    marginRight: '50px'
  }

export  let maskStyle = {
    ...cardContainer,
    marginRight: '50px'
  }

const Card = React.forwardRef((props, ref) => {
    const {name, css} = props

    return(
        <div ref = {ref} className={css}>{name}</div>
    )
})

export {Card}