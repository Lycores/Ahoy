import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSnowman } from '@fortawesome/free-solid-svg-icons'

let cardContainer = {
    width: '200px',
    height: '200px',
    margin: '50px',
    position:'relative'
  }

export  let umbrellaStyle = {
    ...cardContainer,
    marginRight: '50px',
    transitionDuration: '2000ms',
    flexShrink: 0
  }

export  let downCoatStyle = {
    ...cardContainer,
    marginRight: '50px',
    transitionDuration: '2000ms',
    flexShrink: 0
  }

export  let sweaterStyle = {
    ...cardContainer,
    marginRight: '50px',
    transitionDuration: '2000ms',
    flexShrink: 0
  }

export  let snowBootStyle = {
    ...cardContainer,
    marginRight: '50px',
    transitionDuration: '2000ms',
    flexShrink: 0
  }

export  let rainBootStyle = {
    ...cardContainer,
    marginRight: '50px',
    transitionDuration: '2000ms',
    flexShrink: 0
  }

export  let maskStyle = {
    ...cardContainer,
    marginRight: '50px',
    transitionDuration: '2000ms',
    flexShrink: 0
  }

const Card = React.forwardRef((props, ref) => {
    const {name, css} = props

    return(
        <div ref = {ref} className={css}>{name}</div>
    )
})

export {Card}