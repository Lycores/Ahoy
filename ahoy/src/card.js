import './App.css';

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

function Card(props){
    const {name, css} = props

    return(
        <div className={css}>{name}</div>
    )
}

export {Card}