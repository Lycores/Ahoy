import './App.css';


function Card(props){
    const {name, css} = props

    return(
        <div className={css}>{name}</div>
    )
}

export {Card}