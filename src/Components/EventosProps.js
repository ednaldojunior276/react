function EventosProps(props){
    return(
        <div>
            <button onClick = {props.event} > {props.text}</button>
        </div>

    )
}
export default EventosProps