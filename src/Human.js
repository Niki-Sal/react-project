import Player from './Player'
//functional Component
function Human(props){
    return(
        <div>
            <h1>Name: {props.name}</h1>
            <h1>lives in {props.location}</h1>
            <Player position="small Forward"/>
        </div>
        
    )
}

export default Human;