/*function Item(props){
    return(
        <>
                <li> {props.marca}</li>
        </>
    )
}

export default Item*/

function Item({marca , ano}){
    return(
        <>
                <li> {marca} - {ano}</li>
        </>
    )
}

export default Item