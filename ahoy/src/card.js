import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

let cardContainer = {
    width: '200px',
    height: '200px',
    margin: '50px',
    position:'relative'
  }

export  let umbrellaStyle = {
    ...cardContainer,
    marginRight: '50px',
    transitionDuration: '2000ms'
  }

export  let downCoatStyle = {
    ...cardContainer,
    marginRight: '50px',
    transitionDuration: '2000ms'
  }

export  let sweaterStyle = {
    ...cardContainer,
    marginRight: '50px',
    transitionDuration: '2000ms'
  }

export  let snowBootStyle = {
    ...cardContainer,
    marginRight: '50px',
    transitionDuration: '2000ms'
  }

export  let rainBootStyle = {
    ...cardContainer,
    marginRight: '50px',
    transitionDuration: '2000ms'
  }

export  let maskStyle = {
    ...cardContainer,
    marginRight: '50px',
    transitionDuration: '2000ms'
  }

const Card = React.forwardRef((props, ref) => {
    const {name, css} = props

    return(
        <div ref = {ref} className={css}><FontAwesomeIcon icon={faCoffee} /></div>
    )
})

export {Card}